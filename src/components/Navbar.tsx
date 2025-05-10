
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, Store } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LogoHerbConnect from './LogoHerbConnect';
import ShoppingCart from './ShoppingCart';
import UserProfileMenu from './UserProfileMenu';
import SearchDialog from './SearchDialog';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  // Determine if user is a vendor
  const isVendor = user?.role === 'vendor';

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <LogoHerbConnect />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-herb-dark hover:text-herb-purple transition-colors">Home</Link>
            <Link to="/products" className="text-herb-dark hover:text-herb-purple transition-colors">Products</Link>
            <Link to="/categories" className="text-herb-dark hover:text-herb-purple transition-colors">Categories</Link>
            <Link to="/vendors" className="text-herb-dark hover:text-herb-purple transition-colors">Vendors</Link>
            <Link to="/about" className="text-herb-dark hover:text-herb-purple transition-colors">About</Link>
            <Link to="/support" className="text-herb-dark hover:text-herb-purple transition-colors">Support</Link>
          </div>

          {/* Search, Cart, and Account */}
          <div className="hidden md:flex items-center space-x-2">
            <SearchDialog />
            {isLoggedIn ? (
              <UserProfileMenu />
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button className="bg-herb-purple hover:bg-herb-purple-dark" size="sm" asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            )}
            {!isVendor && <ShoppingCart />}
            {isVendor && (
              <Button variant="outline" size="sm" asChild className="flex items-center">
                <Link to="/vendor/dashboard">
                  <Store className="mr-2 h-4 w-4" />
                  Vendor Dashboard
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <SearchDialog />
            {!isVendor && <ShoppingCart />}
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-4 space-y-3">
            <Link to="/" className="block px-3 py-2 text-herb-dark hover:bg-herb-green rounded-md">Home</Link>
            <Link to="/products" className="block px-3 py-2 text-herb-dark hover:bg-herb-green rounded-md">Products</Link>
            <Link to="/categories" className="block px-3 py-2 text-herb-dark hover:bg-herb-green rounded-md">Categories</Link>
            <Link to="/vendors" className="block px-3 py-2 text-herb-dark hover:bg-herb-green rounded-md">Vendors</Link>
            <Link to="/about" className="block px-3 py-2 text-herb-dark hover:bg-herb-green rounded-md">About</Link>
            <Link to="/support" className="block px-3 py-2 text-herb-dark hover:bg-herb-green rounded-md">Support</Link>
            
            <div className="pt-3 border-t">
              {isLoggedIn ? (
                <>
                  <div className="px-3 py-2 flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt={user?.name || "User"} />
                      <AvatarFallback>{user?.name ? getInitials(user.name) : "U"}</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="font-medium">{user?.name}</span>
                      {isVendor && (
                        <span className="ml-2 text-xs bg-herb-purple text-white py-0.5 px-2 rounded-full">
                          Vendor
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {isVendor ? (
                    // Vendor mobile menu
                    <>
                      <Link to="/vendor/dashboard" className="block px-3 py-2 text-herb-dark hover:bg-herb-green rounded-md">
                        <Store className="inline-block mr-2 h-4 w-4" />
                        Vendor Dashboard
                      </Link>
                      <Link to="/vendor/products" className="block px-3 py-2 text-herb-dark hover:bg-herb-green rounded-md">
                        My Products
                      </Link>
                      <Link to="/vendor/add-product" className="block px-3 py-2 text-herb-dark hover:bg-herb-green rounded-md">
                        Add Product
                      </Link>
                      <Link to="/vendor/payments" className="block px-3 py-2 text-herb-dark hover:bg-herb-green rounded-md">
                        Payment Settings
                      </Link>
                    </>
                  ) : (
                    // Customer mobile menu
                    <>
                      <Link to="/profile" className="block px-3 py-2 text-herb-dark hover:bg-herb-green rounded-md">
                        Profile
                      </Link>
                      <Link to="/orders" className="block px-3 py-2 text-herb-dark hover:bg-herb-green rounded-md">
                        Orders
                      </Link>
                      <Link to="/wishlist" className="block px-3 py-2 text-herb-dark hover:bg-herb-green rounded-md">
                        Wishlist
                      </Link>
                    </>
                  )}
                  
                  <Link to="/settings" className="block px-3 py-2 text-herb-dark hover:bg-herb-green rounded-md">
                    Settings
                  </Link>
                  <button 
                    onClick={handleLogout} 
                    className="block w-full text-left px-3 py-2 text-red-500 hover:bg-red-50 rounded-md"
                  >
                    <LogOut className="inline-block h-4 w-4 mr-2" />
                    Log out
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-2 px-3">
                  <Button variant="outline" asChild>
                    <Link to="/login">Sign In</Link>
                  </Button>
                  <Button className="bg-herb-purple hover:bg-herb-purple-dark" asChild>
                    <Link to="/register">Register</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
