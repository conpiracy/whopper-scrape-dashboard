import { useState } from "react";
import { Product } from "../../libs/shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Dummy data matching the screenshot
const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Gambling Product 1",
    category: "gambling",
    dailyRevenue: 15445,
    valueProposition: "Premium gambling signals and analytics",
    description: "Advanced gambling platform with AI-powered predictions",
    metrics: {
      monthlyUsers: 5000,
      averageOrderValue: 99,
      retentionRate: "68%"
    },
    niche: {
      target: "Professional gamblers",
      competition: "Medium",
      marketSize: "$2.3B"
    }
  },
  // ... Add more dummy products following the same structure
];

const categories = ["All", "Gambling", "Trading", "Betting", "Social media", "Sales"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = dummyProducts.filter(product => 
    selectedCategory === "All" || 
    product.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">Info Radar</h1>
          <div className="flex gap-4">
            <button className="bg-orange-500 px-4 py-2 rounded-lg flex items-center gap-2">
              Dashboard
            </button>
            <button className="text-gray-400 px-4 py-2 rounded-lg flex items-center gap-2">
              Niche Analysis
            </button>
            <button className="text-gray-400 px-4 py-2 rounded-lg flex items-center gap-2">
              Training
            </button>
            <button className="text-gray-400 px-4 py-2 rounded-lg flex items-center gap-2">
              Analytics
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">Top Products</h2>
          <p className="text-gray-400">
            Discover the highest-performing info products across different niches
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:bg-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Accordion type="single" collapsible key={product.id}>
              <AccordionItem value={product.id} className="border-none">
                <Card className="bg-[#111111] border-gray-800">
                  <AccordionTrigger className="w-full">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start w-full">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                          <div className="flex items-center gap-4">
                            <span className="text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded text-sm">
                              {product.category}
                            </span>
                            <span className="text-gray-400">
                              Daily Revenue: ${product.dailyRevenue.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200" />
                      </div>
                    </CardContent>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-0 pb-4">
                      <div className="border-t border-gray-800 pt-4 mt-2">
                        <h4 className="font-semibold mb-2">Value Proposition</h4>
                        <p className="text-gray-400 mb-4">{product.valueProposition}</p>
                        
                        <h4 className="font-semibold mb-2">Key Metrics</h4>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-gray-400">Monthly Users</p>
                            <p className="font-semibold">{product.metrics.monthlyUsers.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Avg. Order Value</p>
                            <p className="font-semibold">${product.metrics.averageOrderValue}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Retention Rate</p>
                            <p className="font-semibold">{product.metrics.retentionRate}</p>
                          </div>
                        </div>

                        <h4 className="font-semibold mb-2">Niche Analysis</h4>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <p className="text-gray-400">Target Market</p>
                            <p className="font-semibold">{product.niche.target}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Competition</p>
                            <p className="font-semibold">{product.niche.competition}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Market Size</p>
                            <p className="font-semibold">{product.niche.marketSize}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;