
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, MapPin, Phone, Calendar, Camera, CheckCircle, Loader2 } from "lucide-react";
import AccountLayout from "@/components/AccountLayout";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSave = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Profile updated",
        description: "Your profile information has been saved.",
      });
    }, 1000);
  };

  return (
    <AccountLayout activeTab="profile" title="My Profile">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Profile Information</CardTitle>
            <CardDescription>
              Update your personal information and how others see you on the site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                <div className="relative">
                  <Avatar className="w-24 h-24 border-2 border-white shadow-md">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-0 right-0">
                    <Button variant="secondary" size="icon" className="rounded-full h-8 w-8">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="font-semibold text-lg">Jane Doe</h3>
                  <p className="text-sm text-gray-500">Member since Feb 2023</p>
                  <div className="flex items-center justify-center sm:justify-start space-x-1 text-xs text-herb-purple">
                    <CheckCircle className="h-3 w-3 fill-herb-purple" />
                    <span>Verified Customer</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="address">Address</TabsTrigger>
                </TabsList>
                
                <TabsContent value="personal" className="space-y-6 pt-4">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="firstName" defaultValue="Jane" className="pl-10" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="lastName" defaultValue="Doe" className="pl-10" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="email" type="email" defaultValue="jane.doe@example.com" className="pl-10" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="pl-10" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">Date of birth</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="birthdate" type="date" defaultValue="1990-01-15" className="pl-10" />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="address" className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="address" defaultValue="123 Wellness Street" className="pl-10" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="Portland" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" defaultValue="Oregon" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP / Postal code</Label>
                      <Input id="zip" defaultValue="97204" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" defaultValue="United States" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
          <CardFooter className="justify-end space-x-2">
            <Button variant="outline">Cancel</Button>
            <Button 
              onClick={handleSave}
              disabled={loading}
              className="bg-herb-purple hover:bg-herb-purple-dark"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">About Me</CardTitle>
            <CardDescription>
              Share a bit about yourself with the community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio" 
                placeholder="Tell us about your interest in herbal products..."
                className="min-h-[120px] resize-none"
                defaultValue="I'm passionate about natural wellness and have been exploring herbal remedies for over 5 years. I'm especially interested in adaptogenic herbs and essential oils for stress relief."
              />
              <p className="text-xs text-muted-foreground">
                This information may be shown on your public profile
              </p>
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button variant="outline">Update Bio</Button>
          </CardFooter>
        </Card>
      </div>
    </AccountLayout>
  );
};

export default Profile;
