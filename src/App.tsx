import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ImpactDetail from "./pages/ImpactDetail.tsx";
import OtherSchoolsImpact from "./pages/OtherSchoolsImpact.tsx";
import ResultsInAction from "./pages/ResultsInAction.tsx";
import Inventory from "./pages/Inventory.tsx";
import VisionPage from "./pages/VisionPage.tsx";
import Events from "./pages/Events.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/results-in-action" element={<ResultsInAction />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/impact/other-schools" element={<OtherSchoolsImpact />} />
          <Route path="/impact/:slug" element={<ImpactDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
