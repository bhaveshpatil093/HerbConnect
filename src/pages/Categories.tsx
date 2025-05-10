
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Import the CategoryProps interface
interface CategoryProps {
  id: number;
  name: string;
  icon: string;
  count: number;
  description: string;
}

// Sample categories data with added descriptions
const categories: CategoryProps[] = [
  { id: 1, name: "Teas & Infusions", icon: "🍵", count: 42, description: "Organic loose leaf teas and herbal infusions for relaxation and wellness." },
  { id: 2, name: "Essential Oils", icon: "🌿", count: 38, description: "Pure, therapeutic-grade essential oils for aromatherapy and natural remedies." },
  { id: 3, name: "Supplements", icon: "💊", count: 56, description: "Natural supplements to support your health and wellbeing goals." },
  { id: 4, name: "Dried Herbs", icon: "🌱", count: 64, description: "Ethically sourced dried herbs for cooking, tea blending, and medicinal purposes." },
  { id: 5, name: "Tinctures", icon: "💧", count: 29, description: "Concentrated herbal extracts for targeted wellness support." },
  { id: 6, name: "Body Care", icon: "🧴", count: 47, description: "Natural skincare and body products made with organic ingredients." },
  { id: 7, name: "Adaptogenic Blends", icon: "🍄", count: 23, description: "Special herbal formulations to help the body adapt to stress." },
  { id: 8, name: "Herbal Remedies", icon: "🌼", count: 52, description: "Traditional plant-based remedies for common ailments." }
];

const CategoryCard = ({ category }: { category: CategoryProps }) => {
  return (
    <Link to={`/category/${category.id}`}>
      <Card className="group hover:shadow-md transition-all duration-300 hover:border-herb-purple overflow-hidden h-full">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="text-5xl mb-4 bg-herb-soft-purple p-4 rounded-full">{category.icon}</div>
          <h3 className="font-semibold text-xl mb-2 group-hover:text-herb-purple transition-colors">
            {category.name}
          </h3>
          <p className="text-gray-600 mb-3 line-clamp-3">{category.description}</p>
          <p className="text-sm text-herb-purple font-medium">{category.count} Products</p>
        </CardContent>
      </Card>
    </Link>
  );
};

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter categories based on search query
  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 bg-herb-light-gray">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-herb-dark text-center mb-4">
              Browse Categories
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our curated collection of natural wellness products organized by category.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            {/* Categories Grid */}
            {filteredCategories.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredCategories.map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No categories found matching your search.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
