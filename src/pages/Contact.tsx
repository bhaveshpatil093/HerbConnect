
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to a server
    console.log('Form data:', formData);
    
    toast.success("Message sent successfully!", {
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-herb-green leaf-pattern py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-herb-dark mb-6">Contact Us</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
        </section>

        {/* Contact Form and Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-herb-dark mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-herb-purple hover:bg-herb-purple-dark">
                    <Send className="mr-2" size={16} />
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-herb-dark mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Our customer support team is here to answer your questions and help you find the right products for your wellness journey.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-herb-purple mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-herb-dark">Email</h3>
                      <p className="text-gray-600">support@herbconnect.com</p>
                      <p className="text-gray-600">info@herbconnect.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-herb-purple mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-herb-dark">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">Mon-Fri: 9am - 5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-herb-purple mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-herb-dark">Office</h3>
                      <p className="text-gray-600">123 Wellness Way,</p>
                      <p className="text-gray-600">Portland, OR 97201</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 p-6 bg-herb-light-gray rounded-lg">
                  <h3 className="text-lg font-semibold text-herb-dark mb-3">Business Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 3:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-herb-light-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-herb-dark mb-10">Find Us</h2>
            <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
              <div className="w-full h-96 bg-gray-300 rounded-xl">
                {/* In a real application, this would be a Google Maps embed */}
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-600">Map placeholder - In a real application, this would be an interactive map</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
