import { Button } from "@/components/ui/button";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { MainNav } from "@/components/MainNav";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { ArrowRight, BarChart2 } from "lucide-react";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            The Bloomberg Terminal of Marketing
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Make data-driven decisions with real-time market insights. Track performance,
            analyze trends, and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setIsWaitlistOpen(true)}
              className="group"
            >
              Get Early Access
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsWaitlistOpen(true)}
              className="group"
            >
              View Demo
              <BarChart2 className="ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* Footer */}
      <Footer />

      {/* Waitlist Dialog */}
      <WaitlistDialog
        open={isWaitlistOpen}
        onOpenChange={setIsWaitlistOpen}
      />
    </div>
  );
};

export default Index;