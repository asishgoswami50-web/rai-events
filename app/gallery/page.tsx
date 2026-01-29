"use client";
import React, { useEffect, useState } from 'react';
import { db } from '@/firebaseConfig';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { FolderOpen, ArrowUpRight, Maximize2, X, Loader2 } from 'lucide-react';

export default function GalleryPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const router = useRouter();

  const getDirectLink = (url: string) => {
    if (!url) return "";
    const regExp = /d\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regExp);
    return match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000` : url;
  };

  useEffect(() => {
    const q = query(collection(db, "glimpses"), orderBy("uploadedAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const highlightPhotos = items.filter(item => item.type === 'single');
  const albumData = items.filter(item => item.type === 'folder');
  const uniqueAlbums = Array.from(new Set(albumData.map(a => a.title)))
    .map(title => albumData.find(a => a.title === title));

  if (loading) return (
    <div className="h-screen bg-black flex items-center justify-center">
      <Loader2 className="animate-spin text-[#FFD700]" size={48} />
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      {/* Lightbox for Highlights */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedPhoto(null)}>
          <button className="absolute top-8 right-8 text-white/50 hover:text-[#FFD700] transition-colors"><X size={40} /></button>
          <img src={getDirectLink(selectedPhoto)} className="max-w-full max-h-full rounded-lg shadow-2xl border border-zinc-800" />
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black italic uppercase mb-4 tracking-tighter leading-none">
            Event <span className="text-[#FFD700]">Glimpses</span>
          </h1>
        </header>

        {/* --- SECTION: LATEST HIGHLIGHTS (Singles) --- */}
        {highlightPhotos.length > 0 && (
          <div className="mb-24">
            <h2 className="text-sm font-black tracking-[0.4em] uppercase text-[#FFD700] mb-8 border-l-4 border-[#FFD700] pl-4">Latest Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {highlightPhotos.map((photo) => (
                <div key={photo.id} className="group flex flex-col gap-3">
                  <div 
                    className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 cursor-pointer shadow-lg transition-all hover:border-[#FFD700]/50"
                    onClick={() => setSelectedPhoto(photo.driveUrl)}
                  >
                    <img src={getDirectLink(photo.driveUrl)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="text-[#FFD700]" size={32} />
                    </div>
                  </div>
                  <div className="px-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-[#FFD700] transition-colors truncate">
                      {photo.title || "Untitled Moment"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- SECTION: EVENT COLLECTIONS (Folders) --- */}
        <div className="mb-24">
            <h2 className="text-sm font-black tracking-[0.4em] uppercase text-[#FFD700] mb-8 border-l-4 border-[#FFD700] pl-4">Event Collections</h2>
            
            {uniqueAlbums.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {uniqueAlbums.map((album) => (
                <div 
                    key={album?.id} 
                    className="group relative h-[400px] rounded-[40px] bg-zinc-900 border border-zinc-800 overflow-hidden cursor-pointer p-10 flex flex-col hover:border-[#FFD700]/30 transition-all shadow-2xl"
                    onClick={() => router.push(`/gallery/${encodeURIComponent(album?.title || '')}`)}
                >
                    <div className="absolute -right-10 -bottom-10 text-white/5 group-hover:text-[#FFD700]/10 transition-colors">
                    <FolderOpen size={280} />
                    </div>
                    <div className="relative z-10 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-3xl bg-[#FFD700] flex items-center justify-center text-black mb-8 shadow-lg shadow-[#FFD700]/20">
                        <FolderOpen size={24} />
                    </div>
                    <div className="mt-auto">
                        <p className="text-[#FFD700] text-[10px] font-black uppercase tracking-[0.3em] mb-2">Exclusive Album</p>
                        <h3 className="text-4xl font-black italic uppercase tracking-tighter leading-tight mb-4 group-hover:text-[#FFD700] transition-colors">{album?.title}</h3>
                        <div className="flex items-center gap-2 text-zinc-500 group-hover:text-white transition-all text-xs font-bold uppercase tracking-widest">
                        View Full Album <ArrowUpRight size={16} />
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            ) : (
            <div className="text-center py-20 border border-dashed border-zinc-800 rounded-[40px]">
                <p className="text-zinc-500 uppercase tracking-widest font-bold">No collections found yet.</p>
            </div>
            )}
        </div>

        {/* --- NEW SECTION: CALL TO ACTION --- */}
        <div className="mt-32">
          <div className="relative overflow-hidden bg-zinc-900/50 border border-zinc-800 rounded-[50px] p-12 md:p-24 text-center">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FFD700]/5 blur-[120px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-10 leading-none">
                Want an event like <span className="text-[#FFD700]">This?</span>
              </h2>
              <button 
            onClick={() => router.push('/contact')}
            className="bg-[#FFD700] text-black px-10 py-4 font-black rounded-full hover:bg-white transition-all shadow-lg"
          >
            CONTACT US
          </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}