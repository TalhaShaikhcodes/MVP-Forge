import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FileText, Users, MessageSquare, PhoneCall } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const navItems = [
  {
    name: "How it works",
    url: "#process",
    icon: FileText,
  },
  {
    name: "Work",
    url: "#work",
    icon: Users,
  },
  {
    name: "Connect on X",
    url: "https://x.com/thetalhashaik",
    icon: MessageSquare,
    external: true,
  },
  {
    name: "Book a Call",
    url: "#book",
    icon: PhoneCall,
  },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <AnimeNavBar items={navItems} />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;