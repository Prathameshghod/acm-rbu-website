'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Instagram, Linkedin } from 'lucide-react'

const facultyCoordinator = {
  name: "Dr. Jane Doe",
  designation: "Faculty Coordinator",
  image: "/faculty-coordinator.jpg",
  testimonial: "The ACM Student Chapter at RBU has been a beacon of innovation and learning. Our students have shown remarkable growth and leadership through their involvement in various ACM activities."
}

// Type for office bearer
type OfficeBearer = {
  name: string;
  role: string;
  image: string;
  instagram: string;
  linkedin: string;
  team: string;
};

// Add a "team" property to each officeBearer for grouping
const officeBearers: OfficeBearer[] = [
  { name: "Vaibhav Singhavi", role: "President", image: "/testimonials/vaibhav.jpg", instagram:"singhavivaibhav", linkedin: "vaibhav-singhavi-6a1a2028b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", team: "Core Committee" },
  { name: "Khushi Paldiwal", role: "Vice President", image: "/testimonials/khushi_paldiwal.jpg", instagram: "emily_j", linkedin: "emilyjohnson", team: "Core Committee" },
  { name: "Kirti Mishra", role: "Secretary", image: "https://via.placeholder.com/150", instagram: "michael_brown", linkedin: "michaelbrown", team: "Core Committee" },
  { name: "Harshita Bhandari", role: "Joint Secretary", image: "https://via.placeholder.com/150", instagram: "michael_brown", linkedin: "michaelbrown", team: "Core Committee" },
  { name: "Palak Singh", role: "Treasurer", image: "/testimonials/palak.png", instagram: "sophia_t", linkedin: "sophiataylor", team: "Core Committee" },
  { name: "Pooja Jaiswal", role: "Training and Hospitality Head", image: "https://via.placeholder.com/150", instagram: "james_t", linkedin: "jamesthomas", team: "Core Committee" },
  { name: "Aarsh Gangulwar", role: "Joint Training and Hospitality Head", image: "https://via.placeholder.com/150", instagram: "james_t", linkedin: "jamesthomas", team: "Core Committee" },
  { name: "Tanmay Sayare", role: "Student Developer Head", image: "https://via.placeholder.com/150", instagram: "james_t", linkedin: "jamesthomas", team: "Core Committee" },
  { name: "Jagriti Sharma", role: "Joint Student Developer Head", image: "/testimonials/JagritiSharma.png", instagram: "james_t", linkedin: "jamesthomas", team: "Core Committee" },

  { name: "Mandar Gurjar", role: "Technical Lead", image: "/testimonials/mandar.png", instagram: "william_wilson", linkedin: "williamwilson", team: "Technical" },
  { name: "Vidyasagar Dadilwar", role: "Joint Technical Lead", image: "https://via.placeholder.com/150", instagram: "ava_anderson", linkedin: "avaanderson", team: "Technical" },
  { name: "Mohammad Tailor", role: "Member", image: "https://via.placeholder.com/150", instagram: "ava_anderson", linkedin: "avaanderson", team: "Technical" },
  { name: "Prathamesh Ghodmare", role: "Member", image: "https://via.placeholder.com/150", instagram: "ava_anderson", linkedin: "avaanderson", team: "Technical" },
  { name: "Pushkar Jadhav", role: "Member", image: "https://via.placeholder.com/150", instagram: "ava_anderson", linkedin: "avaanderson", team: "Technical" },
  { name: "Ramharsh Dandekar", role: "Member", image: "/testimonials/ramharsh.jpg", instagram: "ava_anderson", linkedin: "avaanderson", team: "Technical" },

  { name: "Sarang Deshpnde", role: "Event head and Web Master", image: "https://via.placeholder.com/150", instagram: "daniel_g", linkedin: "danielgarcia", team: "Event" },
  { name: "Dnyanesh Radke", role: "Joint Event head", image: "/testimonials/Dnyanesh.png", instagram: "olivia_martinez", linkedin: "oliviamartinez", team: "Event" },
  { name: "Devyansh Patle", role: "Member", image: "https://via.placeholder.com/150", instagram: "olivia_martinez", linkedin: "oliviamartinez", team: "Event" },
  { name: "Sarthak Rathi", role: "Member", image: "/testimonials/Sarthak_Rathi.png", instagram: "olivia_martinez", linkedin: "oliviamartinez", team: "Event" },
  { name: "Soumya Dhole", role: "Member", image: "https://via.placeholder.com/150", instagram: "olivia_martinez", linkedin: "oliviamartinez", team: "Event" },
  { name: "Vinayak Mishra", role: "Member", image: "https://via.placeholder.com/150", instagram: "olivia_martinez", linkedin: "oliviamartinez", team: "Event" },
 
  { name: "Emaan Javed", role: "Graphics Designer Lead", image: "https://via.placeholder.com/150", instagram: "james_t", linkedin: "jamesthomas", team: "Graphics" },
  { name: "Pranay Mantri", role: "Joint Graphics Designer Lead", image: "/testimonials/Pranay.png", instagram: "charlotte_m", linkedin: "charlottemoore", team: "Graphics" },
  { name: "Anuj Parwal", role: "Member", image: "/testimonials/Anuj_Parwal.png", instagram: "charlotte_m", linkedin: "charlottemoore", team: "Graphics" },
  { name: "Harshita Agrawal", role: "Member", image: "/testimonials/Harshita_Agrawal.png", instagram: "charlotte_m", linkedin: "charlottemoore", team: "Graphics" },
  { name: "Preet Mahadule", role: "Member", image: "https://via.placeholder.com/150", instagram: "charlotte_m", linkedin: "charlottemoore", team: "Graphics" },
  { name: "Yash  Dhayal", role: "Member", image: "/testimonials/YashDhayal.png", instagram: "charlotte_m", linkedin: "charlottemoore", team: "Graphics" },

  { name: "Nachiket Deshpande", role: "Associate Editor", image: "/testimonials/Nachiket.png", instagram: "james_t", linkedin: "jamesthomas", team: "Photography and Content" },
  { name: "Anish Hedau", role: "Member", image: "https://via.placeholder.com/150", instagram: "james_t", linkedin: "jamesthomas", team: "Photography and Content" },
  { name: "Gaurav Mantri", role: "Member", image: "https://via.placeholder.com/150", instagram: "james_t", linkedin: "jamesthomas", team: "Photography and Content" },
  { name: "Arya Shamka", role: "Member", image: "/testimonials/Arya_Shamka.png", instagram: "james_t", linkedin: "jamesthomas", team: "Photography and Content" },
  { name: "Nishi Singh", role: "Member", image: "/testimonials/nishi.jpg", instagram: "james_t", linkedin: "jamesthomas", team: "Photography and Content" },
  { name: "Priyal Khandelwal", role: "Member", image: "/testimonials/Priyal_Khandelwal.png", instagram: "james_t", linkedin: "jamesthomas", team: "Photography and Content" },

  { name: "Saana Dhabekar", role: "Publicity Head", image: "/testimonials/Saana.png", instagram: "james_t", linkedin: "jamesthomas", team: "Publicity" },
  { name: "Aditya Gugnani", role: "Joint Publicity Head", image: "https://via.placeholder.com/150", instagram: "james_t", linkedin: "jamesthomas", team: "Publicity" },  
  { name: "Ansh Chopda", role: "Member", image: "https://via.placeholder.com/150", instagram: "james_t", linkedin: "jamesthomas", team: "Publicity" },  
  { name: "Siddhi Gagan", role: "Member", image: "/testimonials/Siddhi_Gangan.png", instagram: "james_t", linkedin: "jamesthomas", team: "Publicity" },  
  { name: "Swapnil Patil", role: "Member", image: "https://via.placeholder.com/150", instagram: "james_t", linkedin: "jamesthomas", team: "Publicity" },  
  { name: "Tanmay Gaikwad", role: "Member", image: "https://via.placeholder.com/150", instagram: "james_t", linkedin: "jamesthomas", team: "Publicity" },

  
  { name: "Juveria Mahreen", role: "Digital Media Head", image: "https://via.placeholder.com/150", instagram: "james_t", linkedin: "jamesthomas", team: "Social Media" },
  { name: "Rainee Jain", role: "Joint Digital media head", image: "https://via.placeholder.com/150", instagram: "james_t", linkedin: "jamesthomas", team: "Social Media" },
  { name: "Himani Goenka", role: "Member", image: "https://via.placeholder.com/150", instagram: "james_t", linkedin: "jamesthomas", team: "Social Media" },
  { name: "Om charjan", role: "Member", image: "https://via.placeholder.com/150", instagram: "james_t", linkedin: "jamesthomas", team: "Social Media" }
 
];

