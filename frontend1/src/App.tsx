import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import Onboarding from "./pages/Onboarding";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import FoodAnalysis from "./pages/FoodAnalysis";
import Marketplace from "./pages/Marketplace";
import Education from "./pages/Education";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [phase, setPhase] = useState<"splash" | "onboarding" | "app">("splash");

  if (phase === "splash") {
    return (
      <AnimatePresence>
        <SplashScreen onComplete={() => setPhase("onboarding")} />
      </AnimatePresence>
    );
  }

  if (phase === "onboarding") {
    return <Onboarding onComplete={() => setPhase("app")} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/food-analysis" element={<FoodAnalysis />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/education" element={<Education />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
