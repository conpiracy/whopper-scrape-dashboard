import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Training from "./pages/Training";
import Resources from "./pages/Resources";
import AiChat from "./pages/AiChat";
import NicheAnalysis from "./pages/NicheAnalysis";
import Dashboard from "./pages/Dashboard";
import DataInsights from "./pages/DataInsights";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/training" element={<Training />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/ai-chat" element={<AiChat />} />
          <Route path="/niche-analysis" element={<NicheAnalysis />} />
          <Route path="/data-insights" element={<DataInsights />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;