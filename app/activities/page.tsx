"use client";
import { Users, Zap, Sparkles, Target, Star, Play, Trophy, Heart } from 'lucide-react';

export default function ActivitiesPage() {
  const activities = [
    { 
      title: "Engagement Activities", 
      icon: <Users size={40}/>, 
      desc: "Custom-tailored team building exercises.", 
      detail: "Focused on group synergy." 
    },
    { 
      title: "Audience Interaction Segment", 
      icon: <Zap size={40}/>, 
      desc: "Breaking the ice with dynamic crowd participation.", 
      detail: "Perfect for large scale events." 
    },
    { 
      title: "Attendee Interaction Programs", 
      icon: <Sparkles size={40}/>, 
      desc: "Personalized networking and social modules.", 
      detail: "Building lasting professional bonds." 
    },
    { 
      title: "Interactive Games", 
      icon: <Target size={40}/>, 
      desc: "Skill-based challenges and fun competitions.", 
      detail: "Gamified event experiences." 
    },
    { 
      title: "Structured Engagement Activities", 
      icon: <Star size={40}/>, 
      desc: "Planned modules for specific event goals.", 
      detail: "Goal-oriented interaction." 
    },
    { 
      title: "Live Engagement Modules", 
      icon: <Play size={40}/>, 
      desc: "Real-time activities to keep the energy high.", 
      detail: "Seamless event flow management." 
    },
    { 
      title: "Entertainment Games", 
      icon: <Trophy size={40}/>, 
      desc: "High-stakes fun and reward-based games.", 
      detail: "Creating moments of joy." 
    },
    { 
      title: "Many More Fun Activities", 
      icon: <Heart size={40}/>, 
      desc: "A wide variety of customizable fun options.", 
      detail: "Endless entertainment possibilities." 
    }
  ];

  return (
    <div className="bg-zinc-900 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black text-white mb-4 text-center uppercase italic tracking-tighter">
          Signature <span className="text-[#FFD700]">Engagement</span>
        </h1>
        <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto italic">
          "Engagement is an art." — Interactive modules curated by Mr. Pankaj Rai & Team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((item, i) => (
            <div key={i} className="group p-8 bg-black border border-zinc-800 rounded-3xl hover:border-[#FFD700] hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-all duration-300">
              <div className="mb-6 text-[#FFD700] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white uppercase mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {item.desc}
              </p>
              <p className="text-[10px] text-[#FFD700]/60 uppercase tracking-widest font-bold">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}