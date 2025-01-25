import { Product } from "../../../libs/shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <AccordionItem value={product.id} className="border-none">
      <Card className="bg-card border-border hover:border-primary/50 transition-colors">
        <AccordionTrigger className="w-full">
          <CardContent className="p-4">
            <div className="flex justify-between items-start w-full">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-left text-card-foreground">
                  {product.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 md:gap-4">
                  <span className="text-primary bg-primary/10 px-2 py-1 rounded text-sm font-medium">
                    {product.category}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    ${product.dailyRevenue.toLocaleString()}/day
                  </span>
                </div>
              </div>
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
            </div>
          </CardContent>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent className="pt-0 pb-4">
            <div className="border-t border-border pt-4 mt-2">
              <h4 className="font-semibold mb-2 text-card-foreground">Value Proposition</h4>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                {product.valueProposition}
              </p>

              <h4 className="font-semibold mb-2 text-card-foreground">Key Metrics</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-muted-foreground text-sm">Monthly Users</p>
                  <p className="font-semibold text-card-foreground">
                    {product.metrics.monthlyUsers.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Avg. Order Value</p>
                  <p className="font-semibold text-card-foreground">
                    ${product.metrics.averageOrderValue}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Retention Rate</p>
                  <p className="font-semibold text-card-foreground">
                    {product.metrics.retentionRate}
                  </p>
                </div>
              </div>

              <h4 className="font-semibold mb-2 text-card-foreground">Niche Analysis</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-muted-foreground text-sm">Target Market</p>
                  <p className="font-semibold text-card-foreground">{product.niche.target}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Competition</p>
                  <p className="font-semibold text-card-foreground">
                    {product.niche.competition}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Market Size</p>
                  <p className="font-semibold text-card-foreground">{product.niche.marketSize}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
};