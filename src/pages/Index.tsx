
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import { getFeaturedEvents } from "@/data/events";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      
      <main className="flex-grow">
        {/* Featured Events Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
              <Link to="/events">
                <Button variant="outline" className="border-ticket-purple text-ticket-purple hover:bg-ticket-purple hover:text-white">
                  View All Events
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How QuickTicket Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-ticket-lightPurple rounded-full flex items-center justify-center text-ticket-purple mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Browse Events</h3>
                <p className="text-gray-600">Discover amazing events happening near you with our easy-to-use search filters.</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-ticket-lightPurple rounded-full flex items-center justify-center text-ticket-purple mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Tickets</h3>
                <p className="text-gray-600">Select your preferred tickets and seats from our available options.</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-ticket-lightPurple rounded-full flex items-center justify-center text-ticket-purple mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enjoy the Event</h3>
                <p className="text-gray-600">Get your e-tickets instantly and you're all set for an amazing experience!</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Unforgettable Experiences?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join QuickTicket today and never miss out on your favorite events again!
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-white text-ticket-darkPurple hover:bg-gray-100">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold text-2xl mb-2">QuickTicket</h3>
              <p className="text-gray-400">Your gateway to unforgettable experiences</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Connect</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} QuickTicket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
