
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { getEventById } from "@/data/events";
import { formatDate, formatTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { TicketType, CartItem } from "@/lib/types";

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState(id ? getEventById(id) : null);
  const [selectedTicket, setSelectedTicket] = useState<TicketType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const eventData = getEventById(id);
      setEvent(eventData);
      
      if (eventData && eventData.ticketTypes.length > 0) {
        setSelectedTicket(eventData.ticketTypes[0]);
      }
    }
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
            <Link to="/events">
              <Button>Back to Events</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    if (!selectedTicket) return;
    
    // In a real app, we would store this in a global state or context
    // For demo purposes, we'll store it in localStorage
    const cartItem: CartItem = {
      eventId: event.id,
      eventName: event.name,
      ticketTypeId: selectedTicket.id,
      ticketTypeName: selectedTicket.name,
      quantity,
      price: selectedTicket.price
    };
    
    // Get existing cart or initialize empty array
    const existingCartJSON = localStorage.getItem('cart');
    const existingCart: CartItem[] = existingCartJSON ? JSON.parse(existingCartJSON) : [];
    
    // Add new item to cart
    localStorage.setItem('cart', JSON.stringify([...existingCart, cartItem]));
    
    toast({
      title: "Added to cart!",
      description: `${quantity} ${selectedTicket.name} ticket${quantity > 1 ? 's' : ''} for ${event.name}`,
    });
    
    navigate("/cart");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Event Hero */}
      <div 
        className="relative h-64 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{event.name}</h1>
            <div className="flex flex-wrap items-center text-white gap-4 mt-4">
              <div className="flex items-center">
                <CalendarDays size={18} className="mr-2" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{formatTime(event.time)}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>{event.venue}</span>
              </div>
              <div className="flex items-center">
                <Ticket size={18} className="mr-2" />
                <span>From ${event.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Event Details */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">Venue Information</h2>
              <h3 className="font-semibold text-lg mb-2">{event.venue}</h3>
              <p className="text-gray-700">{event.address}</p>
              
              <div className="mt-4 h-64 bg-gray-200 rounded-lg">
                {/* In a real app, we would embed a map here */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Map would appear here
                </div>
              </div>
            </div>
          </div>
          
          {/* Ticket Selection */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
              <h2 className="text-2xl font-bold mb-6">Get Tickets</h2>
              
              <div className="space-y-4">
                {/* Ticket type selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ticket Type
                  </label>
                  <select
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={selectedTicket?.id || ""}
                    onChange={(e) => {
                      const ticketType = event.ticketTypes.find(t => t.id === e.target.value);
                      setSelectedTicket(ticketType || null);
                    }}
                  >
                    {event.ticketTypes.map((ticketType) => (
                      <option key={ticketType.id} value={ticketType.id}>
                        {ticketType.name} - ${ticketType.price.toFixed(2)}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Ticket description */}
                {selectedTicket && (
                  <div className="bg-gray-50 p-3 rounded-md text-sm">
                    <p className="text-gray-700">{selectedTicket.description}</p>
                    <p className="text-gray-500 mt-1">{selectedTicket.available} tickets available</p>
                  </div>
                )}
                
                {/* Quantity selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <select
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                {/* Price calculation */}
                {selectedTicket && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Tickets ({quantity} x ${selectedTicket.price.toFixed(2)})</span>
                      <span className="text-gray-900 font-semibold">${(selectedTicket.price * quantity).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Booking Fee</span>
                      <span className="text-gray-900 font-semibold">$5.00</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg mt-4 pt-2 border-t border-gray-200">
                      <span>Total</span>
                      <span>${(selectedTicket.price * quantity + 5).toFixed(2)}</span>
                    </div>
                  </div>
                )}
                
                {/* Action button */}
                <Button 
                  className="w-full bg-ticket-purple hover:bg-ticket-darkPurple mt-4 text-lg py-6"
                  onClick={addToCart}
                >
                  Add to Cart
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-2">
                  Tickets are non-refundable. By proceeding, you agree to our <a href="#" className="underline">Terms of Service</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
