"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { db } from '@/firebaseConfig';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { Loader2, ArrowLeft, X, Maximize2 } from 'lucide-react';

interface Glimpse {
  id: string;
  title: string;
  driveUrl: string;
  uploadedAt: any;
}

export default function SubGalleryPage() {
  const params = useParams();
  const router = useRouter();
  const categoryName = params.category ? decodeURIComponent(params.category as string) : "";
  
  const [photos, setPhotos] = useState<Glimpse[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Advanced Link Converter for Google Drive
  const getDirectLink = (url: string) => {
    if (!url) return "";
    
    // Pattern to find the unique File ID in a Google Drive link
    const regExp = /d\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regExp);
    
    if (match && match[1]) {
      // Returns a link that the browser can actually display as an image
      return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
    }
    return url;
  };

  useEffect(() => {
    if (!categoryName) return;

    const q = query(
      collection(db, "glimpses"),
      where("title", "==", categoryName),
      orderBy("uploadedAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      } as Glimpse));
      setPhotos(data);
      setLoading(false);
    }, (error) => {
      console.error("Firestore Error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [categoryName]);

  if (loading) return (
    <div className="h-screen bg-black flex items-center justify-center">
      <Loader2 className="animate-spin text-[#FFD700]" size={48} />
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" 
          onClick={() => setSelectedPhoto(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-[#FFD700]">
            <X size={40} />
          </button>
          <img 
            src={getDirectLink(selectedPhoto)} 
            className="max-w-full max-h-full object-contain" 
            alt="Full view"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => router.push('/gallery')}
          className="flex items-center gap-2 text-zinc-500 hover:text-[#FFD700] mb-8 uppercase text-xs font-bold tracking-[0.3em] transition-all"
        >
          <ArrowLeft size={16} /> Back to Collections
        </button>
        
        <div className="mb-16">
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-4">
            {categoryName}
          </h1>
          <div className="h-1 w-24 bg-[#FFD700]"></div>
        </div>

        {/* The Grid Layout */}
        {photos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="relative group aspect-square rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 cursor-pointer shadow-xl"
                onClick={() => setSelectedPhoto(photo.driveUrl)}
              >
                <img 
                  src={getDirectLink(photo.driveUrl)} 
                  alt={categoryName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    // Falls back to a placeholder if the link is totally broken
                    (e.target as HTMLImageElement).src = "https://placehold.co/600x600/111/FFD700?text=View+on+Drive";
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-[#FFD700]" size={32} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-zinc-800 rounded-3xl">
            <p className="text-zinc-500 uppercase tracking-widest font-bold">No photos found in this album.</p>
          </div>
        )}

        <div className="mt-24 p-12 rounded-[40px] bg-zinc-900/50 border border-zinc-800 text-center">
          <h2 className="text-3xl font-black italic uppercase mb-6 tracking-tight">Want an event like {categoryName}?</h2>
          <button 
            onClick={() => router.push('/contact')}
            className="bg-[#FFD700] text-black px-10 py-4 font-black rounded-full hover:bg-white transition-all shadow-lg"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}