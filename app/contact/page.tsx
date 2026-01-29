"use client";
import React, { useState } from 'react';
import { db } from '@/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Send, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', whatsapp: '', details: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Sends data to the "leads" collection for the Admin Dashboard
      await addDoc(collection(db, "leads"), {
        name: formData.name,
        whatsapp: formData.whatsapp,
        details: formData.details,
        createdAt: serverTimestamp(),
      });

      alert("Inquiry Sent Successfully! We will contact you shortly.");
      setFormData({ name: '', whatsapp: '', details: '' }); 
    } catch (error) {
      console.error("Error sending inquiry:", error);
      alert("Failed to send. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
            BOOK <span className="text-[#FFD700]">RAI EVENTS</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] mt-4">
            Let's Make Your Next Event Legendary
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-8 bg-zinc-900/30 p-10 rounded-[40px] border border-zinc-800">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#FFD700] uppercase italic">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#FFD700] p-3 rounded-full text-black">
                    <Phone size={20} />
                  </div>
                  <p className="text-xl font-bold">+918340429618 & +917209907013</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#FFD700] p-3 rounded-full text-black">
                    <MapPin size={20} />
                  </div>
                  <p className="text-zinc-400 font-medium">• Based in Jamshedpur,Jharkhand</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-800">
              <p className="text-zinc-500 italic text-sm">
                "Our energy is our identity. From corporate galas to high-octane private parties, we handle the vibe while you enjoy the moment."
              </p>
            </div>
          </div>

          {/* Right Side: The Booking Form */}
          <div className="bg-zinc-900 p-8 md:p-12 rounded-[40px] border-2 border-[#FFD700]/20 shadow-2xl relative overflow-hidden">
            {/* Design Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 blur-3xl rounded-full -mr-16 -mt-16"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-2 mb-2 block">Full Name</label>
                <input 
                  required
                  className="w-full bg-black border border-zinc-800 p-5 rounded-2xl text-white outline-none focus:border-[#FFD700] transition-all"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-2 mb-2 block">WhatsApp Number</label>
                <input 
                  required
                  type="tel"
                  className="w-full bg-black border border-zinc-800 p-5 rounded-2xl text-white outline-none focus:border-[#FFD700] transition-all"
                  placeholder="+91 00000 00000"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                />
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-2 mb-2 block">Event Details</label>
                <textarea 
                  required
                  className="w-full bg-black border border-zinc-800 p-5 rounded-2xl text-white outline-none focus:border-[#FFD700] transition-all h-32 resize-none"
                  placeholder="Tell us about the Date, Location, and Occasion..."
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#FFD700] text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white transition-all transform active:scale-95 shadow-xl disabled:opacity-50"
              >
                {loading ? (
                  "SENDING..."
                ) : (
                  <>
                    <Send size={20} /> SEND INQUIRY
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}