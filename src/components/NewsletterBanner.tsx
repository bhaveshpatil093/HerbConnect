
import { Button } from "@/components/ui/button";

const NewsletterBanner = () => {
  return (
    <section className="py-16 bg-herb-green leaf-pattern">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-herb-dark mb-4">
              Join Our Wellness Community
            </h2>
            <p className="text-gray-600">
              Subscribe to receive health tips, exclusive offers, and updates on new natural products.
            </p>
          </div>
          <form className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Your name"
              className="px-4 py-3 rounded-md border border-gray-200 flex-grow focus:outline-none focus:ring-2 focus:ring-herb-purple"
            />
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 rounded-md border border-gray-200 flex-grow focus:outline-none focus:ring-2 focus:ring-herb-purple"
            />
            <Button className="bg-herb-purple hover:bg-herb-purple-dark">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from HerbConnect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
