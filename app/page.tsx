"use client";
import React, { useState } from 'react';
import { MessageCircle, ArrowUpRight, Plus, Minus, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RaiEventsHome() {
  // State for the "What Makes Us Different" Accordion
  const [openDiffIndex, setOpenDiffIndex] = useState<number | null>(null);

  const toggleDiff = (index: number) => {
    setOpenDiffIndex(openDiffIndex === index ? null : index);
  };

  // Team Data
  const teamMembers = [
    { name: "Pankaj Kumar", role: "Event Host & Speaker", img: "/team/Pankaj.jpg" },
    { name: "Rishav Kumar", role: "Event Coordinator", img: "/team/Rishav.jpg" },
    { name: "Rajkumar.P", role: "Event Coordinator", img: "/team/Rajkumar.jpg" },
    { name: "Deepali", role: "Event Coordinator", img: "/team/Deepali.jpg" },
    { name: "Dimpy", role: "Event Coordinator", img: "/team/Dimpy.jpg" }
  ];

  // Service Highlights Data
  const services = [
    { title: "Pro Anchoring", desc: "Confident, engaging anchoring that keeps the event flowing smoothly while maintaining audience attention and energy throughout." },
    { title: "Ice-Breakers & Team Activities", desc: "Perfect for corporate and mixed-age audiences — activities that break hesitation, encourage bonding, and energize the room." },
    { title: "Crowd Engagement & Interaction", desc: "We don’t let audiences sit idle. Our focus is on interaction, participation, and creating moments people enjoy being part of." },
    { title: "Corporate Event Engagement", desc: "Professional, well-structured engagement formats suitable for meetings, annual days, team outings, and office celebrations." },
    { title: "Non-Stop Entertainment", desc: "Continuous engagement elements that ensure there are no dull moments, keeping the crowd active from start to finish." },
    { title: "Custom Engagement Planning", desc: "Every event is different. We design engagement activities based on audience type, event goal, and available time." },
  ];

  // Differentiators Data
  const differentiators = [
    { title: "Audience-first event design", content: "Every activity is planned around how people participate, not just how it looks." },
    { title: "Live coordination & people management", content: "Real-time handling of audience flow, transitions, and participation." },
    { title: "Engagement that supports the event goal", content: "Activities are aligned with the purpose of the event, not random entertainment." },
    { title: "Calm execution even under pressure", content: "We handle unexpected situations without disrupting the event." },
    { title: "On-ground problem solving", content: "Quick decisions and adjustments when situations change." },
    { title: "Consistent flow from start to finish", content: "No awkward gaps or dull moments — engagement is paced properly." },
  ];

  // Process Steps
  const processSteps = [
    "Counselling the Event & Understand the Audience",
    "Design Blueprint (Engagement Strategy & Flow)",
    "Plan Crowd Movement & Participation",
    "Align Team Roles & Responsibilities",
    "Monitor Engagement in Real Time",
    "Close with Impact & Smooth Wrap-Up"
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center bg-black pt-20">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black"></div>
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-black text-[#FFD700] mb-4 uppercase tracking-tighter leading-none">RAI EVENTS</h1>
          <p className="text-lg md:text-2xl text-white font-bold tracking-[0.2em] mb-6">ANCHOR • GAMES • ENTERTAINMENT</p>
          
          {/* New Supporting Line */}
          <p className="text-gray-300 text-sm md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-light border-l-4 border-[#FFD700] pl-4 italic">
            "High-energy event engagement designed to keep your audience involved from start to finish. <br className="hidden md:block"/>
            <span className="text-white font-semibold not-italic">We don’t just manage events — we activate the audience."</span>
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/gallery" className="bg-[#FFD700] text-black px-10 py-4 font-black rounded-full hover:bg-white transition shadow-[0_0_20px_rgba(255,215,0,0.3)]">VIEW GLIMPSES</a>
            <a href="/contact" className="border-2 border-white text-white px-10 py-4 font-black rounded-full hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black transition">INQUIRE NOW</a>
          </div>
        </motion.div>
      </section>

      {/* ================= 5 SERVICE HIGHLIGHTS ================= */}
      <section className="py-24 bg-zinc-900 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
           <div className="mb-16 text-center">
              <h2 className="text-[#FFD700] font-black tracking-[0.2em] uppercase mb-2">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-black italic uppercase">Service <span className="text-white">Highlights</span></h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="bg-black border border-zinc-800 p-8 rounded-2xl hover:border-[#FFD700] transition-colors duration-300 group">
                  <div className="w-12 h-1 bg-[#FFD700] mb-6 group-hover:w-full transition-all duration-500"></div>
                  <h4 className="text-xl font-black uppercase text-[#FFD700] mb-4">{service.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ================= WHAT MAKES RAI EVENTS DIFFERENT ================= */}
      <section className="py-24 bg-white text-black px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">
              What Makes <span className="text-[#FFD700] drop-shadow-sm text-stroke-black">Rai Events</span> Different
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 font-medium max-w-3xl leading-relaxed">
              Anyone can arrange a stage or sound system. We focus on what truly makes an event successful — 
              <span className="font-bold text-black"> people engagement, crowd control, and on-ground execution.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {differentiators.map((item, idx) => (
              <div key={idx} className="border-b border-zinc-200 last:border-0">
                <button 
                  onClick={() => toggleDiff(idx)}
                  className="w-full py-6 flex items-center justify-between text-left group hover:bg-zinc-50 transition-colors px-4 rounded-lg"
                >
                  <span className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-center gap-4">
                    <span className="text-[#FFD700] text-sm md:text-lg">0{idx + 1}</span>
                    {item.title}
                  </span>
                  <div className={`p-2 rounded-full border-2 transition-all ${openDiffIndex === idx ? 'bg-[#FFD700] border-[#FFD700] text-black' : 'border-zinc-300 text-zinc-400'}`}>
                    {openDiffIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                {/* Expandable Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openDiffIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="pb-8 pl-14 pr-4 text-zinc-600 leading-relaxed font-medium">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS FLOW SECTION ================= */}
      <section className="py-24 bg-black px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-[#FFD700] font-black tracking-[0.2em] uppercase mb-4">Our Methodology</h2>
          <h3 className="text-4xl md:text-6xl font-black italic uppercase text-white">How We Execute <br/>Your Event</h3>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-[#FFD700]/50 transition-all group">
              <span className="absolute top-4 right-4 text-4xl font-black text-zinc-800 group-hover:text-[#FFD700]/20 transition-colors">
                {idx + 1}
              </span>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center text-black font-bold mb-4 shadow-lg shadow-[#FFD700]/20">
                  <ArrowUpRight size={20} />
                </div>
                <h4 className="text-lg font-bold uppercase tracking-wide text-zinc-200 group-hover:text-white">
                  {step}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR TEAM SECTION ================= */}
      <section className="py-24 bg-zinc-950 px-4 overflow-hidden relative">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-16 px-2">
            <h2 className="text-sm font-black tracking-[0.4em] uppercase text-[#FFD700] mb-4 border-l-4 border-[#FFD700] pl-4">
              The Minds Behind Rai Events
            </h2>
            <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
              Meet Our <span className="text-[#FFD700]">Experts</span>
            </h3>
            {/* New Supporting Paragraph */}
            <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed border-l border-zinc-700 pl-6">
              Behind every successful event is a team that understands people, pressure, and performance. 
              We bring passion and professionalism to every stage we step on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[30px] border border-zinc-800 bg-zinc-900 group-hover:border-[#FFD700]/50 transition-all duration-500 shadow-xl">
                  {/* REAL PHOTO TAG */}
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                  
                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-black">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[#FFD700] text-[9px] font-black uppercase tracking-[0.2em] mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      {member.role}
                    </p>
                    <h4 className="text-xl font-black italic uppercase tracking-tighter leading-tight group-hover:text-white transition-colors">
                      {member.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEW CTA SECTION ================= */}
      <section className="py-32 bg-[#FFD700] text-black px-6 text-center">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-6 leading-none">
               Let’s Create an Event People <span className="text-white drop-shadow-lg text-stroke-black">Actually Enjoy</span>
            </h2>
            <p className="text-xl font-bold mb-10 max-w-2xl mx-auto opacity-80">
               From planning to execution, we ensure engagement, energy, and smooth coordination.
            </p>
            <a href="/contact" className="inline-block bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
               Book Now
            </a>
         </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10 border-t border-zinc-900 px-6">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* 1. Quick Links */}
<div>
  <h4 className="text-white font-black uppercase tracking-widest mb-8 text-lg">Quick Links</h4>
  <ul className="space-y-4">
    {[
      { name: 'Home', path: '/' }, // This fixes the Home link
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Activities', path: '/activities' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Contact', path: '/contact' }
    ].map((link) => (
      <li key={link.name}>
        <a 
          href={link.path} 
          className="hover:text-[#FFD700] transition-colors flex items-center gap-2 font-medium"
        >
          <ChevronRight size={14} className="text-[#FFD700]" /> {link.name}
        </a>
      </li>
    ))}
  </ul>
</div>

            {/* 2. Contact Details */}
            <div className="text-center md:text-left">
               <h4 className="text-white font-black uppercase tracking-widest mb-8 text-lg">Contact Us</h4>
               <div className="space-y-6 flex flex-col items-center md:items-start">
                  <div className="flex gap-4 items-start">
                     <MapPin className="text-[#FFD700] shrink-0" />
                     <p className="text-sm">Rai Events, Dimna, Mango,<br/>Jamshedpur, Jharkhand, 831018</p>
                  </div>
                  <div className="flex gap-4 items-start">
                     <Phone className="text-[#FFD700] shrink-0" />
                     <div className="flex flex-col text-sm">
                        <a href="tel:+918340429618" className="hover:text-white">+91 83404 29618</a>
                        <a href="tel:+917209907013" className="hover:text-white">+91 72099 07013</a>
                     </div>
                  </div>
                  <div className="flex gap-4 items-center">
                     <Mail className="text-[#FFD700] shrink-0" />
                     <a href="mailto:contact.raievents@gmail.com" className="text-sm hover:text-white">contact.raievents@gmail.com</a>
                  </div>
               </div>
            </div>

            {/* 3. Embedded Map */}
            <div className="h-full min-h-[250px] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.574635606471!2d86.20863937508653!3d22.85507897931086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e374563914a1%3A0x6966f91d5755325!2sDimna%2C%20Mango%2C%20Jamshedpur%2C%20Jharkhand%20831018!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
               ></iframe>
            </div>
         </div>

         {/* Copyright */}
         <div className="border-t border-zinc-900 pt-8 text-center text-sm font-medium">
            <p>
               &copy; {new Date().getFullYear()} All Rights Reserved by <span className="text-white">Rai Events</span> | Made with Love ❤️ By <a href="https://www.linkedin.com/in/rajkumarhr" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline">Rajkumar</a>
            </p>
         </div>
      </footer>

      {/* WHATSAPP FLOAT BUTTON */}
      <a href="https://wa.me/918340429618" 
         className="fixed bottom-8 right-8 bg-[#25D366] p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform flex items-center gap-2 font-bold text-white border-2 border-white">
        <MessageCircle size={28} />
        <span className="hidden md:block">Chat on WhatsApp</span>
      </a>

    </div>
  );
}