
import { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X, ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Sample products data for search
const searchableItems = [
  {
    id: 1,
    title: "Organic Lavender Essential Oil",
    type: "product",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
  {
    id: 2,
    title: "Chamomile Tea Blend",
    type: "product",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
  },
  {
    id: 3,
    title: "Echinacea Immune Support",
    type: "product",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
  },
  {
    id: 1,
    title: "Teas & Infusions",
    type: "category",
  },
  {
    id: 2,
    title: "Essential Oils",
    type: "category",
  },
  {
    id: 1,
    title: "Nature's Bliss",
    type: "vendor",
  }
];

interface SearchResultProps {
  id: number;
  title: string;
  type: string;
  image?: string;
  onSelect: () => void;
}

const SearchResult = ({ id, title, type, image, onSelect }: SearchResultProps) => {
  return (
    <div 
      className="p-3 hover:bg-herb-soft-purple/30 rounded-md cursor-pointer transition-colors flex items-center"
      onClick={onSelect}
    >
      {image && (
        <div className="h-10 w-10 rounded overflow-hidden mr-3 bg-white border">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      )}
      <div className="flex-grow">
        <p className="font-medium text-herb-dark">{title}</p>
        <p className="text-xs text-gray-500 capitalize">{type}</p>
      </div>
      <ArrowRight className="h-4 w-4 text-gray-400" />
    </div>
  );
};

const SearchDialog = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof searchableItems>([]);
  const navigate = useNavigate();

  // Filter results based on search query
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    
    const filtered = searchableItems.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);
  
  const handleSelect = (item: typeof searchableItems[0]) => {
    // Navigate based on the type of result
    if (item.type === 'product') {
      navigate(`/product/${item.id}`);
    } else if (item.type === 'category') {
      navigate(`/category/${item.id}`);
    } else if (item.type === 'vendor') {
      navigate(`/vendor/${item.id}`);
    }
    
    // Close the dialog and reset the search
    setOpen(false);
    setQuery('');
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md" onInteractOutside={(e) => e.preventDefault()}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search products, categories, vendors..."
            className="pl-10 pr-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <button 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setQuery('')}
            >
              <X size={18} />
            </button>
          )}
        </div>
        
        <div className="mt-4 max-h-[60vh] overflow-y-auto">
          {query.trim() !== '' && (
            <div className="space-y-1">
              {results.length > 0 ? (
                <>
                  {results.map((result, index) => (
                    <SearchResult 
                      key={`${result.type}-${result.id}-${index}`}
                      {...result}
                      onSelect={() => handleSelect(result)}
                    />
                  ))}
                </>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500">No results found for "{query}"</p>
                </div>
              )}
            </div>
          )}
          
          {query.trim() === '' && (
            <div className="text-center py-6">
              <p className="text-gray-500">Start typing to search</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
