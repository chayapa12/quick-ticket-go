
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-2xl text-ticket-purple">
              Quick<span className="text-ticket-darkPurple">Ticket</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-ticket-purple transition-colors">
              Home
            </Link>
            <Link to="/events" className="px-3 py-2 text-gray-700 hover:text-ticket-purple transition-colors">
              Events
            </Link>
            <Link to="/my-tickets" className="px-3 py-2 text-gray-700 hover:text-ticket-purple transition-colors">
              My Tickets
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-ticket-purple text-ticket-purple hover:bg-ticket-purple hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-ticket-purple text-white hover:bg-ticket-darkPurple">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-ticket-purple focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 py-3 bg-white">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="px-3 py-2 text-gray-700 hover:text-ticket-purple rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/events" 
                className="px-3 py-2 text-gray-700 hover:text-ticket-purple rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link 
                to="/my-tickets" 
                className="px-3 py-2 text-gray-700 hover:text-ticket-purple rounded-md"
                onClick={() => setIsOpen(false)}
              >
                My Tickets
              </Link>
              <Link 
                to="/login" 
                className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="px-3 py-2 bg-ticket-purple text-white hover:bg-ticket-darkPurple rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
