
import { Event } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "@/lib/utils";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  // Format the date to display as "Jan 15, 2025"
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="ticket-card flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-ticket-purple text-white text-sm font-semibold px-3 py-1 m-2 rounded">
          ${event.price.toFixed(2)}+
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="font-bold text-lg mb-2 text-gray-900">{event.name}</h3>
          
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <CalendarDays size={16} className="mr-1 text-ticket-purple" />
            <span>{formattedDate} at {event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <MapPin size={16} className="mr-1 text-ticket-purple" />
            <span>{event.venue}</span>
          </div>
          
          <p className="text-sm text-gray-700 mb-4">{event.shortDescription}</p>
        </div>
        
        <Link to={`/events/${event.id}`}>
          <Button className="w-full bg-ticket-purple hover:bg-ticket-darkPurple text-white">
            View Event
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
