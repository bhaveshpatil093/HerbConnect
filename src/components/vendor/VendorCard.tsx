
import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";

export interface VendorProps {
  id: number;
  name: string;
  description: string;
  productCount: number;
  image: string;
  rating: number;
  location: string;
  specialty: string[];
  featured: boolean;
}

const VendorCard = ({ vendor }: { vendor: VendorProps }) => {
  return (
    <Link to={`/vendor/${vendor.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full group">
        <div className="h-48 relative overflow-hidden">
          <img 
            src={vendor.image} 
            alt={vendor.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {vendor.featured && (
            <Badge className="absolute top-3 right-3 bg-herb-purple">Featured</Badge>
          )}
        </div>
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-xl text-herb-dark group-hover:text-herb-purple transition-colors">
              {vendor.name}
            </h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-amber-400 fill-amber-400 mr-1" />
              <span className="text-sm font-medium">{vendor.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            {vendor.location}
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">{vendor.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {vendor.specialty.map((spec, index) => (
              <Badge key={index} variant="outline" className="text-xs bg-herb-light-gray">
                {spec}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-herb-purple">
              {vendor.productCount} Products
            </span>
            <Button 
              variant="outline" 
              size="sm"
              className="text-herb-purple border-herb-purple hover:bg-herb-soft-purple"
            >
              Visit Shop
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VendorCard;
