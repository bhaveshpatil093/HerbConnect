
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Filter, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import AccountLayout from "@/components/AccountLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample purchase history data
const purchaseData = [
  {
    month: 'Jan',
    amount: 65,
    orders: 2
  },
  {
    month: 'Feb',
    amount: 35,
    orders: 1
  },
  {
    month: 'Mar',
    amount: 121,
    orders: 5
  },
  {
    month: 'Apr',
    amount: 85,
    orders: 3
  },
  {
    month: 'May',
    amount: 132,
    orders: 4
  },
  {
    month: 'Jun',
    amount: 78,
    orders: 2
  }
];

// Top purchased categories
const topCategories = [
  { name: 'Essential Oils', amount: 245, percentage: 47 },
  { name: 'Herbal Teas', amount: 137, percentage: 26 },
  { name: 'Supplements', amount: 89, percentage: 17 },
  { name: 'Accessories', amount: 52, percentage: 10 }
];

const PurchaseHistory = () => {
  return (
    <AccountLayout activeTab="history" title="Purchase History">
      <div className="space-y-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold text-herb-dark flex items-center gap-2">
              <History className="h-5 w-5 text-herb-purple" />
              Your Purchase History
            </h2>
            <p className="text-gray-500 text-sm">Track your spending and purchase patterns</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Spending Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={purchaseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="amount"
                  stroke="#9b87f5"
                  name="Amount Spent ($)"
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="orders"
                  stroke="#7E69AB"
                  name="Number of Orders"
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCategories.map((category, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between">
                      <span>{category.name}</span>
                      <span className="font-medium">${category.amount}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-herb-purple h-2 rounded-full" 
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 text-right">{category.percentage}% of total</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Purchase Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-herb-light-gray p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Total Spent</p>
                    <p className="text-2xl font-bold text-herb-purple">$516.00</p>
                    <p className="text-xs text-gray-500">Last 6 months</p>
                  </div>
                  <div className="bg-herb-light-gray p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Total Orders</p>
                    <p className="text-2xl font-bold text-herb-purple">17</p>
                    <p className="text-xs text-gray-500">Last 6 months</p>
                  </div>
                </div>
                <div className="bg-herb-light-gray p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-500">Average Order Value</p>
                    <p className="text-sm font-medium">$30.35</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-500">Most Expensive Purchase</p>
                    <p className="text-sm font-medium">$65.99</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Most Frequent Vendor</p>
                    <p className="text-sm font-medium">Nature's Bliss</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AccountLayout>
  );
};

export default PurchaseHistory;
