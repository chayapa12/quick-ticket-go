
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-gradient text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experience Unforgettable Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover and book tickets for the best concerts, shows, and experiences with QuickTicket — your gateway to memorable moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/events">
              <Button size="lg" className="bg-white text-ticket-darkPurple hover:bg-gray-100 text-lg px-8">
                Explore Events
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-white h-16 rounded-t-[50%] -mb-1"></div>
    </div>
  );
};

export default HeroSection;
