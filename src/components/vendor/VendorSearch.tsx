
import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface VendorSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const VendorSearch: React.FC<VendorSearchProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="max-w-md mx-auto mb-12">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          type="text"
          placeholder="Search vendors by name, specialty or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
    </div>
  );
};

export default VendorSearch;
