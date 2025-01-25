import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { ChevronDown, BarChart3, Bot, BookOpen, Target, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
          Discover Winning Products
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-muted-foreground">
          Your AI-powered platform for finding the most profitable products across multiple marketplaces. Make data-driven decisions with real-time market insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link to="/training">Get Started <ArrowRight className="ml-2" /></Link>
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Need to Succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BarChart3 className="w-10 h-10" />}
              title="Market Analysis"
              description="Get detailed insights into market trends and product performance across platforms."
            />
            <FeatureCard
              icon={<Bot className="w-10 h-10" />}
              title="AI Chat Assistant"
              description="Get instant answers about products, markets, and strategies from our AI assistant."
            />
            <FeatureCard
              icon={<BookOpen className="w-10 h-10" />}
              title="Training Resources"
              description="Access comprehensive guides and tutorials to master product research."
            />
            <FeatureCard
              icon={<Target className="w-10 h-10" />}
              title="Niche Analysis"
              description="Identify profitable niches with our advanced analysis tools."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="space-y-12">
            <Step
              number="01"
              title="Choose Your Platform"
              description="Select from multiple marketplaces including YouTube, Instagram, and TikTok."
            />
            <Step
              number="02"
              title="Analyze Products"
              description="Get detailed insights about product performance, trends, and potential."
            />
            <Step
              number="03"
              title="Make Informed Decisions"
              description="Use our AI-powered insights to choose the most profitable products."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Join thousands of successful entrepreneurs who use our platform to find winning products.
          </p>
          <Button size="lg" asChild>
            <Link to="/training">Get Started Today <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 rounded-lg bg-card border transition-transform hover:scale-105">
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Step = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex items-start gap-6 p-6 rounded-lg bg-card border">
    <div className="text-4xl font-bold text-primary">{number}</div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default Index;