import Link from 'next/link'
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">ACM Student Chapter</h3>
            <p className="text-gray-400">Ramdeobaba University, Nagpur</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link href="#home" className="hover:text-gray-300">Home</Link>
            <Link href="#testimonials" className="hover:text-gray-300">Testimonials</Link>
            <Link href="#events" className="hover:text-gray-300">Events</Link>
            <Link href="#team" className="hover:text-gray-300">Team</Link>
          </nav>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Facebook className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} ACM Student Chapter, Ramdeobaba University. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

