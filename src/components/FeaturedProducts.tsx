
import { useState } from 'react';
import ProductCard, { ProductProps } from './ProductCard';

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

// Available categories for filtering
const categories = ["All", "Essential Oils", "Teas", "Supplements", "Tinctures"];

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter products based on active category (for demo purposes, not actually filtering)
  const filteredProducts = products;

  return (
    <section className="py-16 bg-herb-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-herb-dark mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular natural wellness products, handpicked from trusted vendors.
          </p>
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
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
