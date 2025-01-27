import { MainNav } from "@/components/MainNav";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Product } from "../../libs/shared/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Lamp, LineChart, Target, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  // Mock data for now - this would typically come from your Supabase database
  const mockProducts: Product[] = [
    {
      id: "1",
      name: "Trading Mastery",
      category: "trading",
      dailyRevenue: 5000,
      valueProposition: "Learn advanced trading strategies from top traders",
      description: "Comprehensive trading course covering all aspects of market analysis",
      metrics: {
        monthlyUsers: 1200,
        averageOrderValue: 997,
        retentionRate: "85%"
      },
      niche: {
        target: "Aspiring traders",
        competition: "Medium",
        marketSize: "Large"
      }
    },
    // Add more mock products as needed
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <MainNav />
      
      {/* Hero Section with Lamp */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="relative mb-8">
              <Lamp className="w-16 h-16 text-primary animate-pulse" />
              <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Discover Winning Products
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8">
              Stop guessing what works. Get real data on successful info products and make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-24 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-black/60 border-primary/20 shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 gradient-text">The Problem</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-destructive/10 p-1 rounded">
                    <TrendingUp className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-muted-foreground">Hours wasted researching products that might not sell</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-destructive/10 p-1 rounded">
                    <Users className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-muted-foreground">Uncertainty about market demand and competition</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-destructive/10 p-1 rounded">
                    <Target className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-muted-foreground">No clear data on what actually works in the market</p>
                </li>
              </ul>
            </Card>
            <Card className="p-8 bg-black/60 border-primary/20 shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 gradient-text">The Solution</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-primary/10 p-1 rounded">
                    <LineChart className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Real-time data on successful info products</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-primary/10 p-1 rounded">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Deep insights into market trends and opportunities</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-primary/10 p-1 rounded">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Validated data to make confident decisions</p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Trending Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover what's working right now in the info product space
            </p>
          </div>
          <ProductGrid products={mockProducts} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold gradient-text mb-4">Why Choose Info Radar</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Make data-driven decisions with confidence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className={cn(
                  "p-6 bg-black/60 border-primary/20 shadow-xl hover:shadow-primary/5 transition-all duration-300",
                  "hover:translate-y-[-4px]"
                )}
              >
                <div className="mb-4">
                  <benefit.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Ready to Make Data-Driven Decisions?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join successful marketers who use Info Radar to discover winning products and dominate their niche.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started Now
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const benefits = [
  {
    title: "Real-Time Insights",
    description: "Get instant access to live data on what's working in the market right now.",
    icon: LineChart,
  },
  {
    title: "Market Analysis",
    description: "Understand market trends, competition levels, and growth opportunities.",
    icon: TrendingUp,
  },
  {
    title: "Validated Data",
    description: "Make decisions based on real performance data, not guesswork.",
    icon: Target,
  },
];

export default Dashboard;