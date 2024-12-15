import React from 'react';
import { Rocket, Calendar, BookOpen, Mic, Users } from 'lucide-react';
import Button from '../ui/Button';
import ArtisticBackground from '../ui/ArtisticBackground';
import ArtisticHeading from '../ui/ArtisticHeading';
import ArtisticFrame from '../ui/ArtisticFrame';

const projects = [
  {
    title: "Gone to the Dogs",
    type: "Mock TEDTalk",
    description: "A hilarious look at healthcare through ZiggyZee's eyes.",
    status: "In Production",
    icon: Mic,
    date: "Summer 2024"
  },
  {
    title: "MS Adventures: Traveling with a Bomb in My Backpack",
    type: "Book",
    description: "A global journey of unexpected plot twists and cosmic humor.",
    status: "Writing",
    icon: BookOpen,
    date: "Fall 2024"
  },
  {
    title: "The Spoonie Chronicles",
    type: "Blog Series",
    description: "Weekly dispatches from the front lines of chronic illness comedy.",
    status: "Planning",
    icon: Calendar,
    date: "Ongoing"
  },
  {
    title: "Laughter as Medicine",
    type: "Speaking Tour",
    description: "Bringing humor to healthcare conferences worldwide.",
    status: "Booking",
    icon: Users,
    date: "2024-2025"
  }
];

const FutureZingers = () => {
  return (
    <section id="future-zingers" className="relative py-16 bg-[#E6E6FA] overflow-hidden">
      <ArtisticBackground variant="miro" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ArtisticHeading
            icon={Rocket}
            title="Future Zingers"
            subtitle="Upcoming projects, collaborations, and cosmic adventures"
            variant="miro"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ArtisticFrame key={index} variant="miro" className="bg-white">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#E6E6FA] text-[#4B0082] rounded-full text-sm">
                    {project.status}
                  </span>
                  <project.icon className="w-6 h-6 text-[#DC143C]" />
                </div>
                <h3 className="text-2xl font-bold text-[#4B0082] mb-2">{project.title}</h3>
                <div className="text-sm text-[#DC143C] mb-4">{project.type}</div>
                <p className="text-[#36454F] mb-6">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#36454F]">Expected: {project.date}</span>
                  <Button variant="secondary">Learn More</Button>
                </div>
              </div>
            </ArtisticFrame>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="primary">
            Get Project Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FutureZingers;