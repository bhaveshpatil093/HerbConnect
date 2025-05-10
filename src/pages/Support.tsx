
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  HelpCircle, 
  Send,
  Search
} from "lucide-react";
import { toast } from "sonner";

// FAQ data
const faqs = [
  {
    question: "How do I track my order?",
    answer: "You can track your order by logging into your account and navigating to 'Order History'. Click on the specific order to view its current status and tracking information. Alternatively, you can use the tracking number provided in your shipping confirmation email."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most products. Items must be in their original packaging and unused condition. To initiate a return, please contact our customer support team or visit the 'Returns' section in your account dashboard. Please note that shipping costs are non-refundable."
  },
  {
    question: "Are your products organic?",
    answer: "Many of our products are certified organic, which will be clearly indicated on the product page. We work with vendors who prioritize sustainable and ethical sourcing practices. You can filter for organic products specifically using our search filters."
  },
  {
    question: "How do I know which herbs are right for me?",
    answer: "We recommend consulting with a healthcare professional before starting any new herbal supplement regimen. Our blog contains educational articles about different herbs and their traditional uses. You can also contact our customer support team for general information about our products."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to many countries worldwide. Shipping rates and delivery times vary by location. You can see specific shipping options and costs at checkout. Please note that customers are responsible for any customs fees or taxes that may apply to international orders."
  },
  {
    question: "How can I become a vendor on HerbConnect?",
    answer: "We're always looking for quality vendors who share our values of sustainability and natural wellness. Please visit our 'Become a Vendor' page to learn about our requirements and application process. You can submit your application online, and our vendor relations team will review it within 5-7 business days."
  },
  {
    question: "Are your products tested for quality and safety?",
    answer: "Yes, all products sold through HerbConnect must meet our quality standards. Our vendors are required to provide documentation of third-party testing and quality assurance measures. Many products also carry specific certifications like USDA Organic, Non-GMO Project Verified, or GMP Certified, which are displayed on the product pages."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. All transactions are processed through secure payment gateways to protect your information."
  }
];

const Support = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message!", {
      description: "We'll get back to you as soon as possible.",
    });
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="herb-gradient text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How Can We Help You?</h1>
            <p className="max-w-2xl mx-auto">
              We're here to assist you with any questions or concerns about our products and services.
            </p>
          </div>
        </section>
        
        {/* Support Channels */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-100 rounded-xl bg-herb-light-gray hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-herb-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our customer support team</p>
                <p className="font-medium text-herb-purple">+1 (800) 123-4567</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-5pm EST</p>
              </div>
              
              <div className="text-center p-6 border border-gray-100 rounded-xl bg-herb-light-gray hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-herb-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us a message and we'll respond within 24 hours</p>
                <p className="font-medium text-herb-purple">support@herbconnect.com</p>
                <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
              </div>
              
              <div className="text-center p-6 border border-gray-100 rounded-xl bg-herb-light-gray hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-herb-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
                <Button className="bg-herb-purple hover:bg-herb-purple-dark">
                  Start Chat
                </Button>
                <p className="text-sm text-gray-500 mt-4">Available Mon-Fri, 9am-8pm EST</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Support Tabs */}
        <section className="py-12 bg-herb-light-gray">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="faq">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
                <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
                <TabsTrigger value="contact">Contact Form</TabsTrigger>
              </TabsList>
              
              <TabsContent value="faq" className="bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto">
                <div className="mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      type="text"
                      placeholder="Search FAQs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                {filteredFaqs.length > 0 ? (
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFaqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-start">
                            <HelpCircle className="mr-2 h-5 w-5 text-herb-purple shrink-0 mt-0.5" />
                            <span>{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-8">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600">No FAQs found matching your search.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="contact" className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h3>
                <form onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactFormChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={contactForm.email}
                        onChange={handleContactFormChange}
                        placeholder="Your email address"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleContactFormChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactFormChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-herb-purple hover:bg-herb-purple-dark">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
