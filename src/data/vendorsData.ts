
import { VendorProps } from "@/components/vendor/VendorCard";

// Sample vendors data
export const vendors: VendorProps[] = [
  {
    id: 1,
    name: "Nature's Bliss",
    description: "Specializing in organic essential oils and aromatherapy products sourced from sustainable farms around the world.",
    productCount: 34,
    image: "https://images.unsplash.com/photo-1586325194227-7625ed95172b",
    rating: 4.8,
    location: "Portland, OR",
    specialty: ["Essential Oils", "Aromatherapy"],
    featured: true
  },
  {
    id: 2,
    name: "Herbal Haven",
    description: "Premium tea blends and dried herbs from sustainable sources, focusing on traditional remedies with modern applications.",
    productCount: 42,
    image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9",
    rating: 4.7,
    location: "Seattle, WA",
    specialty: ["Teas", "Dried Herbs"],
    featured: true
  },
  {
    id: 3,
    name: "Wellness Roots",
    description: "Traditional herbal supplements and immune support products made with carefully selected ingredients from around the globe.",
    productCount: 28,
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf",
    rating: 4.9,
    location: "Boulder, CO",
    specialty: ["Supplements", "Immune Support"],
    featured: false
  },
  {
    id: 4,
    name: "Green Medicine",
    description: "Innovative CBD products and herbal tinctures focusing on pain relief and stress management.",
    productCount: 23,
    image: "https://images.unsplash.com/photo-1558157616-c353b7065971",
    rating: 4.6,
    location: "Denver, CO",
    specialty: ["CBD", "Tinctures"],
    featured: false
  },
  {
    id: 5,
    name: "Earth's Pharmacy",
    description: "Organic herbal supplements and powders focusing on adaptogenic herbs and medicinal mushrooms.",
    productCount: 37,
    image: "https://images.unsplash.com/photo-1457972851104-4fd469440bf9",
    rating: 4.5,
    location: "Asheville, NC",
    specialty: ["Supplements", "Adaptogens"],
    featured: false
  },
  {
    id: 6,
    name: "Mountain Herbals",
    description: "Wildcrafted herbal preparations harvested from the pristine mountain regions of the Pacific Northwest.",
    productCount: 31,
    image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7",
    rating: 4.8,
    location: "Bend, OR",
    specialty: ["Wildcrafted Herbs", "Salves"],
    featured: true
  }
];
