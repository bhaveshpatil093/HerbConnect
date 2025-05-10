
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface VendorProps {
  id: number;
  name: string;
  description: string;
  productCount: number;
}

const vendors: VendorProps[] = [
  {
    id: 1,
    name: "Nature's Bliss",
    description: "Specializing in organic essential oils and aromatherapy products.",
    productCount: 34
  },
  {
    id: 2,
    name: "Herbal Haven",
    description: "Premium tea blends and dried herbs from sustainable sources.",
    productCount: 42
  },
  {
    id: 3,
    name: "Wellness Roots",
    description: "Traditional herbal supplements and immune support products.",
    productCount: 28
  }
];

const VendorCard = ({ vendor }: { vendor: VendorProps }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-herb-dark mb-2">{vendor.name}</h3>
      <p className="text-gray-600 mb-3 line-clamp-2">{vendor.description}</p>
      <p className="text-sm text-gray-500 mb-4">{vendor.productCount} Products</p>
      <Button asChild variant="outline" className="w-full border-herb-purple text-herb-purple hover:bg-herb-soft-purple">
        <Link to={`/vendor/${vendor.id}`}>Visit Shop</Link>
      </Button>
    </div>
  );
};

const VendorSection = () => {
  return (
    <section className="py-16 herb-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Trusted Vendors</h2>
          <p className="max-w-2xl mx-auto opacity-90">
            We partner with artisans and specialists who share our commitment to quality, sustainability, and natural wellness.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
        <div className="text-center">
          <Button asChild className="bg-white text-herb-purple hover:bg-herb-green">
            <Link to="/vendors">View All Vendors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VendorSection;
