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
    // Add more mock products as needed
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold mb-8">Product Dashboard</h1>
        <ProductGrid products={mockProducts} />
      </main>
    </div>
  );
};

export default Dashboard;