import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(5, "Please share a little more").max(2000),
});

export const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject") || undefined,
      message: fd.get("message"),
    });

    if (!parsed.success) {
      const first = parsed.error.errors[0]?.message ?? "Please check the form";
      toast({ title: "Hmm, one moment", description: first, variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const { error: insertError } = await supabase
        .from("contact_submissions")
        .insert([parsed.data]);
      if (insertError) throw insertError;

      // Fire-and-forget email notification
      supabase.functions
        .invoke("send-contact-email", { body: parsed.data })
        .catch(() => {
          /* email is best-effort; submission already saved */
        });

      setDone(true);
      toast({
        title: "Message received",
        description: "Thanks for reaching out — we'll be in touch shortly.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "Please try again or email cesarlca0125@gmail.com directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="container grid lg:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Get in Touch</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-black text-primary text-balance">
            Questions? Ideas? Want to help?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-balance">
            Whether you're a parent, teacher, school admin or business — we'd love to hear from you.
          </p>

          <a
            href="mailto:cesarlca0125@gmail.com"
            className="mt-8 inline-flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-card-soft hover:shadow-elegant transition-all"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Email directly</div>
              <div className="font-semibold text-primary">cesarlca0125@gmail.com</div>
            </div>
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 rounded-3xl bg-card border border-border p-8 md:p-10 shadow-elegant"
        >
          {done ? (
            <div className="text-center py-12">
              <div className="mx-auto h-16 w-16 rounded-full bg-accent-gradient text-accent-foreground inline-flex items-center justify-center shadow-accent-glow">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-primary">Thank you!</h3>
              <p className="mt-2 text-muted-foreground">Your message is on its way to our team.</p>
              <Button variant="outline" className="mt-6" onClick={() => setDone(false)}>
                Send another
              </Button>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required maxLength={120} className="mt-2" placeholder="Jane Doe" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} className="mt-2" placeholder="you@example.com" />
                </div>
              </div>
              <div className="mt-5">
                <Label htmlFor="subject">Subject <span className="text-muted-foreground">(optional)</span></Label>
                <Input id="subject" name="subject" maxLength={200} className="mt-2" placeholder="Partnership inquiry" />
              </div>
              <div className="mt-5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required maxLength={2000} rows={6} className="mt-2" placeholder="Tell us how you'd like to get involved..." />
              </div>
              <Button type="submit" variant="hero" size="lg" className="mt-8 w-full sm:w-auto" disabled={submitting}>
                {submitting ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                ) : (
                  <>Send Message <Send className="h-4 w-4" /></>
                )}
              </Button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
};
