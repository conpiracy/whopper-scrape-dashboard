import { Product } from "../../../libs/shared/types";
import { Accordion } from "@/components/ui/accordion";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        <Accordion type="single" collapsible key={product.id}>
          <ProductCard product={product} />
        </Accordion>
      ))}
    </div>
  );
};