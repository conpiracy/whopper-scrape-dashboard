import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { WaitlistDialog } from "./WaitlistDialog";

const plans = [
  {
    name: "Basic",
    price: "$49",
    description: "Perfect for getting started",
    features: [
      "Real-time data insights",
      "Basic analytics dashboard",
      "5 saved reports",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$99",
    description: "Best for growing businesses",
    features: [
      "Everything in Basic",
      "Advanced analytics",
      "Unlimited saved reports",
      "Priority support",
      "Custom dashboards",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Training sessions",
    ],
  },
];

export const Pricing = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`hover-card-animation border-none ${
                  plan.name === "Pro" ? "md:scale-105" : ""
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <p className="text-3xl font-bold mt-4">{plan.price}</p>
                  {plan.name === "Pro" && (
                    <span className="text-xs text-primary font-medium mt-1 block">
                      Most Popular
                    </span>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setIsWaitlistOpen(true)}
                    className="w-full"
                    variant={plan.name === "Pro" ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <WaitlistDialog
        open={isWaitlistOpen}
        onOpenChange={setIsWaitlistOpen}
      />
    </>
  );
};