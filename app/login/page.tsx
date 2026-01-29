"use client";
import React, { useState } from 'react';
import { auth } from '@/firebaseConfig'; // This will work now!
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/admin'); 
    } catch (error: any) {
      alert("Login Failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 p-10 rounded-[40px] border border-zinc-800">
        <div className="text-center mb-8">
          <ShieldCheck size={48} className="mx-auto text-[#FFD700] mb-4" />
          <h2 className="text-white text-3xl font-black uppercase italic">Admin Login</h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
            <input 
              className="w-full bg-black border border-zinc-700 p-4 pl-12 rounded-2xl text-white outline-none focus:border-[#FFD700]" 
              type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
            <input 
              className="w-full bg-black border border-zinc-700 p-4 pl-12 rounded-2xl text-white outline-none focus:border-[#FFD700]" 
              type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button 
            disabled={loading}
            className="bg-[#FFD700] text-black w-full py-4 font-black rounded-2xl hover:bg-white transition disabled:opacity-50"
          >
            {loading ? "AUTHENTICATING..." : "LOGIN TO DASHBOARD"}
          </button>
        </form>
      </div>
    </div>
  );
}