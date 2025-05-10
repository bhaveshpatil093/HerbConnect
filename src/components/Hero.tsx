
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, ShoppingCart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-herb-green py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 leaf-pattern opacity-70"></div>
      
      {/* Floating elements */}
      <div className="hidden md:block absolute top-20 left-[5%] w-20 h-20 bg-herb-purple rounded-full opacity-20 animate-float"></div>
      <div className="hidden md:block absolute bottom-32 right-[15%] w-12 h-12 bg-herb-peach rounded-full opacity-30 animate-float"></div>
      <div className="hidden md:block absolute top-1/2 right-[8%] w-16 h-16 bg-herb-soft-purple rounded-full opacity-20 animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div 
              className="inline-block bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full transform transition-transform hover:scale-105"
            >
              <span className="text-herb-purple-dark font-medium">Natural Wellness Products</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-herb-dark leading-tight">
              Discover Nature's <span className="text-herb-purple relative">
                Healing
                <span className="absolute bottom-1 left-0 w-full h-1 bg-herb-purple-dark opacity-50 rounded"></span>
              </span> Power
            </h1>
            <p className="text-lg text-gray-700 md:pr-12">
              Connect with trusted vendors offering premium herbs, supplements, and natural wellness products for a healthier lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                className="bg-herb-purple hover:bg-herb-purple-dark text-white py-6 px-8 rounded-lg text-lg group transition-all duration-300 hover:shadow-lg"
              >
                <Link to="/products" className="flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                  Shop Products
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-herb-purple text-herb-purple hover:bg-herb-soft-purple py-6 px-8 rounded-lg text-lg group transition-all duration-300"
              >
                <Link to="/vendors" className="flex items-center">
                  Meet Our Vendors
                  <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i * 10}`} 
                      alt="Customer" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-gray-600">
                  <span className="font-medium">4.9/5</span> from over 2,000 reviews
                </p>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-herb-soft-purple rounded-full -z-10 animate-pulse opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-herb-peach rounded-full -z-10 animate-float"></div>
            <div className="relative group transition-all duration-500 transform hover:-rotate-2 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
                alt="Herbal products arrangement" 
                className="w-full h-auto object-cover rounded-2xl shadow-xl transition-shadow duration-300 group-hover:shadow-2xl"
              />
              
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-herb-purple">
                    <img 
                      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" 
                      alt="Vendor" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-herb-dark">Nature's Bliss</p>
                    <p className="text-xs text-gray-600">Premium Vendor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
