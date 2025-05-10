
import { useState } from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    title: "Organic Lavender Essential Oil",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    quantity: 2,
    vendor: "Nature's Bliss"
  },
  {
    id: 3,
    title: "Echinacea Immune Support",
    price: 24.50,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    quantity: 1,
    vendor: "Wellness Roots"
  }
];

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  vendor: string;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartItem = ({ 
  id, 
  title, 
  price, 
  image, 
  quantity, 
  vendor,
  onRemove,
  onUpdateQuantity 
}: CartItemProps) => {
  return (
    <div className="flex py-4 border-b">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-herb-dark">
          <h3 className="line-clamp-1">
            <Link to={`/product/${id}`} className="hover:text-herb-purple">
              {title}
            </Link>
          </h3>
          <p className="ml-4">${(price * quantity).toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{vendor}</p>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border rounded-md">
            <button
              onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
              className="p-1 text-gray-600 hover:text-herb-purple"
            >
              <Minus size={14} />
            </button>
            <span className="px-2 py-1 min-w-[30px] text-center text-sm">
              {quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(id, quantity + 1)}
              className="p-1 text-gray-600 hover:text-herb-purple"
            >
              <Plus size={14} />
            </button>
          </div>
          
          <button
            type="button"
            onClick={() => onRemove(id)}
            className="text-sm font-medium text-herb-purple hover:text-herb-purple-dark"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isOpen, setIsOpen] = useState(false);
  
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.success("Item removed from cart");
  };
  
  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(
      cartItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  const handleCheckout = () => {
    toast.success("Proceeding to checkout");
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-herb-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md w-full flex flex-col">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Shopping Cart ({cartCount})
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex-grow overflow-y-auto py-4">
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map(item => (
                <CartItem 
                  key={item.id}
                  {...item} 
                  onRemove={handleRemoveItem}
                  onUpdateQuantity={handleUpdateQuantity}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="h-20 w-20 rounded-full bg-herb-light-gray flex items-center justify-center mb-4">
                <ShoppingCart className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="font-semibold text-lg text-herb-dark mb-1">Your cart is empty</h3>
              <p className="text-gray-500 mb-4">Looks like you haven't added any products to your cart yet.</p>
              <Button 
                onClick={() => setIsOpen(false)} 
                asChild
                className="bg-herb-purple hover:bg-herb-purple-dark"
              >
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="border-t pt-4 space-y-4">
            <div className="flex justify-between items-center text-base font-medium">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <p className="text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="space-y-2">
              <Button 
                onClick={handleCheckout} 
                className="w-full bg-herb-purple hover:bg-herb-purple-dark"
              >
                Checkout
              </Button>
              <Button 
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
