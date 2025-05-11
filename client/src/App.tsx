import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Service from "@/pages/service";
import Audience from "@/pages/audience";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomChatWidget from "@/components/CustomChatWidget";

// This component ensures the page scrolls to top on route changes
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services/:slug" component={Service} />
        <Route path="/audience/:slug" component={Audience} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <CustomChatWidget />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
