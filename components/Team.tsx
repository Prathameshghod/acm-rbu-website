'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Instagram, Linkedin } from 'lucide-react'

const contributors = [
  {
    name: "Mandar Gurjar",
    domain: "Web Development",
    description: "Frontend enthusiast with a passion for creating beautiful user interfaces.",
    image: "/alice-brown.jpg",
    instagram: "alice_brown",
    linkedin: "alicebrown"
  },
  {
    name: "Vidyasagar Dadilwar",
    domain: "Machine Learning",
    description: "AI researcher focusing on natural language processing and computer vision.",
    image: "/bob-green.jpg",
    instagram: "bob_green",
    linkedin: "bobgreen"
  },
  {
    name: "Mohammad Tailor",
    domain: "Cybersecurity",
    description: "Security analyst dedicated to protecting digital assets and securing networks.",
    image: "/catherine-white.jpg",
    instagram: "catherine_white",
    linkedin: "catherinewhite"
  },
  {
    name: "Prathamesh Ghodmare",
    domain: "Cloud Computing",
    description: "Expert in cloud architecture and scalable distributed systems.",
    image: "/david-smith.jpg",
    instagram: "david_smith",
    linkedin: "davidsmith"
  },
  {
    name: "Pushkar Jadhav",
    domain: "UI/UX Design",
    description: "Creative designer focused on enhancing user experiences through design.",
    image: "/eleanor-johnson.jpg",
    instagram: "eleanor_johnson",
    linkedin: "eleanorjohnson"
  },
  {
    name: "Ramharsh Dandekar",
    domain: "Blockchain Development",
    description: "Blockchain developer passionate about decentralized applications and smart contracts.",
    image: "/frank-thomas.jpg",
    instagram: "frank_thomas",
    linkedin: "frankthomas"
  }
];


export default function Team() {
  return (
    <section id="team" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
        Our Team
      </h2>
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Contributors</h3>
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {contributors.map((contributor, index) => (
            <Card key={index} className="flex-shrink-0 w-64">
              <CardContent className="p-4">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={contributor.image} alt={contributor.name} />
                  <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h4 className="text-lg font-semibold text-center mb-1">{contributor.name}</h4>
                <p className="text-sm text-gray-400 text-center mb-2">{contributor.domain}</p>
                <p className="text-sm text-center mb-4">{contributor.description}</p>
                <div className="flex justify-center space-x-4">
                  <a href={`https://instagram.com/${contributor.instagram}`} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={`https://linkedin.com/in/${contributor.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

