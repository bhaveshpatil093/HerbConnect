
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingBag, DollarSign, TrendingUp, Calendar, Users } from 'lucide-react';
import VendorLayout from "@/components/vendor/VendorLayout";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: "Total Products",
      value: "24",
      change: "+4.9%",
      icon: Package,
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Total Orders",
      value: "320",
      change: "+12.3%",
      icon: ShoppingBag,
      color: "bg-green-100 text-green-700"
    },
    {
      title: "Revenue",
      value: "$12,400",
      change: "+8.2%",
      icon: DollarSign,
      color: "bg-purple-100 text-purple-700"
    },
    {
      title: "Customers",
      value: "156",
      change: "+3.7%",
      icon: Users,
      color: "bg-amber-100 text-amber-700"
    },
  ];

  return (
    <VendorLayout activeTab="dashboard" title="Vendor Dashboard">
      <div className="space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">
              Welcome back, {user?.name}!
            </CardTitle>
            <CardDescription>
              Here's what's happening with your store today.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                      <div className="flex items-baseline">
                        <h4 className="text-2xl font-semibold">{stat.value}</h4>
                        <span className="ml-2 text-sm font-medium text-green-600">{stat.change}</span>
                      </div>
                    </div>
                    <div className={`p-2 rounded-full ${stat.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((order) => (
                  <div key={order} className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Order #{order + 10240}</p>
                      <p className="text-sm text-muted-foreground">2 products • $89.99</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-800">Shipped</span>
                      <p className="text-xs text-muted-foreground mt-1">May {order + 4}, 2025</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top Selling Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((product) => (
                  <div key={product} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-md mr-3"></div>
                      <div>
                        <p className="font-medium">Product Name #{product}</p>
                        <p className="text-xs text-muted-foreground">{product * 11} units sold</p>
                      </div>
                    </div>
                    <p className="font-medium">${(product * 19.99).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </VendorLayout>
  );
};

export default Dashboard;
