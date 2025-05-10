
import React from 'react';
import VendorCard, { VendorProps } from '@/components/vendor/VendorCard';

interface VendorGridProps {
  vendors: VendorProps[];
}

const VendorGrid: React.FC<VendorGridProps> = ({ vendors }) => {
  if (vendors.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">No vendors found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {vendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </div>
  );
};

export default VendorGrid;
