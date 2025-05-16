
export interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  description: string;
  shortDescription: string;
  image: string;
  price: number;
  category: string;
  featured: boolean;
  ticketTypes: TicketType[];
}

export interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
  available: number;
}

export interface CartItem {
  eventId: string;
  eventName: string;
  ticketTypeId: string;
  ticketTypeName: string;
  quantity: number;
  price: number;
}

export interface Booking {
  id: string;
  userId: string;
  date: string;
  items: CartItem[];
  total: number;
}
