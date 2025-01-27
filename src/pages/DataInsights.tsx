import { useLocation, useNavigate } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "../../libs/shared/types";
import { LlamaModel } from "@/components/llama/LlamaModel";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const DataInsights = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product as Product;
  const [analysis, setAnalysis] = useState<string>("");

  if (!product) {
    navigate("/dashboard");
    return null;
  }

  const generatePrompt = (product: Product) => {
    return `Analyze this product and provide marketing insights:
    Product: ${product.name}
    Category: ${product.category}
    Daily Revenue: $${product.dailyRevenue}
    Value Proposition: ${product.valueProposition}
    Target Market: ${product.niche.target}
    Competition Level: ${product.niche.competition}
    Market Size: ${product.niche.marketSize}
    
    Please provide:
    1. Market opportunity analysis
    2. Key competitive advantages
    3. Suggested marketing strategies
    4. Growth potential assessment
    5. Risk factors to consider`;
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main className="container mx-auto px-4 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Data Insights</h1>
          <p className="text-muted-foreground">
            AI-powered analysis for {product.name}
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Product Details</h3>
                  <p className="text-muted-foreground">{product.valueProposition}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Daily Revenue</p>
                    <p className="font-semibold">${product.dailyRevenue.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly Users</p>
                    <p className="font-semibold">{product.metrics.monthlyUsers.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. Order Value</p>
                    <p className="font-semibold">${product.metrics.averageOrderValue}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Retention Rate</p>
                    <p className="font-semibold">{product.metrics.retentionRate}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              {!analysis ? (
                <div className="flex items-center justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <span className="ml-2">Generating insights...</span>
                </div>
              ) : (
                <div className="whitespace-pre-wrap">{analysis}</div>
              )}
              <LlamaModel
                prompt={generatePrompt(product)}
                onResult={(text) => setAnalysis(text)}
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DataInsights;