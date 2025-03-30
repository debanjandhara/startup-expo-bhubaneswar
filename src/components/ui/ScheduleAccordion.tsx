
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
  speakers?: string[];
  location?: string;
}

interface ScheduleDay {
  date: string;
  day: string;
  items: ScheduleItem[];
}

interface ScheduleAccordionProps {
  days: ScheduleDay[];
}

const ScheduleAccordion: React.FC<ScheduleAccordionProps> = ({ days }) => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="space-y-4">
      {days.map((day, index) => (
        <div 
          key={index} 
          className={`border rounded-lg overflow-hidden transition-shadow ${
            activeDay === index ? 'shadow-md border-expo-blue' : 'shadow-sm border-gray-200'
          }`}
        >
          <button
            onClick={() => setActiveDay(activeDay === index ? -1 : index)}
            className={`w-full flex items-center justify-between p-4 text-left ${
              activeDay === index ? 'bg-expo-blue text-white' : 'bg-white text-expo-darkBlue hover:bg-gray-50'
            }`}
          >
            <div>
              <h3 className="text-xl font-bold">{day.day}</h3>
              <p className={activeDay === index ? 'text-gray-200' : 'text-gray-500'}>
                {day.date}
              </p>
            </div>
            {activeDay === index ? (
              <ChevronUp className="h-6 w-6" />
            ) : (
              <ChevronDown className="h-6 w-6" />
            )}
          </button>
          
          {activeDay === index && (
            <div className="bg-white p-4 animate-fade-in">
              <ul className="space-y-6">
                {day.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="relative pl-8 border-l-2 border-expo-gold">
                    <div className="absolute top-0 left-0 w-4 h-4 -ml-[9px] bg-white border-2 border-expo-gold rounded-full"></div>
                    <p className="text-expo-blue font-medium">{item.time}</p>
                    <h4 className="text-lg font-bold mt-1">{item.title}</h4>
                    {item.description && (
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    )}
                    {item.speakers && item.speakers.length > 0 && (
                      <p className="text-sm text-gray-500 mt-2">
                        <span className="font-medium">Speakers:</span> {item.speakers.join(', ')}
                      </p>
                    )}
                    {item.location && (
                      <p className="text-sm text-gray-500 mt-1">
                        <span className="font-medium">Location:</span> {item.location}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ScheduleAccordion;
