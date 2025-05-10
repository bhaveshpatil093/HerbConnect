
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
  vendor: string;
  rating: number;
}

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success("Added to cart", {
      description: product.title,
    });
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full group">
        <div className="relative h-52">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
            {product.vendor}
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="font-medium text-lg mb-1 text-herb-dark group-hover:text-herb-purple transition-colors line-clamp-2">
            {product.title}
          </h3>
          <div className="flex items-center mb-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  className={i < Math.floor(product.rating) ? "text-amber-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-herb-purple">${product.price.toFixed(2)}</span>
            <Button
              size="sm"
              variant="outline"
              className="border-herb-purple text-herb-purple hover:bg-herb-soft-purple"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={16} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
