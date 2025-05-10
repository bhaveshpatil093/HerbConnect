
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { User, Package, Heart, History, Settings, HelpCircle, LogOut } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface AccountLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  title: string;
}

const AccountLayout = ({ children, activeTab, title }: AccountLayoutProps) => {
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  useEffect(() => {
    // Redirect to login if not logged in
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "Please log in to access your account area.",
        variant: "destructive",
      });
      navigate('/login', { state: { from: location.pathname } });
    }
  }, [isLoggedIn, navigate, location.pathname, toast]);
  
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
      id: 'profile', 
      label: 'Profile', 
      path: '/profile', 
      icon: User 
    },
    { 
      id: 'orders', 
      label: 'Orders', 
      path: '/orders', 
      icon: Package 
    },
    { 
      id: 'wishlist', 
      label: 'Wishlist', 
      path: '/wishlist', 
      icon: Heart 
    },
    { 
      id: 'history', 
      label: 'Purchase History', 
      path: '/purchase-history', 
      icon: History 
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      path: '/settings', 
      icon: Settings 
    },
    { 
      id: 'support', 
      label: 'Support', 
      path: '/support', 
      icon: HelpCircle 
    },
  ];

  if (!isLoggedIn) {
    return null; // Don't render anything if not logged in (will redirect)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-herb-light-gray py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-herb-dark mb-6">{title}</h1>
          
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

export default AccountLayout;
