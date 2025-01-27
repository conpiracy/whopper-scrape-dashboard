import { BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    title: "Real-time Analytics",
    description: "Track performance metrics and market trends as they happen",
    icon: LineChart,
  },
  {
    title: "Market Insights",
    description: "Deep dive into market data with advanced analytics",
    icon: BarChart3,
  },
  {
    title: "Performance Tracking",
    description: "Monitor your campaigns and optimize for success",
    icon: TrendingUp,
  },
  {
    title: "Data Visualization",
    description: "Beautiful charts and graphs that make data easy to understand",
    icon: PieChart,
  },
];

export const Features = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Powerful Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make data-driven decisions and stay ahead of the
            competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="hover-card-animation border-none">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};