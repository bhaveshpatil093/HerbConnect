
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Phone, Mail, Globe, Clock, ChevronRight, ShoppingBag } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProductCard from "@/components/ProductCard";

interface VendorProps {
  id: number;
  name: string;
  description: string;
  productCount: number;
  image: string;
  rating: number;
  location: string;
  specialty: string[];
  featured: boolean;
  email?: string;
  phone?: string;
  website?: string;
  hours?: string[];
  about?: string;
  products?: any[];
}

// Sample vendor data
const vendorsData = {
  1: {
    id: 1,
    name: "Nature's Bliss",
    description: "Specializing in organic essential oils and aromatherapy products sourced from sustainable farms around the world.",
    productCount: 34,
    image: "https://images.unsplash.com/photo-1586325194227-7625ed95172b",
    rating: 4.8,
    location: "Portland, OR",
    specialty: ["Essential Oils", "Aromatherapy"],
    featured: true,
    email: "hello@naturesbliss.com",
    phone: "+1 (503) 555-1234",
    website: "www.naturesbliss.com",
    hours: ["Monday-Friday: 9AM-5PM", "Saturday: 10AM-4PM", "Sunday: Closed"],
    about: "Nature's Bliss was founded in 2010 with a mission to bring the highest quality essential oils to wellness enthusiasts. All of our products are sourced from organic farms with sustainable practices, and we maintain direct relationships with our farmers to ensure fair trade and ethical production methods. Our oils undergo rigorous testing for purity and potency before being bottled in our Portland facility.",
    products: [
      { id: 101, name: "Lavender Essential Oil", price: 15.99, image: "https://images.unsplash.com/photo-1595252129540-cb9a1ff09ac3", rating: 4.9 },
      { id: 102, name: "Peppermint Essential Oil", price: 12.99, image: "https://images.unsplash.com/photo-1595252129494-2f69230d3491", rating: 4.7 },
      { id: 103, name: "Eucalyptus Essential Oil", price: 14.99, image: "https://images.unsplash.com/photo-1595252129493-747cc5ee4bb8", rating: 4.8 },
      { id: 104, name: "Aromatherapy Diffuser", price: 45.99, image: "https://images.unsplash.com/photo-1602928298849-325cec8771c0", rating: 4.6 }
    ]
  },
  2: {
    id: 2,
    name: "Herbal Haven",
    description: "Premium tea blends and dried herbs from sustainable sources, focusing on traditional remedies with modern applications.",
    productCount: 42,
    image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9",
    rating: 4.7,
    location: "Seattle, WA",
    specialty: ["Teas", "Dried Herbs"],
    featured: true,
    email: "info@herbalhaven.com",
    phone: "+1 (206) 555-6789",
    website: "www.herbalhaven.com",
    hours: ["Monday-Saturday: 8AM-6PM", "Sunday: 10AM-4PM"],
    about: "Herbal Haven started as a small tea shop in Seattle's Pike Place Market and has grown into a trusted source for premium herbal products. Our team includes certified herbalists who carefully craft each blend for both taste and therapeutic benefits. We source our herbs from organic farms worldwide, with a focus on supporting small family farms and sustainable agricultural practices.",
    products: [
      { id: 201, name: "Sleep Well Tea Blend", price: 14.99, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3", rating: 4.8 },
      { id: 202, name: "Immune Support Herbs", price: 18.99, image: "https://images.unsplash.com/photo-1541780570-22080fbfec56", rating: 4.7 },
      { id: 203, name: "Digestive Harmony Tea", price: 15.99, image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b", rating: 4.9 },
      { id: 204, name: "Ceramic Tea Infuser", price: 28.99, image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f", rating: 4.6 }
    ]
  },
  3: {
    id: 3,
    name: "Wellness Roots",
    description: "Traditional herbal supplements and immune support products made with carefully selected ingredients from around the globe.",
    productCount: 28,
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf",
    rating: 4.9,
    location: "Boulder, CO",
    specialty: ["Supplements", "Immune Support"],
    featured: false,
    email: "support@wellnessroots.com",
    phone: "+1 (303) 555-9876",
    website: "www.wellnessroots.com",
    hours: ["Monday-Friday: 9AM-6PM", "Saturday-Sunday: 10AM-4PM"],
    about: "Founded by Dr. Maria Chen, a physician with training in both Western and Eastern medicine, Wellness Roots bridges traditional herbal knowledge with modern scientific research. Our supplements are formulated based on peer-reviewed studies and traditional wisdom, using only ingredients that meet our strict quality standards. All products are manufactured in our GMP-certified facility in Boulder.",
    products: [
      { id: 301, name: "Elderberry Complex", price: 24.99, image: "https://images.unsplash.com/photo-1543362906-acfc16c67564", rating: 4.9 },
      { id: 302, name: "Mushroom Immunity", price: 29.99, image: "https://images.unsplash.com/photo-1609840113929-08d4c8a03f24", rating: 4.8 },
      { id: 303, name: "Adaptogen Blend", price: 32.99, image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7", rating: 4.7 },
      { id: 304, name: "Vitamin D Complex", price: 19.99, image: "https://images.unsplash.com/photo-1584308878768-57d3e1e22081", rating: 4.9 }
    ]
  }
};

const VendorDetail = () => {
  const { vendorId } = useParams<{ vendorId: string }>();
  const [vendor, setVendor] = useState<VendorProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate data fetching
    setLoading(true);
    if (vendorId && vendorsData[Number(vendorId) as keyof typeof vendorsData]) {
      setVendor(vendorsData[Number(vendorId) as keyof typeof vendorsData]);
    }
    setLoading(false);
  }, [vendorId]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">Loading vendor information...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!vendor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-herb-dark mb-4">Vendor Not Found</h1>
            <p className="text-gray-600 mb-8">Sorry, the vendor you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/vendors">Back to All Vendors</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header/Hero Section */}
        <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-herb-purple to-herb-purple-dark opacity-85"></div>
          <img
            src={vendor.image}
            alt={vendor.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <div className="flex items-baseline text-white">
                <Link to="/vendors" className="text-sm hover:underline">Vendors</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span className="text-sm">{vendor.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">{vendor.name}</h1>
                {vendor.featured && (
                  <Badge className="bg-white text-herb-purple-dark">Featured Vendor</Badge>
                )}
              </div>
              <div className="flex items-center mt-3 text-white">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm mr-4">{vendor.location}</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-300 fill-yellow-300 mr-1" />
                  <span className="text-sm">{vendor.rating} Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold text-herb-dark mb-4">Contact Information</h2>
                  
                  <div className="space-y-4">
                    {vendor.phone && (
                      <div className="flex">
                        <Phone className="h-5 w-5 text-herb-purple mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p>{vendor.phone}</p>
                        </div>
                      </div>
                    )}
                    
                    {vendor.email && (
                      <div className="flex">
                        <Mail className="h-5 w-5 text-herb-purple mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p>{vendor.email}</p>
                        </div>
                      </div>
                    )}
                    
                    {vendor.website && (
                      <div className="flex">
                        <Globe className="h-5 w-5 text-herb-purple mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Website</p>
                          <p>{vendor.website}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {vendor.hours && (
                    <div className="mt-6">
                      <h3 className="flex items-center text-lg font-medium text-herb-dark mb-2">
                        <Clock className="h-5 w-5 mr-2" />
                        Business Hours
                      </h3>
                      <ul className="text-sm space-y-1">
                        {vendor.hours.map((hour, index) => (
                          <li key={index} className="text-gray-600">{hour}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-6 space-y-3">
                    <h3 className="text-lg font-medium text-herb-dark mb-2">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {vendor.specialty.map((spec, index) => (
                        <Badge key={index} variant="outline" className="bg-herb-soft-purple">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Tabs */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="w-full mb-6">
                    <TabsTrigger value="about" className="flex-1">About</TabsTrigger>
                    <TabsTrigger value="products" className="flex-1">Products</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="about" className="space-y-4">
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                      <h2 className="text-xl font-semibold text-herb-dark mb-4">About {vendor.name}</h2>
                      <p className="text-gray-700 leading-relaxed">
                        {vendor.about || vendor.description}
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="products">
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-herb-dark">Featured Products</h2>
                        <Button asChild variant="outline" className="text-herb-purple border-herb-purple hover:bg-herb-soft-purple">
                          <Link to={`/products?vendor=${vendor.id}`}>
                            <ShoppingBag className="h-4 w-4 mr-2" />
                            View All Products
                          </Link>
                        </Button>
                      </div>
                      
                      {vendor.products && vendor.products.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {vendor.products.map((product) => (
                            <div key={product.id} className="group">
                              <Link to={`/product/${product.id}`}>
                                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                  <div className="h-40 mb-3 overflow-hidden rounded-md">
                                    <img 
                                      src={product.image}
                                      alt={product.name}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                  <h3 className="font-medium text-herb-dark group-hover:text-herb-purple transition-colors">
                                    {product.name}
                                  </h3>
                                  <div className="flex items-center justify-between mt-1">
                                    <span className="font-bold text-herb-purple">${product.price}</span>
                                    <div className="flex items-center">
                                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
                                      <span className="text-xs">{product.rating}</span>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 italic">No products available at this time.</p>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VendorDetail;
