import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index.tsx";
import Contact from "./pages/Contact.tsx";
import NewPage from "./pages/NewPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./ScrollToTop";

// ✅ USE SAME BACKGROUND AS HOME PAGE
import bg from "@/assets/background_page.png";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        {/* ✅ GLOBAL BACKGROUND WRAPPER */}
        <div
          className="min-h-screen bg-repeat"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "700px auto",
          }}
        >
          <Header />
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;