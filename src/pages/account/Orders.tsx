
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Package, Search, Eye, ArrowUpDown, ChevronDown, ChevronUp } from 'lucide-react';
import AccountLayout from "@/components/AccountLayout";

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'canceled';
  total: number;
  items: number;
}

const orders: Order[] = [
  {
    id: 'ORD-7392',
    date: '2023-05-02',
    status: 'delivered',
    total: 89.97,
    items: 3
  },
  {
    id: 'ORD-6104',
    date: '2023-04-18',
    status: 'delivered',
    total: 42.50,
    items: 2
  },
  {
    id: 'ORD-5829',
    date: '2023-03-24',
    status: 'delivered',
    total: 121.35,
    items: 5
  },
  {
    id: 'ORD-9471',
    date: '2023-02-10',
    status: 'canceled',
    total: 34.99,
    items: 1
  },
];

const getStatusColor = (status: Order['status']) => {
  switch (status) {
    case 'processing':
      return 'bg-blue-100 text-blue-800';
    case 'shipped':
      return 'bg-amber-100 text-amber-800';
    case 'delivered':
      return 'bg-green-100 text-green-800';
    case 'canceled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusLabel = (status: Order['status']) => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }).format(date);
};

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof Order | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
  const toggleSort = (field: keyof Order) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };
  
  const getSortIcon = (field: keyof Order) => {
    if (sortField !== field) {
      return <ArrowUpDown className="h-4 w-4" />;
    }
    return sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />;
  };
  
  const sortedOrders = [...orders].sort((a, b) => {
    if (!sortField) return 0;
    
    if (sortField === 'total' || sortField === 'items') {
      return sortDirection === 'asc' 
        ? a[sortField] - b[sortField] 
        : b[sortField] - a[sortField];
    }
    
    return sortDirection === 'asc'
      ? a[sortField].localeCompare(b[sortField])
      : b[sortField].localeCompare(a[sortField]);
  });
  
  const filteredOrders = sortedOrders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AccountLayout activeTab="orders" title="My Orders">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-xl flex items-center gap-2">
                <Package className="h-5 w-5 text-herb-purple" />
                Orders History
              </CardTitle>
              <CardDescription>
                View and track all your orders
              </CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by order ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filteredOrders.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">
                      <button 
                        className="flex items-center space-x-1"
                        onClick={() => toggleSort('id')}
                      >
                        <span>Order ID</span>
                        {getSortIcon('id')}
                      </button>
                    </TableHead>
                    <TableHead>
                      <button 
                        className="flex items-center space-x-1"
                        onClick={() => toggleSort('date')}
                      >
                        <span>Date</span>
                        {getSortIcon('date')}
                      </button>
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>
                      <button 
                        className="flex items-center space-x-1"
                        onClick={() => toggleSort('items')}
                      >
                        <span>Items</span>
                        {getSortIcon('items')}
                      </button>
                    </TableHead>
                    <TableHead>
                      <button 
                        className="flex items-center space-x-1"
                        onClick={() => toggleSort('total')}
                      >
                        <span>Total</span>
                        {getSortIcon('total')}
                      </button>
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{formatDate(order.date)}</TableCell>
                      <TableCell>
                        <Badge className={`${getStatusColor(order.status)}`}>
                          {getStatusLabel(order.status)}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell>${order.total.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/order/${order.id}`}>
                            <Eye className="h-3.5 w-3.5 mr-1" />
                            View
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-herb-light-gray mb-4">
                <Package className="h-8 w-8 text-herb-purple" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No orders found</h3>
              <p className="text-gray-500 mb-4">
                {searchTerm 
                  ? `No orders matching "${searchTerm}"`
                  : "You haven't placed any orders yet"}
              </p>
              <Button asChild className="bg-herb-purple hover:bg-herb-purple-dark">
                <Link to="/products">Start Shopping</Link>
              </Button>
            </div>
          )}
        </CardContent>
        {filteredOrders.length > 0 && (
          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Showing {filteredOrders.length} of {orders.length} orders</p>
            {filteredOrders.length < orders.length && (
              <Button variant="outline" size="sm" onClick={() => setSearchTerm('')}>
                Clear Filters
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </AccountLayout>
  );
};

export default Orders;
