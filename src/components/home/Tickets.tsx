
import React, { useState } from 'react';
import TicketCard from '../ui/TicketCard';
import { useToast } from '@/hooks/use-toast';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Tickets: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    ticketType: '',
    days: 'full'
  });

  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [showDeadlineDialog, setShowDeadlineDialog] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.organization || !selectedTicket) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Show deadline passed dialog instead of processing registration
    setShowDeadlineDialog(true);
  };

  const selectTicket = (type: string) => {
    setSelectedTicket(type);
    setFormData(prev => ({ ...prev, ticketType: type }));
    
    // Scroll to form
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const ticketTypes = [
    {
      title: "General Admission",
      price: {
        daily: "₹1,200",
        fullPass: "₹4,000"
      },
      features: [
        { text: "Access to all general sessions", included: true },
        { text: "Networking opportunities", included: true },
        { text: "Lunch and refreshments", included: true },
        { text: "Exhibition area access", included: true },
        { text: "Workshop participation", included: true },
        { text: "Priority seating", included: false },
        { text: "VIP networking lounge", included: false },
        { text: "Exclusive evening events", included: false }
      ]
    },
    {
      title: "VIP Package",
      price: {
        daily: "₹2,500",
        fullPass: "₹8,000"
      },
      features: [
        { text: "Access to all general sessions", included: true },
        { text: "Networking opportunities", included: true },
        { text: "Lunch and refreshments", included: true },
        { text: "Exhibition area access", included: true },
        { text: "Workshop participation", included: true },
        { text: "Priority seating", included: true },
        { text: "VIP networking lounge", included: true },
        { text: "Exclusive evening events", included: true }
      ],
      recommended: true
    },
    {
      title: "Student Discount",
      price: {
        daily: "₹800",
        fullPass: "₹2,800"
      },
      features: [
        { text: "Access to all general sessions", included: true },
        { text: "Networking opportunities", included: true },
        { text: "Lunch and refreshments", included: true },
        { text: "Exhibition area access", included: true },
        { text: "Workshop participation", included: true },
        { text: "Priority seating", included: false },
        { text: "VIP networking lounge", included: false },
        { text: "Exclusive evening events", included: false },
        { text: "Valid student ID required", included: true }
      ]
    }
  ];

  return (
    <section id="tickets" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Ticketing & Registration</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Secure your spot at Eastern India's premier startup event. Choose the ticket option that best suits your needs and register today.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ticketTypes.map((ticket, index) => (
            <TicketCard
              key={index}
              title={ticket.title}
              price={ticket.price}
              features={ticket.features}
              recommended={ticket.recommended}
              onClick={() => selectTicket(ticket.title)}
            />
          ))}
        </div>
        
        <div id="registration-form" className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-expo-blue">Registration Form</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-expo-blue"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-expo-blue"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="organization" className="block text-gray-700 mb-2">Organization/Company *</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-expo-blue"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Ticket Type *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ticketTypes.map((ticket, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      id={`ticket_${index}`}
                      name="ticketType"
                      value={ticket.title}
                      checked={selectedTicket === ticket.title}
                      onChange={() => selectTicket(ticket.title)}
                      className="mr-2"
                    />
                    <label htmlFor={`ticket_${index}`}>{ticket.title}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Registration Type *</label>
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="full_pass"
                    name="days"
                    value="full"
                    checked={formData.days === 'full'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="full_pass">Full Pass (4 days)</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="daily_pass"
                    name="days"
                    value="daily"
                    checked={formData.days === 'daily'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="daily_pass">Daily Pass</label>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="button-secondary px-8 py-3"
              >
                Complete Registration
              </button>
              <p className="mt-4 text-sm text-gray-500">
                * You will be redirected to a secure payment page after registration.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Deadline Passed Dialog */}
      <AlertDialog open={showDeadlineDialog} onOpenChange={setShowDeadlineDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Registration Deadline Passed</AlertDialogTitle>
            <AlertDialogDescription>
              We're sorry, but the registration deadline for the Startup Expo Bhubaneswar 2025 has passed.
              Please contact us at support@startupexpobhubaneswar.com for any inquiries.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowDeadlineDialog(false)}>
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default Tickets;
