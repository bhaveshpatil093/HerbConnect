
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ShoppingCart, Trash } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AccountLayout from "@/components/AccountLayout";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

// Sample wishlist data
const initialItems: WishlistItem[] = [
  {
    id: 101,
    name: "Lavender Essential Oil",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1595252129540-cb9a1ff09ac3",
    inStock: true
  },
  {
    id: 204,
    name: "Ceramic Tea Infuser",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f",
    inStock: true
  },
  {
    id: 302,
    name: "Mushroom Immunity",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1609840113929-08d4c8a03f24",
    inStock: false
  },
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(initialItems);
  const { toast } = useToast();

  const handleRemoveItem = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Product was removed from your wishlist."
    });
  };

  const handleAddToCart = (item: WishlistItem) => {
    toast({
      title: "Added to cart",
      description: `${item.name} was added to your cart.`
    });
  };

  return (
    <AccountLayout activeTab="wishlist" title="My Wishlist">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Heart className="h-5 w-5 text-herb-purple" />
            Saved Products
          </CardTitle>
        </CardHeader>
        <CardContent>
          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 group hover:shadow-md transition-shadow">
                  <div className="relative">
                    <Link to={`/product/${item.id}`}>
                      <div className="h-48 overflow-hidden rounded-md mb-3">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="absolute top-2 right-2 rounded-full p-1 bg-white/80 hover:bg-white shadow-sm"
                      aria-label="Remove from wishlist"
                    >
                      <Trash className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                  
                  <Link to={`/product/${item.id}`} className="block">
                    <h3 className="font-medium text-herb-dark group-hover:text-herb-purple transition-colors truncate">
                      {item.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center justify-between mt-2 mb-3">
                    <span className="font-bold text-herb-purple">${item.price.toFixed(2)}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${item.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  
                  <Button 
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-herb-purple hover:bg-herb-purple-dark"
                    disabled={!item.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-herb-light-gray mb-4">
                <Heart className="h-8 w-8 text-herb-purple" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Your wishlist is empty</h3>
              <p className="text-gray-500 mb-4">
                Save your favorite products to wishlist for easy access later
              </p>
              <Button asChild className="bg-herb-purple hover:bg-herb-purple-dark">
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </AccountLayout>
  );
};

export default Wishlist;
