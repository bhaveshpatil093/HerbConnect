
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VendorHero from '@/components/vendor/VendorHero';
import VendorSearch from '@/components/vendor/VendorSearch';
import VendorGrid from '@/components/vendor/VendorGrid';
import { vendors } from '@/data/vendorsData';

const Vendors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter vendors based on search query
  const filteredVendors = vendors.filter(vendor => 
    vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vendor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vendor.specialty.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <VendorHero />
        
        <section className="py-12 bg-herb-light-gray">
          <div className="container mx-auto px-4">
            <VendorSearch 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
            />
            
            <VendorGrid vendors={filteredVendors} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Vendors;
