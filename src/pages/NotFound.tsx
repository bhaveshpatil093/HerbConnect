
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-herb-light-gray py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-herb-purple text-9xl font-bold mb-6">404</div>
          <h1 className="text-4xl font-bold text-herb-dark mb-4">Page Not Found</h1>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="bg-herb-purple hover:bg-herb-purple-dark">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
