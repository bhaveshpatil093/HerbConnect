
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard, { ProductProps } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Sample products data
const products: ProductProps[] = [
  {
    id: 1,
    title: "Organic Lavender Essential Oil",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    vendor: "Nature's Bliss",
    rating: 4.8
  },
  {
    id: 2,
    title: "Chamomile Tea Blend",
    price: 9.95,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    vendor: "Herbal Haven",
    rating: 4.5
  },
  {
    id: 3,
    title: "Echinacea Immune Support",
    price: 24.50,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    vendor: "Wellness Roots",
    rating: 4.7
  },
  {
    id: 4,
    title: "Calming CBD Tincture",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    vendor: "Green Medicine",
    rating: 4.9
  },
  {
    id: 5,
    title: "Turmeric Supplement",
    price: 19.95,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    vendor: "Earth's Pharmacy",
    rating: 4.6
  },
  {
    id: 6,
    title: "Peppermint Digestive Aid",
    price: 12.50,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    vendor: "Healing Roots",
    rating: 4.4
  },
  {
    id: 7,
    title: "Sleep Support Herbal Blend",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    vendor: "Dreams Natural",
    rating: 4.8
  },
  {
    id: 8,
    title: "Ginger & Lemon Wellness Tea",
    price: 11.95,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    vendor: "Tea Therapy",
    rating: 4.7
  }
];

const categories = ["All", "Essential Oils", "Teas", "Supplements", "Tinctures", "Body Care"];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter products based on search query and active category
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-herb-light-gray py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-herb-dark text-center mb-4">
              Natural Wellness Products
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our collection of high-quality herbs, supplements, and wellness products from trusted vendors.
            </p>
            
            {/* Search and Filter Bar */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
            
            {/* Category filtering tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-herb-purple text-white'
                      : 'bg-white text-gray-700 hover:bg-herb-soft-purple'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No products found matching your search.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
