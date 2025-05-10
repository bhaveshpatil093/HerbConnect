
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Store, 
  Package, 
  BarChart3, 
  Settings, 
  CreditCard, 
  ShoppingBag, 
  Users, 
  LogOut, 
  PlusCircle 
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface VendorLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  title: string;
}

const VendorLayout = ({ children, activeTab, title }: VendorLayoutProps) => {
  const location = useLocation();
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  useEffect(() => {
    // Redirect to login if not logged in or not a vendor
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "Please log in to access the vendor dashboard.",
        variant: "destructive",
      });
      navigate('/login', { state: { from: location.pathname } });
    } else if (user?.role !== 'vendor') {
      toast({
        title: "Access denied",
        description: "Only vendors can access this area.",
        variant: "destructive",
      });
      navigate('/', { state: { from: location.pathname } });
    }
  }, [isLoggedIn, user, navigate, location.pathname, toast]);
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };
  
  const menuItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      path: '/vendor/dashboard', 
      icon: BarChart3 
    },
    { 
      id: 'products', 
      label: 'My Products', 
      path: '/vendor/products', 
      icon: Package 
    },
    { 
      id: 'add-product', 
      label: 'Add Product', 
      path: '/vendor/add-product', 
      icon: PlusCircle 
    },
    { 
      id: 'orders', 
      label: 'Orders', 
      path: '/vendor/orders', 
      icon: ShoppingBag 
    },
    { 
      id: 'customers', 
      label: 'Customers', 
      path: '/vendor/customers', 
      icon: Users 
    },
    { 
      id: 'payments', 
      label: 'Payment Settings', 
      path: '/vendor/payments', 
      icon: CreditCard 
    },
    { 
      id: 'store-settings', 
      label: 'Store Settings', 
      path: '/vendor/store-settings', 
      icon: Store 
    },
    { 
      id: 'account-settings', 
      label: 'Account Settings', 
      path: '/vendor/account-settings', 
      icon: Settings 
    },
  ];

  if (!isLoggedIn || user?.role !== 'vendor') {
    return null; // Don't render anything if not logged in or not a vendor (will redirect)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-herb-light-gray py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-herb-dark mb-6">
            <Store className="inline-block mr-2 h-6 w-6 text-herb-purple" />
            {title}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-1 sticky top-24">
                <ScrollArea className="h-[calc(100vh-220px)] pr-4">
                  <div className="space-y-1 p-2">
                    {menuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Button
                          key={item.id}
                          variant={isActive(item.path) ? "default" : "ghost"}
                          className={`w-full justify-start ${isActive(item.path) ? 'bg-herb-purple hover:bg-herb-purple-dark text-white' : ''}`}
                          asChild
                        >
                          <Link to={item.path}>
                            <Icon className="mr-2 h-4 w-4" />
                            {item.label}
                          </Link>
                        </Button>
                      );
                    })}
                    
                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={handleLogout}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </Button>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VendorLayout;
