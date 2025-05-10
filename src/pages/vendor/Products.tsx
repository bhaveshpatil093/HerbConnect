
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Search, MoreVertical, Edit, Trash2, Eye } from "lucide-react";
import VendorLayout from "@/components/vendor/VendorLayout";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample product data
  const products = [
    {
      id: "1",
      name: "Organic Lavender Essential Oil",
      price: 19.99,
      category: "Essential Oils",
      stock: 58,
      status: "In Stock"
    },
    {
      id: "2",
      name: "Chamomile Tea Bags (Pack of 20)",
      price: 8.99,
      category: "Tea",
      stock: 120,
      status: "In Stock"
    },
    {
      id: "3",
      name: "Natural Hemp Massage Oil",
      price: 24.95,
      category: "Massage Oils",
      stock: 35,
      status: "In Stock"
    },
    {
      id: "4",
      name: "Echinacea Immune Support Capsules",
      price: 15.99,
      category: "Supplements",
      stock: 0,
      status: "Out of Stock"
    },
    {
      id: "5",
      name: "Organic Aloe Vera Gel",
      price: 12.50,
      category: "Skin Care",
      stock: 42,
      status: "In Stock"
    }
  ];

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <VendorLayout activeTab="products" title="Product Management">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>My Products</CardTitle>
          <Button asChild>
            <Link to="/vendor/add-product">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Product
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center py-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={product.status === "In Stock" ? "default" : "destructive"}
                        className={product.status === "In Stock" ? "bg-green-500" : ""}
                      >
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            <span>View</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            <span>Edit</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </VendorLayout>
  );
};

export default Products;
