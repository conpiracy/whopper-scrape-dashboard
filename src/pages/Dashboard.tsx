import { MainNav } from "@/components/MainNav";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Product } from "../../libs/shared/types";

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
    {
      id: "2",
      name: "Social Media Empire",
      category: "social media",
      dailyRevenue: 3500,
      valueProposition: "Build and monetize your social media presence",
      description: "Complete system for growing and monetizing social media accounts",
      metrics: {
        monthlyUsers: 2500,
        averageOrderValue: 497,
        retentionRate: "78%"
      },
      niche: {
        target: "Content creators",
        competition: "High",
        marketSize: "Very Large"
      }
    },
    {
      id: "3",
      name: "Betting Pro",
      category: "betting",
      dailyRevenue: 2800,
      valueProposition: "Professional sports betting strategies and analysis",
      description: "Expert betting strategies and real-time market analysis",
      metrics: {
        monthlyUsers: 800,
        averageOrderValue: 797,
        retentionRate: "92%"
      },
      niche: {
        target: "Sports enthusiasts",
        competition: "Medium",
        marketSize: "Growing"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main className="container mx-auto px-4 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Product Dashboard</h1>
          <p className="text-muted-foreground">
            Explore and analyze trending info products in the market
          </p>
        </div>
        <ProductGrid products={mockProducts} />
      </main>
    </div>
  );
};

export default Dashboard;