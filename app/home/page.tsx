"use client";
// pages/index.js
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-pink-500 text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold">Eventick</div>
        
        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav className={`space-x-8 lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <Link href="#Schedule">Schedule</Link>
          <Link href="/ticket">Ticket</Link>
          <Link href="#Contact">Contact</Link>
          <Link href="/login">
            <button className="border border-white px-4 py-1 rounded-full mt-4 lg:mt-0">LOGIN</button>
          </Link>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left mt-12 lg:mt-24 px-8">
        {/* Image on the left */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image src="/pg1.png" alt="Event Image" width={500} height={500} /> {/* Replace with correct image path */}
        </div>

        {/* Text on the right */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <h1 className="text-4xl font-extrabold">MTV The K.pop Show Ticket Package</h1>
          <p className="mt-4 text-lg max-w-md">
            Look no further! Our MTV The Show tickets are the simplest way for you to experience a live Kpop recording.
          </p>
          <div className="mt-6 space-x-4">
            <Link href="/ticket">
              <button className="bg-pink-500 px-6 py-3 rounded-full text-white font-semibold">Get Ticket</button>
            </Link>
            <button className="border border-white px-6 py-3 rounded-full text-white font-semibold">Learn More</button>
          </div>
        </div>
      </main>

      {/* Centered Search Event Section */}
      <div className="flex justify-center mt-12">
        <div className="bg-indigo-900 w-full max-w-4xl py-8 rounded-xl text-center text-white">
          <div className="flex justify-around">
            <div className="flex flex-col">
              <label className="text-gray-400">Search Event</label>
              <input type="text" value="Konser Jazz" className="bg-transparent border-b-2 text-center focus:outline-none"  />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400">Place</label>
              <input type="text" value="Tanzania" className="bg-transparent border-b-2 text-center focus:outline-none"  />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400">Time</label>
              <input type="text" value="Any date" className="bg-transparent border-b-2 text-center focus:outline-none"  />
            </div>
          </div>
        </div>
      </div>

      <section id="Schedule" className="bg-white text-black px-8 py-12 mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">Upcoming Events</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-200">Weekdays</button>
          <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-200">Event Type</button>
          <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-200">Any Category</button>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src="/pg2.png" alt="Event 1" width={400} height={200} /> {/* Replace with actual image path */}
            <div className="p-4">
              <p className="text-xs text-gray-400">APR</p>
              <h3 className="font-semibold text-lg">Wonder Girls 2010 Wonder Girls World Tour San Francisco</h3>
              <p className="text-sm text-gray-500 mt-2">We’ll get you directly seated and inside for you to enjoy the show.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src="/pgg2.png" alt="Event 2" width={400} height={200} />
            <div className="p-4">
              <p className="text-xs text-gray-400">AUG</p>
              <h3 className="font-semibold text-lg">JYJ 2011 Worldwide Concert Barcelona</h3>
              <p className="text-sm text-gray-500 mt-2">Directly seated and inside for you to enjoy the show.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src="/pggg2.png" alt="Event 3" width={400} height={200} />
            <div className="p-4">
              <p className="text-xs text-gray-400">SEP</p>
              <h3 className="font-semibold text-lg">2011 Super Junior SM Town Live '10 World Tour New York City</h3>
              <p className="text-sm text-gray-500 mt-2">Directly seated and inside for you to enjoy the show.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Make Your Own Event Section */}
      <section className="flex justify-center items-center py-12 mt-12">
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-xl shadow-md p-8 max-w-5xl">
          {/* Left Image */}
          <div className="lg:w-1/2 flex justify-center">
            <Image src="/image3.png" alt="Make Your Own Event" width={300} height={300} />
          </div>

          {/* Right Text */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-black">Make your own Event</h2>
            <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link href="/event">
              <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full font-semibold">Create Event</button>
            </Link>
          </div>
        </div>
      </section>

      <footer id='Contact' className="bg-blue-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20 px-6">
        
        {/* Logo and Description */}
        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4">
            Event<span className="text-pink-500">tick</span>
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Eventick is a global self-service ticketing platform for live experiences that allows anyone to create,
            share, find and attend events that fuel their passions and enrich their lives.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="bg-white text-blue-900 p-2 rounded-full hover:bg-pink-500 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="bg-white text-blue-900 p-2 rounded-full hover:bg-pink-500 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="bg-white text-blue-900 p-2 rounded-full hover:bg-pink-500 hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Plan Events Links */}
        <div className="w-full md:w-1/5">
          <h3 className="text-lg font-semibold mb-4">Plan Events</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/home">Create Event</Link></li>
            <li><Link href="/home">Discover Events</Link></li>
           
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
          <p className="text-sm mb-4">Sign up to get the latest on all things events, straight to your inbox.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-4 rounded-r-lg">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>

      <footer className="py-4 bg-gray-800 text-white text-center">
        © 2024 aimee mercury. All rights reserved.
      </footer>
    </div>
  );
}
