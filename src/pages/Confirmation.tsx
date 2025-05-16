
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Check, Calendar } from "lucide-react";
import { generateBookingId } from "@/lib/utils";
import { CartItem } from "@/lib/types";
import { supabase } from "@/lib/supabase";

interface BookingDetails {
  items: CartItem[];
  total: number;
  date: string;
}

const Confirmation = () => {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [bookingId] = useState(generateBookingId());
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      try {
        if (supabase) {
          const { data: { session } } = await supabase.auth.getSession();
          
          if (!session) {
            // Redirect to login if not authenticated
            navigate("/login");
            return;
          }
          
          // Set user email if authenticated
          setUserEmail(session.user.email);
        }
      } catch (error) {
        console.error("Authentication check error:", error);
      }
    };
    
    checkAuth();
    
    // In a real app, we would get this from API response
    // For demo purposes, we'll retrieve it from localStorage
    const bookingJSON = localStorage.getItem('bookingDetails');
    if (bookingJSON) {
      try {
        const parsedBooking = JSON.parse(bookingJSON);
        setBookingDetails(parsedBooking);
      } catch (error) {
        console.error("Error parsing booking data:", error);
        setBookingDetails(null);
      }
    }
  }, [navigate]);

  if (!bookingDetails) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">No booking information found</h1>
            <Link to="/events">
              <Button>Browse Events</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Success Header */}
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check size={32} className="text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Booking Confirmed!</h1>
              <p className="text-gray-600 mt-2">
                Thank you for your purchase. Your tickets are on the way!
              </p>
              {userEmail && (
                <p className="text-gray-600 mt-1">
                  Confirmation sent to: <strong>{userEmail}</strong>
                </p>
              )}
            </div>
            
            {/* Booking Details */}
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-1">Booking Reference:</h2>
                <p className="text-2xl font-mono tracking-wider">{bookingId}</p>
              </div>
              
              <div className="flex items-start space-x-2 text-gray-600 mb-4">
                <Calendar size={18} className="mt-0.5" />
                <span>
                  {new Date(bookingDetails.date).toLocaleDateString()} at{" "}
                  {new Date(bookingDetails.date).toLocaleTimeString()}
                </span>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold mb-2">Ticket Summary:</h2>
                <div className="space-y-3">
                  {bookingDetails.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{item.eventName}</h3>
                        <p className="text-sm text-gray-600">
                          {item.quantity} × {item.ticketTypeName}
                        </p>
                      </div>
                      <div className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Order Total */}
            <div className="flex justify-between items-center font-semibold text-lg mb-8">
              <span>Total Paid:</span>
              <span>${bookingDetails.total.toFixed(2)}</span>
            </div>
            
            {/* Next Steps */}
            <div className="bg-blue-50 rounded-lg p-4 mb-8">
              <h3 className="font-semibold text-blue-800 mb-2">What's Next?</h3>
              <p className="text-blue-700">
                Your e-tickets have been emailed to you. You can also access your tickets anytime from your "My Tickets" section.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/my-tickets">
                <Button className="bg-ticket-purple hover:bg-ticket-darkPurple w-full sm:w-auto">
                  View My Tickets
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="border-ticket-purple text-ticket-purple hover:bg-ticket-purple hover:text-white w-full sm:w-auto">
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
