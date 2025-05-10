
import React from 'react';
import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  count?: number;
}

const ProductRating: React.FC<ProductRatingProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  showCount = false,
  count = 0
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };
  
  const starSize = sizeClasses[size];
  
  return (
    <div className="flex items-center">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className={`${starSize} text-yellow-400 fill-yellow-400`} />
        ))}
        
        {hasHalfStar && (
          <div className="relative">
            <Star className={`${starSize} text-gray-300`} />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className={`${starSize} text-yellow-400 fill-yellow-400`} />
            </div>
          </div>
        )}
        
        {[...Array(maxRating - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={`empty-${i}`} className={`${starSize} text-gray-300`} />
        ))}
      </div>
      
      {showCount && (
        <span className="text-xs text-gray-500 ml-1">({count})</span>
      )}
    </div>
  );
};

export default ProductRating;
