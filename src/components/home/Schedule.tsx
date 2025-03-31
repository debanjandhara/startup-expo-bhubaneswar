import React from 'react';
import ScheduleAccordion from '../ui/ScheduleAccordion';

const Schedule: React.FC = () => {
  const scheduleData = [
    {
      date: "April 2, 2025",
      day: "Day 1",
      items: [
        {
          time: "09:00 AM",
          title: "Registration & Welcome Coffee",
          description: "Check-in at the registration desk and collect your attendee badge",
          location: "Main Entrance Hall"
        },
        {
          time: "10:00 AM",
          title: "Opening Ceremony",
          description: "Keynote address by a government dignitary",
          speakers: ["Chief Minister of Odisha", "Secretary, MSME Department"],
          location: "Main Auditorium"
        },
        {
          time: "12:00 PM",
          title: "Panel Discussion – \"Innovation in Odisha's Digital Future\"",
          description: "Expert panel discussing the roadmap for digital innovation in the state",
          speakers: ["Industry Leaders", "Government Officials", "Startup Founders"],
          location: "Main Auditorium"
        },
        {
          time: "02:00 PM",
          title: "Networking Lunch",
          location: "Grand Banquet Hall"
        },
        {
          time: "03:30 PM",
          title: "Startup Pitches & Workshops",
          description: "Concurrent sessions featuring startup pitches and specialized workshops",
          location: "Multiple Venues"
        },
        {
          time: "06:00 PM",
          title: "Evening Mixer",
          description: "Informal networking opportunity with refreshments",
          location: "Terrace Garden"
        }
      ]
    },
    {
      date: "April 3, 2025",
      day: "Day 2",
      items: [
        {
          time: "09:00 AM",
          title: "Breakfast Briefing",
          location: "Dining Hall"
        },
        {
          time: "10:00 AM",
          title: "Parallel Breakout Sessions",
          description: "Specialized tracks on Fintech, HealthTech, and AgriTech innovations",
          location: "Conference Rooms A, B, and C"
        },
        {
          time: "12:30 PM",
          title: "Lunch & Demo Sessions",
          description: "Product demonstrations during lunch",
          location: "Exhibition Hall"
        },
        {
          time: "03:00 PM",
          title: "Interactive Q&A with Industry Experts",
          description: "Ask your questions to leading experts in their fields",
          speakers: ["Industry Experts", "Venture Capitalists"],
          location: "Main Auditorium"
        },
        {
          time: "05:00 PM",
          title: "VIP Dinner (invite-only)",
          description: "Exclusive networking dinner for VIP ticket holders",
          location: "Rooftop Restaurant"
        }
      ]
    },
    {
      date: "April 4, 2025",
      day: "Day 3",
      items: [
        {
          time: "09:00 AM",
          title: "Keynote & Official Government Address",
          speakers: ["Minister of IT", "Industry Secretary"],
          location: "Main Auditorium"
        },
        {
          time: "10:30 AM",
          title: "Innovation Workshops",
          description: "Hands-on workshops on emerging technologies",
          location: "Multiple Venues"
        },
        {
          time: "01:00 PM",
          title: "Networking Lunch",
          location: "Grand Banquet Hall"
        },
        {
          time: "02:30 PM",
          title: "Startup Exhibitions & Live Demos",
          description: "Showcasing innovative products and services",
          location: "Exhibition Hall"
        },
        {
          time: "05:00 PM",
          title: "Investor Roundtable",
          description: "Connecting startups with potential investors",
          speakers: ["Angel Investors", "VCs", "Investment Firms"],
          location: "Conference Room A"
        }
      ]
    },
    {
      date: "April 5, 2025",
      day: "Day 4",
      items: [
        {
          time: "09:00 AM",
          title: "Final Pitch Sessions",
          description: "Selected startups compete for grand prizes",
          location: "Main Auditorium"
        },
        {
          time: "11:00 AM",
          title: "Award Ceremony",
          description: "Recognition of outstanding startups and innovators",
          speakers: ["Chief Guest", "Panel of Judges"],
          location: "Main Auditorium"
        },
        {
          time: "12:30 PM",
          title: "Closing Remarks",
          location: "Main Auditorium"
        },
        {
          time: "01:30 PM",
          title: "Farewell Lunch & Networking",
          description: "Final opportunity to connect with fellow attendees",
          location: "Grand Banquet Hall"
        }
      ]
    }
  ];

  return (
    <section id="schedule" className="section-container">
      <h2 className="section-heading text-center">Event Schedule</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Four days of insightful sessions, networking opportunities, workshops, and more. Plan your expo experience with our comprehensive schedule.
      </p>
      
      <div className="mt-10">
        <ScheduleAccordion days={scheduleData} />
      </div>
    </section>
  );
};

export default Schedule;
