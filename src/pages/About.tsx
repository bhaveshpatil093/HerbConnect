
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-herb-green leaf-pattern py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-herb-dark mb-6">About HerbConnect</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Connecting you with nature's healing power through trusted vendors and premium natural wellness products.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-herb-dark mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At HerbConnect, we believe in the healing power of nature. Our mission is to make natural wellness accessible to everyone by creating a marketplace that connects conscious consumers with trusted vendors of herbal products.
                </p>
                <p className="text-gray-600">
                  We carefully select vendors who share our commitment to quality, sustainability, and ethical sourcing. Every product on our platform is vetted to ensure it meets our high standards for purity and effectiveness.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-herb-peach rounded-full -z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf"
                  alt="Herbal garden"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-herb-light-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-herb-dark text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-herb-green rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-herb-dark mb-4 text-center">Sustainability</h3>
                <p className="text-gray-600 text-center">
                  We prioritize environmentally friendly practices and support vendors who source ingredients sustainably.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-herb-soft-purple rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-herb-dark mb-4 text-center">Community</h3>
                <p className="text-gray-600 text-center">
                  We foster connections between herbalists, wellness practitioners, and conscious consumers.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-herb-peach rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-herb-dark mb-4 text-center">Quality</h3>
                <p className="text-gray-600 text-center">
                  We maintain high standards for all products on our platform, ensuring purity, potency, and ethical sourcing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-herb-dark text-center mb-6">Our Team</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              HerbConnect was founded by a team of herbalists, wellness practitioners, and technology experts who share a passion for natural healing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Emma Chen", role: "Founder & Herbalist", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
                { name: "Michael Rivera", role: "Chief Product Officer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
                { name: "Aisha Johnson", role: "Head of Vendor Relations", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" },
                { name: "David Kim", role: "Tech Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" }
              ].map(member => (
                <div key={member.name} className="text-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-herb-dark">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
