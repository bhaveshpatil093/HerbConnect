
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

interface CategoryProps {
  id: number;
  name: string;
  icon: string;
  count: number;
}

const categories: CategoryProps[] = [
  { id: 1, name: "Teas & Infusions", icon: "🍵", count: 42 },
  { id: 2, name: "Essential Oils", icon: "🌿", count: 38 },
  { id: 3, name: "Supplements", icon: "💊", count: 56 },
  { id: 4, name: "Dried Herbs", icon: "🌱", count: 64 },
  { id: 5, name: "Tinctures", icon: "💧", count: 29 },
  { id: 6, name: "Body Care", icon: "🧴", count: 47 }
];

const CategoryCard = ({ category }: { category: CategoryProps }) => {
  return (
    <Link to={`/category/${category.id}`}>
      <Card className="group hover:shadow-md transition-all duration-300 hover:border-herb-purple overflow-hidden h-full">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="text-4xl mb-4">{category.icon}</div>
          <h3 className="font-semibold text-lg mb-1 group-hover:text-herb-purple transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-gray-500">{category.count} Products</p>
        </CardContent>
      </Card>
    </Link>
  );
};

const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-herb-dark mb-4">Browse By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of natural wellness products organized by category to find exactly what you're looking for.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
