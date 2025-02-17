'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Instagram, Linkedin } from 'lucide-react'

const facultyCoordinator = {
  name: "Dr. Jane Doe",
  designation: "Faculty Coordinator",
  image: "/faculty-coordinator.jpg",
  testimonial: "The ACM Student Chapter at RBU has been a beacon of innovation and learning. Our students have shown remarkable growth and leadership through their involvement in various ACM activities."
}

const officeBearers = [
  { 
    name: "John Smith", 
    role: "President", 
    image: "https://via.placeholder.com/150", 
    instagram: "john_smith", 
    linkedin: "johnsmith" 
  },
  { 
    name: "Emily Johnson", 
    role: "Vice President", 
    image: "https://via.placeholder.com/150", 
    instagram: "emily_j", 
    linkedin: "emilyjohnson" 
  },
  { 
    name: "Michael Brown", 
    role: "Secretary", 
    image: "https://via.placeholder.com/150", 
    instagram: "michael_brown", 
    linkedin: "michaelbrown" 
  },
  { 
    name: "Sophia Taylor", 
    role: "Treasurer", 
    image: "https://via.placeholder.com/150", 
    instagram: "sophia_t", 
    linkedin: "sophiataylor" 
  },
  { 
    name: "Daniel Garcia", 
    role: "Technical Lead", 
    image: "https://via.placeholder.com/150", 
    instagram: "daniel_g", 
    linkedin: "danielgarcia" 
  },
  { 
    name: "Olivia Martinez", 
    role: "Event Manager", 
    image: "https://via.placeholder.com/150", 
    instagram: "olivia_martinez", 
    linkedin: "oliviamartinez" 
  },
  { 
    name: "William Wilson", 
    role: "Public Relations Officer", 
    image: "https://via.placeholder.com/150", 
    instagram: "william_wilson", 
    linkedin: "williamwilson" 
  },
  { 
    name: "Ava Anderson", 
    role: "Design Head", 
    image: "https://via.placeholder.com/150", 
    instagram: "ava_anderson", 
    linkedin: "avaanderson" 
  },
  { 
    name: "James Thomas", 
    role: "Membership Coordinator", 
    image: "https://via.placeholder.com/150", 
    instagram: "james_t", 
    linkedin: "jamesthomas" 
  },
  { 
    name: "Charlotte Moore", 
    role: "Marketing Head", 
    image: "https://via.placeholder.com/150", 
    instagram: "charlotte_m", 
    linkedin: "charlottemoore" 
  }
];


export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const scrollContainer = document.querySelector('.snap-x');
    if (scrollContainer) {
      const handleScroll = () => {
        const scrollLeft = scrollContainer.scrollLeft;
        const cardWidth = scrollContainer.clientWidth;
        const newActiveIndex = Math.round(scrollLeft / cardWidth);
        setActiveIndex(newActiveIndex);
      };
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="testimonials" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Testimonials
      </h2>
      <div className="max-w-4xl mx-auto mb-16 flex items-center justify-center min-h-[50vh]">
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center p-6">
            <Avatar className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6">
              <AvatarImage src={facultyCoordinator.image} alt={facultyCoordinator.name} />
              <AvatarFallback>{facultyCoordinator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold mb-2">{facultyCoordinator.name}</h3>
              <p className="text-gray-400 mb-4">{facultyCoordinator.designation}</p>
              <p className="italic">&ldquo;{facultyCoordinator.testimonial}&rdquo;</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4">
          {officeBearers.map((bearer, index) => (
            <div key={index} className="snap-center shrink-0 first:pl-4 last:pr-4">
              <Card className="w-64 mx-2 transition-all duration-300 hover:scale-105">
                <CardContent className="p-4">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={bearer.image} alt={bearer.name} />
                    <AvatarFallback>{bearer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold text-center mb-1">{bearer.name}</h3>
                  <p className="text-sm text-gray-400 text-center mb-4">{bearer.role}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={`https://instagram.com/${bearer.instagram}`} target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={`https://linkedin.com/in/${bearer.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">About Our Chapter</h3>
        <p className="max-w-2xl mx-auto text-gray-300">
          The ACM Student Chapter at Ramdeobaba University is dedicated to fostering a vibrant community of tech enthusiasts. We organize workshops, hackathons, and guest lectures to provide our members with hands-on experience and industry insights.
        </p>
      </div>
    </section>
  )
}

