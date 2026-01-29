"use client";
import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactInfoPage() {
  return (
    <div className="bg-black text-white min-h-screen py-20 px-6">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-[#FFD700] uppercase italic tracking-tighter mb-4">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-300">
          Call us to plan your next big event.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT: CONTACT DETAILS */}
        <div className="space-y-8">
          
          {/* Company Name */}
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-[#FFD700] transition group">
             <h2 className="text-3xl font-black text-white italic uppercase mb-2 group-hover:text-[#FFD700]">Rai Events</h2>
             <p className="text-gray-400">Jamshedpur's Premier Event Management</p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-6 bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <div className="bg-[#FFD700] p-3 rounded-full text-black">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#FFD700]">Our Location</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Dimna, Mango,<br/>
                Jamshedpur, Jharkhand,<br/>
                831018
              </p>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-start gap-6 bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <div className="bg-[#FFD700] p-3 rounded-full text-black">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#FFD700]">Call Us</h3>
              <div className="space-y-2">
                <a href="tel:8340429618" className="block text-lg text-white hover:text-[#FFD700] transition font-bold tracking-wide">
                  +91 83404 29618
                </a>
                <a href="tel:7209907013" className="block text-lg text-white hover:text-[#FFD700] transition font-bold tracking-wide">
                  +91 72099 07013
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-6 bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <div className="bg-[#FFD700] p-3 rounded-full text-black">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#FFD700]">Email Us</h3>
              <a href="mailto:contact.raievents@gmail.com" className="text-lg text-white hover:text-[#FFD700] transition break-all">
                contact.raievents@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: WELCOME IMAGE AND TEXT */}
<div className="flex flex-col items-center">
  {/* Container for the image - No border, no extra shadows */}
  <div className="w-full overflow-hidden rounded-2xl">
    <Image 
      src="/welcome.jpg"
      alt="Welcome to Rai Events"
      width={800}    // These define the aspect ratio
      height={600}   // Next.js uses these to prevent layout shift
      className="w-full h-auto object-contain" // Keeps original proportions
      priority={true} 
    />
  </div>
  
  {/* Your requested text underneath */}
  <div className="mt-8 text-center">
    <h3 className="text-4xl font-bold text-[#FFD700] italic uppercase tracking-wider mb-2">
      Welcome to Rai Events
    </h3>
    <p className="text-gray-300 text-lg max-w-md mx-auto leading-relaxed">
      Thank you for visiting our website.
    </p>
  </div>
</div>

      </div>
    </div>
  );
}