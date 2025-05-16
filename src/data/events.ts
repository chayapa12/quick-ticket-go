
import { Event } from '@/lib/types';

export const events: Event[] = [
  {
    id: "1",
    name: "Summer Music Festival",
    date: "2025-07-15",
    time: "14:00",
    venue: "Central Park",
    address: "Central Park, New York, NY 10022",
    description: "Join us for the biggest summer music festival featuring top artists from around the world. Experience live performances across multiple stages, delicious food stalls, interactive art installations, and much more in this day-long celebration of music and culture. Don't miss the headliners performing as the sun sets!",
    shortDescription: "Annual music festival featuring top artists from around the world.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop",
    price: 89.99,
    category: "Music",
    featured: true,
    ticketTypes: [
      {
        id: "1-1",
        name: "General Admission",
        price: 89.99,
        description: "Standard entry to all stages and areas",
        available: 5000
      },
      {
        id: "1-2",
        name: "VIP Access",
        price: 199.99,
        description: "Priority entry, exclusive lounge access, complimentary refreshments",
        available: 500
      }
    ]
  },
  {
    id: "2",
    name: "Tech Conference 2025",
    date: "2025-09-22",
    time: "09:00",
    venue: "Convention Center",
    address: "123 Main St, San Francisco, CA 94103",
    description: "The premier tech conference for developers, entrepreneurs, and tech enthusiasts. Featuring keynotes from industry leaders, hands-on workshops, networking opportunities, and demonstrations of cutting-edge technologies. Learn about the latest trends in AI, blockchain, cloud computing, and more from the experts shaping the future of tech.",
    shortDescription: "Leading technology conference with keynotes from industry experts.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    price: 299.99,
    category: "Conference",
    featured: true,
    ticketTypes: [
      {
        id: "2-1",
        name: "Standard Pass",
        price: 299.99,
        description: "Access to all keynotes and expo hall",
        available: 2000
      },
      {
        id: "2-2",
        name: "Premium Pass",
        price: 499.99,
        description: "Standard pass plus access to workshops and networking events",
        available: 1000
      },
      {
        id: "2-3",
        name: "Executive Pass",
        price: 999.99,
        description: "All-access pass including private meetups with speakers",
        available: 100
      }
    ]
  },
  {
    id: "3",
    name: "Broadway Show: Hamilton",
    date: "2025-08-05",
    time: "19:30",
    venue: "Imperial Theatre",
    address: "249 W 45th St, New York, NY 10036",
    description: "Experience the award-winning musical that has taken the world by storm. This revolutionary tale of America's fiery founding father Alexander Hamilton features a score that blends hip-hop, jazz, R&B, and Broadway. Don't miss this once-in-a-lifetime theatrical experience that has transformed the way we think about American history and musicals.",
    shortDescription: "Award-winning musical about Alexander Hamilton's life.",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=2071&auto=format&fit=crop",
    price: 149.99,
    category: "Theatre",
    featured: false,
    ticketTypes: [
      {
        id: "3-1",
        name: "Balcony",
        price: 149.99,
        description: "Upper level seating",
        available: 300
      },
      {
        id: "3-2",
        name: "Mezzanine",
        price: 199.99,
        description: "Mid-level seating with excellent views",
        available: 200
      },
      {
        id: "3-3",
        name: "Orchestra",
        price: 299.99,
        description: "Premium floor seating closest to the stage",
        available: 150
      }
    ]
  },
  {
    id: "4",
    name: "Food & Wine Festival",
    date: "2025-06-18",
    time: "12:00",
    venue: "Waterfront Park",
    address: "200 Harbor Dr, San Diego, CA 92101",
    description: "Indulge in a culinary adventure featuring local and international chefs, wineries, and food artisans. Sample exquisite dishes, participate in cooking demonstrations, attend wine tastings, and meet celebrity chefs. This gastronomic celebration showcases diverse cuisines and the finest wines from around the world in a beautiful waterfront setting.",
    shortDescription: "Culinary celebration featuring top chefs and wineries.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
    price: 75.00,
    category: "Food & Drink",
    featured: true,
    ticketTypes: [
      {
        id: "4-1",
        name: "General Entry",
        price: 75.00,
        description: "Access to all food stalls and entertainment",
        available: 3000
      },
      {
        id: "4-2",
        name: "Gourmet Package",
        price: 150.00,
        description: "General entry plus exclusive tastings and chef meetups",
        available: 500
      }
    ]
  },
  {
    id: "5",
    name: "Marathon City Run",
    date: "2025-10-10",
    time: "07:00",
    venue: "City Center",
    address: "Downtown Chicago, IL 60601",
    description: "Challenge yourself in this annual city marathon through scenic urban landscapes and historic neighborhoods. With options for full marathon, half marathon, and 10K distances, there's something for runners of all levels. The route features iconic city landmarks, live entertainment along the way, and cheerful crowds to keep you motivated throughout your run.",
    shortDescription: "Annual marathon through the scenic streets of the city.",
    image: "https://images.unsplash.com/photo-1530137073411-2f98650efd5b?q=80&w=2070&auto=format&fit=crop",
    price: 50.00,
    category: "Sports",
    featured: false,
    ticketTypes: [
      {
        id: "5-1",
        name: "10K Race",
        price: 50.00,
        description: "Registration for the 10K race",
        available: 5000
      },
      {
        id: "5-2",
        name: "Half Marathon",
        price: 75.00,
        description: "Registration for the half marathon",
        available: 3000
      },
      {
        id: "5-3",
        name: "Full Marathon",
        price: 100.00,
        description: "Registration for the full marathon",
        available: 2000
      }
    ]
  },
  {
    id: "6",
    name: "Comic Con",
    date: "2025-07-25",
    time: "10:00",
    venue: "Expo Center",
    address: "111 Convention Way, Seattle, WA 98101",
    description: "The ultimate fan experience for comics, sci-fi, fantasy, and pop culture enthusiasts. Meet your favorite actors and comic creators, attend panel discussions, browse exclusive merchandise, and participate in cosplay contests. With special screenings, gaming zones, and interactive exhibits, this is the perfect event for fans of all ages to celebrate their favorite fandoms.",
    shortDescription: "Pop culture convention featuring celebrities, cosplay, and merchandise.",
    image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?q=80&w=2080&auto=format&fit=crop",
    price: 65.00,
    category: "Entertainment",
    featured: false,
    ticketTypes: [
      {
        id: "6-1",
        name: "Day Pass",
        price: 65.00,
        description: "Single day admission",
        available: 10000
      },
      {
        id: "6-2",
        name: "Weekend Pass",
        price: 120.00,
        description: "Full weekend admission (Saturday and Sunday)",
        available: 5000
      }
    ]
  },
  {
    id: "7",
    name: "Art Gallery Opening",
    date: "2025-08-12",
    time: "18:00",
    venue: "Modern Art Museum",
    address: "1234 Gallery Blvd, Miami, FL 33101",
    description: "Be among the first to experience this groundbreaking exhibition featuring contemporary artists from around the world. The opening night includes guided tours by curators, artist talks, live music, and a champagne reception. This collection challenges conventional perspectives through innovative uses of different media, technology, and interactive installations.",
    shortDescription: "Exclusive opening night for new contemporary art exhibition.",
    image: "https://images.unsplash.com/photo-1594794312433-05a69301bca7?q=80&w=2070&auto=format&fit=crop",
    price: 45.00,
    category: "Arts",
    featured: false,
    ticketTypes: [
      {
        id: "7-1",
        name: "Opening Night",
        price: 45.00,
        description: "Special opening night with reception",
        available: 300
      }
    ]
  },
  {
    id: "8",
    name: "Business Leadership Summit",
    date: "2025-09-15",
    time: "08:30",
    venue: "Grand Hotel Conference Center",
    address: "500 Hotel Plaza, Boston, MA 02110",
    description: "A premier gathering for executives, entrepreneurs, and business leaders to discuss current challenges and future opportunities. The summit features keynote speeches from Fortune 500 CEOs, interactive panel discussions, and focused workshops on innovation, digital transformation, sustainable business practices, and effective leadership strategies in the modern marketplace.",
    shortDescription: "Executive conference for business leaders and entrepreneurs.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop",
    price: 399.99,
    category: "Business",
    featured: true,
    ticketTypes: [
      {
        id: "8-1",
        name: "Standard Registration",
        price: 399.99,
        description: "Access to all summit sessions",
        available: 1000
      },
      {
        id: "8-2",
        name: "Executive Package",
        price: 899.99,
        description: "Summit access plus exclusive executive roundtables",
        available: 200
      }
    ]
  },
  {
    id: "9",
    name: "Jazz Night",
    date: "2025-06-30",
    time: "20:00",
    venue: "Blue Note Club",
    address: "131 W 3rd St, New York, NY 10012",
    description: "An intimate evening featuring world-class jazz musicians performing classic standards and original compositions. The candlelit venue provides the perfect atmosphere to enjoy the improvisational magic of live jazz, with premium acoustics that capture every nuance of the performance. A selection of craft cocktails and gourmet appetizers will be available throughout the night.",
    shortDescription: "Intimate evening of live jazz performances in a historic club.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop",
    price: 55.00,
    category: "Music",
    featured: false,
    ticketTypes: [
      {
        id: "9-1",
        name: "Standard Seating",
        price: 55.00,
        description: "General admission seating",
        available: 150
      },
      {
        id: "9-2",
        name: "Premium Table",
        price: 85.00,
        description: "Front section table seating",
        available: 50
      }
    ]
  },
  {
    id: "10",
    name: "Wellness Retreat",
    date: "2025-11-05",
    time: "09:00",
    venue: "Mountain View Resort",
    address: "1000 Tranquility Road, Aspen, CO 81611",
    description: "Escape the daily grind with this three-day wellness retreat in a serene mountain setting. The program includes yoga and meditation sessions, nutritional workshops, guided nature hikes, and spa treatments. Expert wellness coaches will provide personalized advice on maintaining balance in your life, while the peaceful surroundings offer the perfect backdrop for relaxation and rejuvenation.",
    shortDescription: "Three-day retreat focusing on mind and body wellness.",
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=2071&auto=format&fit=crop",
    price: 599.99,
    category: "Wellness",
    featured: false,
    ticketTypes: [
      {
        id: "10-1",
        name: "Retreat Package",
        price: 599.99,
        description: "Full access to all wellness activities",
        available: 100
      },
      {
        id: "10-2",
        name: "Premium Package",
        price: 899.99,
        description: "Retreat package plus private coaching and spa treatments",
        available: 30
      }
    ]
  }
];

// Helper function to get event by ID
export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id);
};

// Helper function to get featured events
export const getFeaturedEvents = (): Event[] => {
  return events.filter(event => event.featured);
};
