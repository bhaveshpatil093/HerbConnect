
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { HelpCircle, MessageSquare, Phone, Mail, Loader2 } from 'lucide-react';
import AccountLayout from "@/components/AccountLayout";

const Support = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Support request submitted",
        description: "We'll get back to you within 24 hours."
      });
    }, 1000);
  };

  return (
    <AccountLayout activeTab="support" title="Customer Support">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-herb-purple" />
              How Can We Help?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's your question about?" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe your issue in detail..." 
                  className="min-h-[150px]"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" defaultValue="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" type="email" defaultValue="jane.doe@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="orderRef">Order Reference (if applicable)</Label>
                <Input id="orderRef" placeholder="e.g., ORD-7392" />
              </div>
              
              <div className="flex justify-end">
                <Button 
                  type="submit"
                  disabled={loading}
                  className="bg-herb-purple hover:bg-herb-purple-dark"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Submit Request
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className="h-12 w-12 bg-herb-soft-purple rounded-full flex items-center justify-center mb-3">
                <Phone className="h-6 w-6 text-herb-purple" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-gray-500 mb-4">Available Mon-Fri, 9AM-5PM</p>
              <p className="font-medium">+1 (888) 555-HERB</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className="h-12 w-12 bg-herb-soft-purple rounded-full flex items-center justify-center mb-3">
                <Mail className="h-6 w-6 text-herb-purple" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-gray-500 mb-4">We'll respond within 24 hours</p>
              <p className="font-medium">support@herbconnect.com</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className="h-12 w-12 bg-herb-soft-purple rounded-full flex items-center justify-center mb-3">
                <MessageSquare className="h-6 w-6 text-herb-purple" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
              <p className="text-gray-500 mb-4">Chat with our support team</p>
              <Button className="bg-herb-purple hover:bg-herb-purple-dark">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">How do I track my order?</h3>
              <p className="text-gray-600">
                You can track your order by going to the Orders section in your account dashboard and clicking on the specific order you want to track.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">What is your return policy?</h3>
              <p className="text-gray-600">
                We accept returns within 30 days of delivery for most products in their original condition. Please contact our support team to initiate a return.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Do you ship internationally?</h3>
              <p className="text-gray-600">
                Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AccountLayout>
  );
};

export default Support;
