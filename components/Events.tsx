'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const recentEvents = [
  {
    name: "AI Workshop",
    speaker: "Dr. Alan Turing",
    description: "An interactive workshop on the latest AI technologies and their applications.",
    image: "https://via.placeholder.com/150" // Placeholder image
  },
  {
    name: "Hackathon 2023",
    speaker: "Organized by ACM RBU",
    description: "A 24-hour coding marathon to solve real-world problems.",
    image: "https://via.placeholder.com/150" // Placeholder image
  },
  {
    name: "Web Dev Bootcamp",
    speaker: "Jane Doe",
    description: "A comprehensive bootcamp covering modern web development technologies.",
    image: "https://via.placeholder.com/150" // Placeholder image
  }
];

const pastEvents = [
  {
    name: "Data Science Seminar",
    speaker: "Dr. Emily Roberts",
    description: "Insights into the world of data analytics and machine learning.",
    image: "/testimonials/vaibhav.jpg" // Placeholder image
  },
  {
    name: "Cloud Computing Webinar",
    speaker: "Mr. John Cloud",
    description: "Understanding cloud services and how to leverage them effectively.",
    image: "https://via.placeholder.com/150" // Placeholder image
  },
  {
    name: "Cybersecurity Talk",
    speaker: "Prof. Marcus Knight",
    description: "Exploring best practices to secure digital assets.",
    image: "https://via.placeholder.com/150" // Placeholder image
  },
  {
    name: "Blockchain Summit",
    speaker: "Dr. Alice Cooper",
    description: "Demystifying blockchain technology and its applications.",
    image: "https://via.placeholder.com/150" // Placeholder image
  },
  {
    name: "UI/UX Design Workshop",
    speaker: "Sarah Thompson",
    description: "Improving user experience with modern design principles.",
    image: "https://via.placeholder.com/150" // Placeholder image
  },
  {
    name: "Competitive Programming Contest",
    speaker: "Hosted by ACM RBU",
    description: "Test your problem-solving skills in a competitive environment.",
    image: "https://via.placeholder.com/150" // Placeholder image
  },
  {
    name: "IoT Hackathon",
    speaker: "Organized by ACM RBU",
    description: "Innovative ideas for building smart IoT solutions.",
    image: "https://via.placeholder.com/150" // Placeholder image
  },
  {
    name: "Cloud Security Symposium",
    speaker: "Dr. Lisa Carter",
    description: "Discussing emerging challenges in cloud security and solutions.",
    image: "https://via.placeholder.com/150" // Placeholder image
  },
  {
    name: "Game Development Hackathon",
    speaker: "Jake Taylor",
    description: "Building fun and engaging games using Unity and Unreal Engine.",
    image: "https://via.placeholder.com/150" // Placeholder image
  },
  {
    name: "Robotics Challenge",
    speaker: "Hosted by ACM RBU",
    description: "Showcasing innovative robotic designs in a competitive event.",
    image: "https://via.placeholder.com/150" // Placeholder image
  }
];


export default function Events() {
  const [activeEvent] = useState(0);

  return (
    <section id="events" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
        Events
      </h2>
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-6">Recent Events</h3>
        <div className="space-y-8">
          {recentEvents.map((event, index) => (
            <Card key={index} className={`transition-all duration-300 ${index === activeEvent ? 'scale-105' : 'scale-100'}`}>
              <CardContent className="p-6 flex flex-col md:flex-row items-center">
                <img src={event.image} alt={event.name} className="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">{event.name}</h4>
                  <p className="text-gray-400 mb-2">Speaker: {event.speaker}</p>
                  <p>{event.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Past Events</h3>
        <Carousel>
          <CarouselContent>
            {pastEvents.map((event, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-96 flex flex-col">
                  <CardContent className="p-4 flex flex-col h-full">
                    <img src={event.image} alt={event.name} className="w-full h-60 object-cover rounded-lg mb-3" />
                    <div className="flex flex-col flex-1 justify-end">
                      <h4 className="text-lg font-semibold mb-2">{event.name}</h4>
                      <p className="text-gray-400 mb-2">Speaker: {event.speaker}</p>
                      <p className="text-sm">{event.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 md:translate-x-0 md:left-4 lg:left-6 md:top-1/2 md:-translate-y-1/2 sm:-translate-x-[60px]" />
          <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 md:translate-x-0 md:right-4 lg:right-6 sm:translate-x-[60px]" />
        </Carousel>
      </div>
    </section>
  )
}

