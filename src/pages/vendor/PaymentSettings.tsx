
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Loader2 } from "lucide-react";
import VendorLayout from "@/components/vendor/VendorLayout";

const PaymentSettings = () => {
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [stripeConnected, setStripeConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleConnectStripe = () => {
    setLoading(true);
    
    // Simulating connection to Stripe
    setTimeout(() => {
      setLoading(false);
      setStripeConnected(true);
      
      toast({
        title: "Stripe connected",
        description: "Your Stripe account has been successfully connected.",
      });
    }, 1500);
  };

  const handleSaveBankDetails = () => {
    setLoading(true);
    
    // Simulating saving bank details
    setTimeout(() => {
      setLoading(false);
      
      toast({
        title: "Bank details saved",
        description: "Your bank account details have been saved successfully.",
      });
    }, 1500);
  };

  return (
    <VendorLayout activeTab="payments" title="Payment Settings">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <CreditCard className="mr-2 h-5 w-5 text-herb-purple" />
              Payout Methods
            </CardTitle>
            <CardDescription>
              Configure how you would like to receive payments from your sales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup 
              value={paymentMethod} 
              onValueChange={setPaymentMethod}
              className="space-y-4"
            >
              <div className="flex items-start space-x-3 border rounded-md p-4">
                <RadioGroupItem value="stripe" id="stripe" />
                <div className="space-y-2 w-full">
                  <Label htmlFor="stripe" className="text-base font-medium cursor-pointer">
                    Stripe
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Connect your Stripe account to receive payments directly. We charge 2.9% + $0.30 per transaction.
                  </p>
                  
                  {paymentMethod === "stripe" && (
                    <div className="mt-4">
                      {stripeConnected ? (
                        <div className="flex items-center justify-between border rounded-md p-3 bg-green-50">
                          <div>
                            <p className="text-sm font-medium text-green-700">Stripe account connected</p>
                            <p className="text-xs text-green-600">Connected as: stripe_user@example.com</p>
                          </div>
                          <Button variant="outline" size="sm">Disconnect</Button>
                        </div>
                      ) : (
                        <Button 
                          onClick={handleConnectStripe}
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Connecting...
                            </>
                          ) : (
                            'Connect Stripe Account'
                          )}
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-start space-x-3 border rounded-md p-4">
                <RadioGroupItem value="bank" id="bank" />
                <div className="space-y-2 w-full">
                  <Label htmlFor="bank" className="text-base font-medium cursor-pointer">
                    Direct Bank Transfer
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive payments directly to your bank account. Processing time is 3-5 business days.
                  </p>
                  
                  {paymentMethod === "bank" && (
                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="accountName">Account Holder Name</Label>
                        <Input
                          id="accountName"
                          value={accountName}
                          onChange={(e) => setAccountName(e.target.value)}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bankName">Bank Name</Label>
                        <Input
                          id="bankName"
                          value={bankName}
                          onChange={(e) => setBankName(e.target.value)}
                          placeholder="Bank of America"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="accountNumber">Account Number</Label>
                        <Input
                          id="accountNumber"
                          value={accountNumber}
                          onChange={(e) => setAccountNumber(e.target.value)}
                          placeholder="XXXX-XXXX-XXXX-XXXX"
                        />
                      </div>
                      
                      <Button 
                        onClick={handleSaveBankDetails}
                        disabled={loading || !accountName || !bankName || !accountNumber}
                        className="mt-2"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          'Save Bank Details'
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Payout Schedule</CardTitle>
            <CardDescription>
              Configure when you would like to receive your payments
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <RadioGroup defaultValue="weekly">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="daily" id="daily" />
                  <Label htmlFor="daily">Daily</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="weekly" id="weekly" />
                  <Label htmlFor="weekly">Weekly (Recommended)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">Monthly</Label>
                </div>
              </RadioGroup>
            </div>
            
            <Separator />
            
            <div className="pt-2">
              <p className="text-sm text-muted-foreground">
                Note: Payouts may take 1-3 business days to be processed depending on your payment method
                and bank processing times.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-herb-purple hover:bg-herb-purple-dark">
              Save Payout Settings
            </Button>
          </CardFooter>
        </Card>
      </div>
    </VendorLayout>
  );
};

export default PaymentSettings;
