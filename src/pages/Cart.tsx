
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { calculateTotal } from "@/lib/utils";
import { CartItem } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, we would get the cart from a global state or context
    // For demo purposes, we'll retrieve it from localStorage
    const cartJSON = localStorage.getItem('cart');
    if (cartJSON) {
      try {
        const parsedCart = JSON.parse(cartJSON);
        setCartItems(parsedCart);
      } catch (error) {
        console.error("Error parsing cart data:", error);
        setCartItems([]);
      }
    }
    setLoading(false);
  }, []);

  const removeItem = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
    });
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
  };

  const proceedToCheckout = () => {
    // In a real app, we would process the payment
    // For demo purposes, we'll just redirect to the confirmation page
    localStorage.setItem('bookingDetails', JSON.stringify({
      items: cartItems,
      total: calculateTotal(cartItems) + 5, // Adding $5 booking fee
      date: new Date().toISOString()
    }));
    
    // Clear cart
    localStorage.removeItem('cart');
    
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          
          {loading ? (
            <div className="text-center py-12">
              <p>Loading your cart...</p>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added any tickets to your cart yet.</p>
              <Link to="/events">
                <Button>Browse Events</Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="lg:w-2/3">
                {cartItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 mb-4 flex flex-col sm:flex-row">
                    <div className="flex-grow mb-4 sm:mb-0">
                      <h3 className="font-semibold text-lg">{item.eventName}</h3>
                      <p className="text-gray-600">{item.ticketTypeName}</p>
                      <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)} each</p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <button 
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                        >
                          -
                        </button>
                        <div className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
                          {item.quantity}
                        </div>
                        <button 
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="font-semibold w-20 text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      
                      <button 
                        className="text-gray-500 hover:text-red-600 p-1"
                        onClick={() => removeItem(index)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Order Summary */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${calculateTotal(cartItems).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Booking Fee</span>
                      <span>$5.00</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${(calculateTotal(cartItems) + 5).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-ticket-purple hover:bg-ticket-darkPurple text-lg py-6"
                    onClick={proceedToCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <div className="mt-4 text-center">
                    <Link to="/events" className="text-ticket-purple hover:text-ticket-darkPurple text-sm">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
