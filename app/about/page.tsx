"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Target, CheckCircle2, Star, ShieldCheck, Heart, MessageSquare, LayoutGrid, Users2 } from 'lucide-react';

export default function AboutPage() {
  const strengths = [
    {
      title: "Audience Activation",
      desc: "We don’t just organize events—we activate the audience, ensuring participants are fully involved.",
      icon: <Zap className="text-[#FFD700]" size={32} />
    },
    {
      title: "Crowd Management",
      desc: "Hands-on experience managing gatherings of 300–400+ participants without chaos.",
      icon: <Users className="text-[#FFD700]" size={32} />
    },
    {
      title: "Seamless Execution",
      desc: "Thoughtfully planned elements to balance fun with structure and smooth event flow.",
      icon: <Target className="text-[#FFD700]" size={32} />
    }
  ];

  const whyChooseUs = [
    {
      title: "Engagement Over Arrangements",
      desc: "Anyone can setup a stage. We specialize in keeping the audience active and energized. If people are participating, the event is a success.",
      icon: <Heart size={24} className="text-[#FFD700]" />
    },
    {
      title: "Strong Crowd Management",
      desc: "Handling 400+ people is about flow. We understand crowd behavior to prevent confusion or delays.",
      icon: <Users2 size={24} className="text-[#FFD700]" />
    },
    {
      title: "Simple & Inclusive Fun",
      desc: "Activities designed for all age groups. No complicated rules—just well-planned engagement that works.",
      icon: <Star size={24} className="text-[#FFD700]" />
    },
    {
      title: "Reliable Execution",
      desc: "We bring discipline and real-time problem solving to ensure things stay on track even when situations change.",
      icon: <ShieldCheck size={24} className="text-[#FFD700]" />
    },
    {
      title: "Customized Strategy",
      desc: "No copy-paste formats. We plan based on your specific audience size and event purpose.",
      icon: <LayoutGrid size={24} className="text-[#FFD700]" />
    },
    {
      title: "Professional Handling",
      desc: "Clear communication and structured planning so you can relax and enjoy your own event.",
      icon: <MessageSquare size={24} className="text-[#FFD700]" />
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-hidden">
      
      {/* SECTION 1: HERO IDENTITY */}
      <section className="relative py-28 px-6 flex flex-col items-center text-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-[#FFD700] font-black tracking-[0.3em] uppercase text-sm mb-4 block">Based in Jamshedpur</span>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase mb-8 leading-tight">
            Turning Moments Into <span className="text-[#FFD700]">Memories</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed font-medium">
            We are an event engagement and management team focused on creating high-energy, interactive, and memorable experiences. Based in Jamshedpur, we specialize in conducting corporate events, Birthday’s, Family Gatherings, outdoor and indoor engagement activities, with highly audience engagement, fun activities, games, and live coordination that keep people involved from start to finish. From corporate gatherings and brand events to social celebrations, our core strength lies in people management, crowd interaction, and well-planned engagement activities
          </p>
        </motion.div>
      </section>

      {/* SECTION 2: INTERACTIVE STRENGTHS GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-zinc-900/50 border border-zinc-800 rounded-[40px] hover:border-[#FFD700] transition-all duration-300"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-black uppercase mb-4 italic">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: DETAILED PHILOSOPHY */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070" 
               alt="Event Management" 
               className="rounded-[50px] shadow-2xl grayscale hover:grayscale-0 transition duration-700"
             />
             <div className="absolute -bottom-6 -right-6 bg-[#FFD700] p-8 rounded-2xl hidden md:block">
                <p className="font-black text-3xl italic">300-400+</p>
                <p className="text-xs uppercase font-bold tracking-tighter">Participants Managed</p>
             </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-black uppercase italic leading-none">
              Engagement, Energy, <br/> & <span className="text-[#FFD700] bg-black px-2 text-white">Execution</span>
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              We don’t just organize events — we activate the audience, ensuring participants are not just present, but fully involved and energized throughout the event.
            </p>
            <p className="text-lg text-gray-700">
              Our approach combines creativity, discipline, and strong on-ground coordination, allowing us to adapt quickly, manage live audiences effectively, and deliver seamless event flow.
            </p>
            <div className="pt-4 grid grid-cols-1 gap-3">
               {["Inclusive for all age groups", "Smooth execution without chaos", "Strong on-ground coordination"].map((text, i) => (
                 <div key={i} className="flex items-center gap-3 font-bold uppercase text-sm">
                    <CheckCircle2 className="text-[#FFD700]" size={18} /> {text}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US (Newly Added) */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#FFD700] text-sm font-black tracking-[0.4em] uppercase mb-4">The Rai Events Edge</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase italic">Why Choose Us?</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-black border border-zinc-800 rounded-3xl hover:border-[#FFD700]/50 transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-black uppercase mb-3 text-white">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-[#FFD700] text-2xl md:text-3xl font-black italic tracking-tight">
              "Because an event is remembered for how it made people feel."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: TRUST LOGOS */}
      <section className="py-24 px-6 bg-black border-t border-zinc-900 text-center">
        <h3 className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-xs mb-12">Trusted By Regional Brands</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="text-white text-2xl font-black italic">SUNRISE TILES</div>
           <div className="text-white text-2xl font-black italic"> & </div>
           <div className="text-white text-2xl font-black italic">KIA MOTORS</div>
          
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-[#FFD700] p-12 rounded-[50px] text-black text-center relative overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.2)]">
           <Star className="absolute top-10 left-10 opacity-20" size={100} />
           <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-6 relative z-10">
             Ready to activate your audience?
           </h2>
           <a href="/contact" className="inline-block bg-black text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:scale-110 transition-transform relative z-10">
             Let's Talk Event
           </a>
        </div>
      </section>
    </div>
  );
}