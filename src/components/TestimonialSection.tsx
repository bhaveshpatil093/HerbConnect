
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  id: number;
  text: string;
  name: string;
  role: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    text: "HerbConnect has transformed how I find natural remedies. The quality of products and ease of use is unmatched!",
    name: "Sarah Johnson",
    role: "Wellness Enthusiast",
    rating: 5
  },
  {
    id: 2,
    text: "As a vendor on HerbConnect, I've been able to reach more customers who truly value natural wellness products.",
    name: "Michael Chen",
    role: "Herbalist & Vendor",
    rating: 5
  },
  {
    id: 3,
    text: "The variety of products available is amazing. I've discovered so many new herbs and supplements to support my health journey.",
    name: "Emily Rodriguez",
    role: "Yoga Instructor",
    rating: 4
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
          ))}
        </div>
        <p className="italic text-gray-700 flex-grow mb-4">"{testimonial.text}"</p>
        <div>
          <p className="font-semibold text-herb-dark">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-herb-dark mb-4">What Our Community Says</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers and vendors who are part of the HerbConnect community.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
