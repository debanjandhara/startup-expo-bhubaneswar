import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Success message
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const faqs = [
    {
      question: "When and where is the Startup Bhubaneswar Expo taking place?",
      answer: "The Startup Bhubaneswar Expo 2025 will be held from April 2-5, 2025, at the KIIT Convention Centre, KIIT Road, Patia, Bhubaneswar, Odisha 751024, India."
    },
    {
      question: "How can I register for the event?",
      answer: "You can register through our website by navigating to the Tickets section, selecting your preferred ticket type, filling out the registration form, and completing the payment process."
    },
    {
      question: "What are the different ticket options available?",
      answer: "We offer three ticket types: General Admission (₹1,200 daily/₹4,000 full pass), VIP Package (₹2,500 daily/₹8,000 full pass), and Student Discount (₹800 daily/₹2,800 full pass with valid student ID)."
    },
    {
      question: "Is there a refund policy for tickets?",
      answer: "Yes, tickets can be refunded up to 14 days before the event with a 15% processing fee. Within 14 days of the event, tickets are non-refundable but can be transferred to another attendee."
    },
    {
      question: "How can I become a sponsor or exhibitor?",
      answer: "Please contact our sponsorship team at sponsors@startupexpobhubaneswar.org or fill out the contact form on our website selecting 'Sponsorship Inquiry' as the subject."
    },
    {
      question: "Are there accommodations available near the venue?",
      answer: "Yes, there are several accommodation options near the venue, including KIIT Hospitality (on campus), Trident Hotel, Mayfair Lagoon, and Swosti Premium. We'll be offering special rates for attendees."
    }
  ];

  return (
    <section id="contact" className="section-container">
      <h2 className="section-heading text-center">Contact & FAQ</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h3 className="section-subheading">Get in Touch</h3>
          <p className="text-gray-600 mb-6">
            Have questions about the expo? Fill out the form below and our team will get back to you as soon as possible.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name *</label>
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
            
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
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
            
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-expo-blue"
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Registration Support">Registration Support</option>
                <option value="Sponsorship Inquiry">Sponsorship Inquiry</option>
                <option value="Press & Media">Press & Media</option>
                <option value="Speaker Opportunity">Speaker Opportunity</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-expo-blue"
                required
              ></textarea>
            </div>
            
            <div>
              <button type="submit" className="button-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        {/* FAQ Section */}
        <div>
          <h3 className="section-subheading">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h4 className="font-bold text-expo-blue mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-expo-darkBlue mb-2">Still have questions?</h4>
            <p className="text-gray-600 mb-4">
              If you couldn't find the answer to your question, feel free to contact us directly:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li><span className="font-medium">Email:</span> info@startupexpobhubaneswar.org</li>
              <li><span className="font-medium">Phone:</span> +91 674 2725 XXX</li>
              <li><span className="font-medium">Hours:</span> Monday-Friday, 9:00 AM to 6:00 PM IST</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
