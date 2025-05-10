import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Truck, ArrowLeft, Check, Info, Shield, Leaf, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Sample product data - in a real application this would come from an API
const productData = {
  "1": {
    id: 1,
    title: "Organic Lavender Essential Oil",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    galleryImages: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      "https://images.unsplash.com/photo-1582640733798-6e3e7d7ecd4c",
      "https://images.unsplash.com/photo-1595981234058-a9659694a600"
    ],
    vendor: "Nature's Bliss",
    rating: 4.8,
    reviews: 124,
    description: "Pure organic lavender essential oil, steam-distilled from fresh lavender flowers. Known for its calming and relaxing properties, it can help reduce anxiety and improve sleep quality.",
    benefits: ["Promotes relaxation", "Soothes skin irritation", "Improves sleep quality", "Natural stress relief"],
    usage: "Add a few drops to a diffuser, mix with a carrier oil for topical application, or add to bathwater for a relaxing experience.",
    ingredients: "100% pure Lavandula angustifolia (Lavender) oil",
    size: "15ml",
    tags: ["Essential Oil", "Relaxation", "Sleep Aid", "Organic"],
    certifications: ["USDA Organic", "Cruelty-Free", "Non-GMO"],
    stock: 45,
    featured: true,
    inWishlist: false,
    relatedProducts: [2, 3]
  },
  "2": {
    id: 2,
    title: "Chamomile Tea Blend",
    price: 9.95,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    galleryImages: [
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      "https://images.unsplash.com/photo-1563911892437-1feda0179e1b",
      "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1"
    ],
    vendor: "Herbal Haven",
    rating: 4.5,
    reviews: 86,
    description: "A soothing blend of organic chamomile flowers with hints of lemon and honey. This caffeine-free tea helps calm the mind and prepare the body for restful sleep.",
    benefits: ["Promotes relaxation", "Supports digestive health", "Caffeine-free", "Natural sleep aid"],
    usage: "Steep 1 teaspoon in hot water for 5-7 minutes. Enjoy 1-2 cups daily, preferably in the evening.",
    ingredients: "Organic chamomile flowers, lemon peel, honey granules, lemon balm",
    size: "50g (approximately 25 servings)",
    tags: ["Tea", "Sleep Aid", "Digestive Health", "Organic"],
    certifications: ["USDA Organic", "Non-GMO"],
    stock: 78,
    featured: false,
    inWishlist: true,
    relatedProducts: [1, 3]
  },
  "3": {
    id: 3,
    title: "Echinacea Immune Support",
    price: 24.50,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    galleryImages: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    ],
    vendor: "Wellness Roots",
    rating: 4.7,
    reviews: 52,
    description: "A powerful herbal supplement formulated to support the immune system, especially during seasonal changes. Made from organically grown echinacea purpurea root and herb.",
    benefits: ["Boosts immune system", "Reduces duration of colds", "Contains antioxidants", "Anti-inflammatory properties"],
    usage: "Take 2 capsules daily with water, preferably with meals. Increase to 3 times daily at the first sign of illness.",
    ingredients: "Organic Echinacea purpurea (root and herb), vegetable cellulose capsule",
    size: "60 vegetarian capsules",
    tags: ["Supplement", "Immune Support", "Antioxidant", "Organic"],
    certifications: ["USDA Organic", "GMP Certified", "Vegan"],
    stock: 32,
    featured: true,
    inWishlist: false,
    relatedProducts: [1, 2]
  }
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [mainImage, setMainImage] = useState('');
  const [inWishlist, setInWishlist] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  useEffect(() => {
    // In a real application, this would be an API call
    if (productId && productData[productId as keyof typeof productData]) {
      const currentProduct = productData[productId as keyof typeof productData];
      setProduct(currentProduct);
      setMainImage(currentProduct.image);
      setInWishlist(currentProduct.inWishlist || false);
      
      // Get related products
      const related: any[] = [];
      currentProduct.relatedProducts?.forEach(id => {
        const relatedId = String(id);
        if (productData[relatedId as keyof typeof productData]) {
          related.push(productData[relatedId as keyof typeof productData]);
        }
      });
      setRelatedProducts(related);
    }
    setIsLoading(false);
  }, [productId]);

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${quantity > 1 ? 'items' : 'item'} to your cart`, {
      description: product?.title,
    });
  };

  const handleToggleWishlist = () => {
    setInWishlist(!inWishlist);
    toast(`${!inWishlist ? 'Added to' : 'Removed from'} your wishlist`, {
      description: product?.title,
    });
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="rounded-full h-16 w-16 bg-herb-soft-purple flex items-center justify-center mb-4 animate-pulse">
              <Leaf className="text-herb-purple h-8 w-8" />
            </div>
            <p className="text-herb-dark">Loading product details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-lg px-4">
            <div className="text-herb-purple text-6xl mb-4">404</div>
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
            <Button asChild className="bg-herb-purple hover:bg-herb-purple-dark">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white">
        {/* Breadcrumb */}
        <div className="bg-herb-light-gray py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-herb-purple">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/products" className="hover:text-herb-purple">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-herb-purple font-medium truncate max-w-[200px]">{product.title}</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden border border-gray-100 bg-white aspect-square">
                  <img 
                    src={mainImage} 
                    alt={product.title} 
                    className="w-full h-full object-contain p-4"
                  />
                  {product.featured && (
                    <Badge className="absolute top-4 left-4 bg-herb-purple">Featured</Badge>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {product.galleryImages?.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setMainImage(img)}
                      className={`border rounded-lg overflow-hidden aspect-square ${mainImage === img ? 'border-herb-purple ring-1 ring-herb-purple' : 'border-gray-200'}`}
                    >
                      <img src={img} alt={`${product.title} - view ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center">
                    <Link to={`/vendor/${product.vendorId || 1}`} className="text-herb-purple text-sm font-medium hover:underline">{product.vendor}</Link>
                    <span className="mx-2 text-gray-300">|</span>
                    <div className="flex items-center">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                            className={i < Math.floor(product.rating) ? "text-amber-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="text-herb-dark font-medium ml-2">{product.rating}</span>
                      <span className="text-gray-500 ml-1">({product.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-herb-dark mt-2">{product.title}</h1>
                  
                  <div className="mt-4 flex items-end">
                    <div className="text-2xl font-bold text-herb-purple">${product.price.toFixed(2)}</div>
                    {product.originalPrice && (
                      <div className="ml-3 text-lg text-gray-400 line-through">${product.originalPrice.toFixed(2)}</div>
                    )}
                  </div>
                </div>
                
                <div className="bg-herb-soft-purple/30 rounded-lg p-4">
                  <p className="text-gray-700">{product.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Benefits:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.tags?.map((tag: string, idx: number) => (
                    <Badge key={idx} variant="outline" className="bg-gray-50">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2 border-t border-b py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-herb-dark">Size:</span>
                    <span className="font-medium">{product.size}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-herb-dark">Stock:</span>
                    <div className={`font-medium ${product.stock > 10 ? 'text-green-600' : 'text-amber-600'}`}>
                      {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
                    </div>
                  </div>
                  
                  {product.certifications?.length > 0 && (
                    <div className="flex items-center justify-between">
                      <span className="text-herb-dark">Certifications:</span>
                      <div className="flex flex-wrap gap-2">
                        {product.certifications.map((cert: string, idx: number) => (
                          <Badge key={idx} variant="secondary" className="bg-herb-green text-herb-dark text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-4">
                  <span className="text-herb-dark">Quantity:</span>
                  <div className="flex items-center border border-gray-200 rounded-md">
                    <button 
                      onClick={decreaseQuantity}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-200 min-w-[40px] text-center">{quantity}</span>
                    <button 
                      onClick={increaseQuantity}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex-grow bg-herb-purple hover:bg-herb-purple-dark py-6"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2" />
                    Add to Cart
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className={`py-6 ${inWishlist ? 'bg-herb-soft-purple text-herb-purple border-herb-purple' : 'border-gray-300'}`}
                    onClick={handleToggleWishlist}
                  >
                    {inWishlist ? 'In Wishlist' : 'Add to Wishlist'}
                  </Button>
                </div>

                {/* Shipping Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start p-4 bg-herb-light-gray rounded-lg">
                    <Truck className="mr-3 text-herb-purple shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Free shipping</p>
                      <p className="text-sm text-gray-600">Orders over $50 qualify for free shipping</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-herb-light-gray rounded-lg">
                    <RefreshCw className="mr-3 text-herb-purple shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">30-day returns</p>
                      <p className="text-sm text-gray-600">Shop with confidence with our hassle-free return policy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Tabs */}
            <div className="mt-16">
              <Tabs defaultValue="usage">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="usage">Usage & Instructions</TabsTrigger>
                  <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
                </TabsList>
                <TabsContent value="usage" className="p-6 border rounded-b-lg">
                  <h3 className="font-semibold text-lg mb-3">How to Use</h3>
                  <p className="text-gray-700">{product.usage}</p>
                </TabsContent>
                <TabsContent value="ingredients" className="p-6 border rounded-b-lg">
                  <h3 className="font-semibold text-lg mb-3">Ingredients</h3>
                  <p className="text-gray-700">{product.ingredients}</p>
                </TabsContent>
                <TabsContent value="shipping" className="p-6 border rounded-b-lg">
                  <h3 className="font-semibold text-lg mb-3">Shipping Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Free standard shipping on orders over $50</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Standard shipping (5-7 business days): $5.99</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Express shipping (2-3 business days): $12.99</span>
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-lg mt-6 mb-3">Return Policy</h3>
                  <p className="text-gray-700 mb-2">
                    If you're not fully satisfied with your purchase, you can return it within 30 days for a full refund.
                    Products must be in their original packaging and unused condition.
                  </p>
                  <p className="text-gray-700">
                    Please note that shipping costs are non-refundable, and customer is responsible for return shipping costs.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-herb-dark mb-6">You May Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {relatedProducts.map((relatedProduct) => (
                    <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="group">
                      <div className="border rounded-lg overflow-hidden hover:shadow-md transition-all">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={relatedProduct.image} 
                            alt={relatedProduct.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium group-hover:text-herb-purple transition-colors line-clamp-2">
                            {relatedProduct.title}
                          </h3>
                          <div className="mt-2 flex justify-between items-center">
                            <span className="font-bold text-herb-purple">${relatedProduct.price.toFixed(2)}</span>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                              <span className="ml-1 text-sm">{relatedProduct.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
