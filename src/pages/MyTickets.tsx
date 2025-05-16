
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Ticket, Calendar, User } from "lucide-react";

// Mock data for past bookings
const pastBookings = [
  {
    id: "TICKET123",
    eventName: "Summer Music Festival",
    eventDate: "2024-05-01",
    ticketType: "VIP Access",
    quantity: 2,
    totalPaid: 399.98,
    status: "Completed"
  },
  {
    id: "TICKET456",
    eventName: "Tech Conference 2024",
    eventDate: "2024-04-15",
    ticketType: "Standard Pass",
    quantity: 1,
    totalPaid: 299.99,
    status: "Completed"
  }
];

const MyTickets = () => {
  const [isLoggedIn] = useState(false); // In a real app, this would come from auth state

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full mx-4 bg-white rounded-lg shadow-sm p-8 text-center">
            <User size={48} className="mx-auto text-gray-400 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Login Required</h1>
            <p className="text-gray-600 mb-6">
              Please login to view your tickets and booking history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button className="bg-ticket-purple hover:bg-ticket-darkPurple w-full sm:w-auto">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="border-ticket-purple text-ticket-purple hover:bg-ticket-purple hover:text-white w-full sm:w-auto">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Tickets</h1>
          
          {/* User Profile Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-ticket-lightPurple rounded-full w-16 h-16 flex items-center justify-center text-ticket-purple">
                <User size={32} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
            </div>
          </div>
          
          {/* Upcoming Tickets */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
            <div className="bg-white rounded-lg shadow-sm divide-y">
              {pastBookings.length === 0 ? (
                <div className="p-8 text-center">
                  <Ticket size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No upcoming tickets</h3>
                  <p className="text-gray-600 mb-6">
                    You don't have any upcoming events. Browse our events and book your next experience!
                  </p>
                  <Link to="/events">
                    <Button className="bg-ticket-purple hover:bg-ticket-darkPurple">
                      Browse Events
                    </Button>
                  </Link>
                </div>
              ) : (
                pastBookings.map((booking) => (
                  <div key={booking.id} className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{booking.eventName}</h3>
                        <div className="flex items-center text-gray-600 mt-1">
                          <Calendar size={16} className="mr-1" />
                          <span>
                            {new Date(booking.eventDate).toLocaleDateString("en-US", {
                              weekday: "short",
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                          {booking.status}
                        </span>
                        <p className="text-gray-600 text-sm mt-1">Booking ID: {booking.id}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-gray-700">
                          {booking.quantity} × {booking.ticketType}
                        </p>
                        <p className="text-gray-600 text-sm">
                          Total: ${booking.totalPaid.toFixed(2)}
                        </p>
                      </div>
                      <Button className="mt-4 sm:mt-0 bg-ticket-purple hover:bg-ticket-darkPurple">
                        View E-Tickets
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Booking History */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Past Bookings</h2>
            <div className="bg-white rounded-lg shadow-sm divide-y">
              {pastBookings.map((booking) => (
                <div key={booking.id} className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{booking.eventName}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Calendar size={16} className="mr-1" />
                        <span>
                          {new Date(booking.eventDate).toLocaleDateString("en-US", {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <span className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {booking.status}
                      </span>
                      <p className="text-gray-600 text-sm mt-1">Booking ID: {booking.id}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-gray-700">
                        {booking.quantity} × {booking.ticketType}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Total: ${booking.totalPaid.toFixed(2)}
                      </p>
                    </div>
                    <Button variant="outline" className="mt-4 sm:mt-0 border-ticket-purple text-ticket-purple hover:bg-ticket-purple hover:text-white">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTickets;
