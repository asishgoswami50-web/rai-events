"use client";
import React from 'react';
import { Cake, Heart, Gem, Users, Home, Briefcase, Baby, Zap, PlusCircle } from 'lucide-react';

export default function ServicesPage() {
  const events = [
    { 
      title: "Birthday Party", 
      icon: <Cake size={48}/>, 
      tagline: "Making every year count with joy.", 
      desc: "Themed decor and high-energy kids/adult entertainment." 
    },
    { 
      title: "Anniversary Celebrations", 
      icon: <Heart size={48}/>, 
      tagline: "Reliving the love, renewing the vows.", 
      desc: "Elegant couple-focused games and romantic atmosphere." 
    },
    { 
      title: "Engagement Event", 
      icon: <Gem size={48}/>, 
      tagline: "The beginning of forever starts here.", 
      desc: "Managing ring ceremonies and grand family entries." 
    },
    { 
      title: "Get-Together Party", 
      icon: <Users size={48}/>, 
      tagline: "Reconnecting hearts and creating memories.", 
      desc: "Fun-filled bonding activities for friends and families." 
    },
    { 
      title: "House Party", 
      icon: <Home size={48}/>, 
      tagline: "Intimate fun in the comfort of home.", 
      desc: "Turning your living room into an entertainment zone." 
    },
    { 
      title: "Corporate Party", 
      icon: <Briefcase size={48}/>, 
      tagline: "Professionalism meets entertainment.", 
      desc: "Product launches, awards nights, and team building." 
    },
    { 
      title: "Baby Showers", 
      icon: <Baby size={48}/>, 
      tagline: "Welcoming little feet with big celebrations.", 
      desc: "Traditional rituals with a modern, fun twist." 
    },
    { 
      title: "Team Gathering", 
      icon: <Zap size={48}/>, 
      tagline: "Uniting Teams through Play.", 
      desc: "Strategic ice-breakers and high-energy group activities." 
    },
    { 
      title: "And Many More", 
      icon: <PlusCircle size={48}/>, 
      tagline: "Your Vision, Our Execution.", 
      desc: "Customized entertainment solutions for any unique occasion." 
    }
  ];

  return (
    <div className="bg-white min-h-screen py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-black uppercase italic tracking-tighter mb-4">
            RAI <span className="text-[#FFD700] drop-shadow-[2px_2px_0px_#000]">SERVICES</span>
          </h1>
          <div className="h-2 w-24 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Complete event management solutions tailored to your unique celebrations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((s, i) => (
            <div key={i} className="group p-10 bg-zinc-900 text-white rounded-[40px] hover:bg-black transition-all duration-500 border-b-8 border-[#FFD700] flex flex-col justify-between">
              <div>
                <div className="mb-6 text-[#FFD700] group-hover:animate-bounce">
                  {s.icon}
                </div>
                <h3 className="text-3xl font-black uppercase mb-2 italic leading-tight">{s.title}</h3>
                <p className="text-[#FFD700] font-bold text-xs tracking-[0.2em] uppercase mb-6">{s.tagline}</p>
                <p className="text-gray-400 group-hover:text-white transition-colors">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}