// Group by new compartments
const compartments = [
  {
    name: "Core Committee",
    tag: "@CoreCommittee",
    filter: (member: OfficeBearer) => member.team === "Core Committee",
  },
  {
    name: "Technical",
    tag: "@Technical",
   filter: (member: OfficeBearer) => member.team === "Technical",
  },
  {
    name: "Event",
    tag: "@Event",
    filter: (member: OfficeBearer) => member.team === "Event"
  },
  {
    name: "Graphics",
    tag: "@Graphics",
    filter: (member: OfficeBearer) => member.team === "Graphics",
  },
  
  {
    name: "Photography and Content",
    tag: "@PhotographyandContent",
    filter: (member: OfficeBearer) => member.team === "Photography and Content",
  },
  {
    name: "Publicity",
    tag: "@Publicity",
   filter: (member: OfficeBearer) => member.team === "Publicity",
  },
  {
    name: "Social Media",
    tag: "@SocialMedia",
    filter: (member: OfficeBearer) => member.team === "Social Media",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Testimonials
      </h2>
      <div className="max-w-4xl mx-auto mb-16 flex items-center justify-center min-h-[50vh]">
        <Card className="bg-[#18181b] text-white rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_19px_rgba(168,85,247,0.9)] hover:z-10">
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

      {/* Compartment Sections */}
      {compartments.map((comp, idx) => {
        const members = officeBearers.filter(comp.filter);
        if (members.length === 0) return null;
        return (
          <div key={idx} className="mb-12">
            <div className="flex items-center mb-2">
              <div
                className="bg-gradient-to-b from-teal-400 to-cyan-700 text-white rounded-2xl px-8 py-6 min-w-[220px] flex flex-col items-start mr-8 shadow-lg"
                style={{ marginTop: "16px", marginBottom: "16px" }}
              >
                <span className="font-bold text-lg">
                  {comp.name === "Photography and Content" ? (
                    <>
                      Photography <br /> and Content 
                    </>
                  ) : comp.name === "Content and Social Media" ? (
                    <>
                      Content <br /> and Social Media
                    </>
                  ) : (
                    comp.name
                  )}
                </span>
                <span className="text-xs opacity-80">{comp.tag}</span>
              </div>
              {/* Horizontal scroll for all compartments */}
              <div
                className="flex-1 overflow-x-auto overflow-y-hidden py-16 pl-24 pr-16"
                style={{ overflow: "auto" }}
              >
                <div className="flex space-x-4">
                  {members.map((bearer: OfficeBearer, index: number) => (
                    <Card
                      key={index}
                      className="w-48 h-64 flex-shrink-0 flex flex-col items-center justify-center bg-[#18181b] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_35px_17px_rgba(0,255,255,0.5)] hover:z-10"
                    >
                      <CardContent className="flex flex-col items-center pt-6">
                        <Avatar className="w-20 h-20 mb-4">
                          <AvatarImage src={bearer.image} alt={bearer.name} />
                          <AvatarFallback>
                            {bearer.name.split(' ').map((n: string) => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-semibold text-center">{bearer.name}</h3>
                        <p className="text-sm text-gray-400 text-center">{bearer.role}</p>
                        <div className="flex justify-center space-x-4 mt-2">
                          <a href={`https://instagram.com/${bearer.instagram}`} target="_blank" rel="noopener noreferrer">
                            <Instagram className="w-5 h-5" />
                          </a>
                          <a href={`https://linkedin.com/in/${bearer.linkedin}`} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            <hr className="my-4 border-gray-700" />
          </div>
        );
      })}

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">About Our Chapter</h3>
        <p className="max-w-2xl mx-auto text-gray-300">
          The ACM Student Chapter at Ramdeobaba University is dedicated to fostering a vibrant community of tech enthusiasts. We organize workshops, hackathons, and guest lectures to provide our members with hands-on experience and industry insights.
        </p>
      </div>
    </section>
  )
}

