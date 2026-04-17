create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

create policy "anyone can insert contact submissions"
on public.contact_submissions
for insert
to anon, authenticated
with check (
  length(name) between 1 and 200
  and length(email) between 3 and 320
  and length(message) between 1 and 5000
);