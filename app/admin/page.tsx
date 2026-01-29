"use client";
import React, { useEffect, useState } from 'react';
import { db, auth } from '@/firebaseConfig';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  deleteDoc, 
  doc, 
  addDoc, 
  setDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { 
  Trash2, 
  LogOut, 
  User, 
  Phone, 
  MessageSquare, 
  Loader2, 
  Image as ImageIcon, 
  Plus,
  ExternalLink,
  FolderOpen
} from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  whatsapp: string;
  details: string;
  createdAt: any;
}

interface Glimpse {
  id: string;
  title: string;
  type: string;
  driveUrl: string;
  uploadedAt: any;
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [glimpses, setGlimpses] = useState<Glimpse[]>([]);
  const [categories, setCategories] = useState<string[]>([
    "Birthday Party", "Anniversary Celebrations", "Engagement Event", 
    "Get-Together Party", "House Party", "Corporate Party", 
    "Baby Showers", "Team Gathering"
  ]);
  const [loading, setLoading] = useState(true);
  
  // Form States
  const [glimpseLink, setGlimpseLink] = useState("");
  const [glimpseTitle, setGlimpseTitle] = useState(""); 
  const [glimpseType, setGlimpseType] = useState("folder"); // Default to folder
  const [selectedCategory, setSelectedCategory] = useState("Birthday Party");
  
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push('/login');
    });
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const leadsQuery = query(collection(db, "leads"), orderBy("createdAt", "desc"));
    const glimpsesQuery = query(collection(db, "glimpses"), orderBy("uploadedAt", "desc"));
    const categoriesQuery = query(collection(db, "categories"), orderBy("createdAt", "asc"));

    const unsubLeads = onSnapshot(leadsQuery, (snapshot) => {
      setLeads(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Lead)));
      setLoading(false);
    });

    const unsubGlimpses = onSnapshot(glimpsesQuery, (snapshot) => {
      setGlimpses(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Glimpse)));
    });

    const unsubCats = onSnapshot(categoriesQuery, (snapshot) => {
        const customCats = snapshot.docs.map(doc => doc.id);
        setCategories(prev => Array.from(new Set([...prev, ...customCats])));
    });

    return () => {
      unsubLeads();
      unsubGlimpses();
      unsubCats();
    };
  }, []);

  const convertToDirectLink = (url: string) => {
    if (url.includes("drive.google.com")) {
      const fileId = url.split("/d/")[1]?.split("/")[0] || url.split("id=")[1]?.split("&")[0];
      if (fileId) {
        // Thumbnail API is faster and more reliable for gallery grids
        return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
      }
    }
    return url;
  };

  const handleAddGlimpse = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Determine final title based on type
    let finalTitle = "";
    if (glimpseType === "folder") {
        finalTitle = selectedCategory === "Create New" ? glimpseTitle : selectedCategory;
    } else {
        finalTitle = glimpseTitle; // For single photo, use the custom title
    }

    // Convert Link only for single photos (to ensure lightbox works)
    const finalLink = glimpseType === "single" ? convertToDirectLink(glimpseLink) : glimpseLink;

    if (!finalLink.trim() || !finalTitle.trim()) {
        alert("Please ensure Title/Category and Link are provided!");
        return;
    }
    setIsUpdating(true);

    try {
      if (glimpseType === "folder" && selectedCategory === "Create New") {
        await setDoc(doc(db, "categories", finalTitle), {
            createdAt: serverTimestamp()
        });
      }

      await addDoc(collection(db, "glimpses"), {
        title: finalTitle,
        type: glimpseType, // correctly stores 'single' or 'folder'
        driveUrl: finalLink,
        uploadedAt: serverTimestamp(),
      });

      setGlimpseLink("");
      setGlimpseTitle("");
      setGlimpseType("folder");
      setSelectedCategory("Birthday Party");
      alert("Gallery Updated Successfully!");
    } catch (err: any) {
      alert("Error: " + err.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (confirm("Delete this inquiry?")) {
      await deleteDoc(doc(db, "leads", id));
    }
  };

  const handleDeleteGlimpse = async (id: string) => {
    if (confirm("Remove this item from gallery?")) {
      await deleteDoc(doc(db, "glimpses", id));
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => router.push('/login'));
  };

  if (loading) return (
    <div className="h-screen bg-black flex items-center justify-center">
      <Loader2 className="animate-spin text-[#FFD700]" size={48} />
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter">
              Admin <span className="text-[#FFD700]">Dashboard</span>
            </h1>
            <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest mt-2">Manage inquiries & media</p>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 bg-zinc-900 hover:bg-red-950 text-white px-6 py-3 rounded-xl border border-zinc-800 transition shadow-lg">
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* INQUIRIES SECTION */}
        <div className="mb-8 flex items-center gap-2">
          <MessageSquare className="text-[#FFD700]" size={24} />
          <h2 className="text-xl font-bold uppercase tracking-widest">Recent Inquiries</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-20">
          {leads.length === 0 ? (
            <div className="text-center py-10 border border-dashed border-zinc-800 rounded-3xl">
              <p className="text-zinc-600 uppercase text-xs font-bold">No leads yet</p>
            </div>
          ) : (
            leads.map((lead) => (
              <div key={lead.id} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[30px] hover:border-[#FFD700]/50 transition-all">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#FFD700] p-3 rounded-2xl text-black"><User size={20} /></div>
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase font-bold">Name</p>
                      <h3 className="font-bold uppercase">{lead.name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 p-3 rounded-2xl text-white"><Phone size={20} /></div>
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase font-bold">WhatsApp</p>
                      <a href={`https://wa.me/${lead.whatsapp}`} className="font-bold hover:text-green-400">{lead.whatsapp}</a>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold">Details</p>
                    <p className="text-sm text-zinc-300 italic truncate">{lead.details}</p>
                  </div>
                  <div className="flex justify-end">
                    <button onClick={() => handleDeleteLead(lead.id)} className="p-3 bg-zinc-800 rounded-xl hover:bg-red-600 transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* GALLERY MANAGEMENT */}
        <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-[40px]">
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon className="text-[#FFD700]" size={28} />
            <h2 className="text-2xl font-black uppercase italic">Manage <span className="text-[#FFD700]">Gallery</span></h2>
          </div>

          <form onSubmit={handleAddGlimpse} className="space-y-4 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select 
                    className="bg-black border border-zinc-700 p-5 rounded-2xl outline-none focus:border-[#FFD700] transition text-[#FFD700] font-bold"
                    value={glimpseType}
                    onChange={(e) => setGlimpseType(e.target.value)}
                >
                    <option value="folder">📁 Event Album / Folder</option>
                    <option value="single">🖼️ Single Photo (Lightbox)</option>
                </select>

                {glimpseType === "folder" ? (
                    <select 
                        className="bg-black border border-zinc-700 p-5 rounded-2xl outline-none focus:border-[#FFD700] transition text-white"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                        <option value="Create New">+ Create New Category</option>
                    </select>
                ) : (
                    <input 
                        className="bg-black border border-zinc-700 p-5 rounded-2xl outline-none focus:border-[#FFD700] transition text-white"
                        placeholder="Enter Photo Title (e.g. Venue Decor)"
                        value={glimpseTitle}
                        onChange={(e) => setGlimpseTitle(e.target.value)}
                        required
                    />
                )}
            </div>

            {glimpseType === "folder" && selectedCategory === "Create New" && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <input 
                        className="w-full bg-black border border-[#FFD700] p-5 rounded-2xl outline-none transition text-white shadow-[0_0_15px_rgba(255,215,0,0.1)]"
                        placeholder="Type New Album Category Name..."
                        value={glimpseTitle}
                        onChange={(e) => setGlimpseTitle(e.target.value)}
                        required
                    />
                    <p className="text-[10px] text-[#FFD700] uppercase font-bold mt-2 ml-2 tracking-widest">Saved for future Event Collections</p>
                </div>
            )}

            <div className="flex flex-col md:flex-row gap-4">
                <input 
                className="flex-1 bg-black border border-zinc-700 p-5 rounded-2xl outline-none focus:border-[#FFD700] transition"
                placeholder="Paste Google Drive Link"
                value={glimpseLink}
                onChange={(e) => setGlimpseLink(e.target.value)}
                required
                />
                <button 
                disabled={isUpdating}
                type="submit" 
                className="bg-[#FFD700] text-black px-10 py-5 font-black rounded-2xl hover:bg-white transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                {isUpdating ? <Loader2 className="animate-spin" size={20}/> : <Plus size={20} />} 
                {isUpdating ? "UPDATING..." : "UPDATE GALLERY"}
                </button>
            </div>
          </form>

          {/* LIST OF CURRENT GALLERY LINKS */}
          <div className="grid grid-cols-1 gap-3">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Current Gallery Items ({glimpses.length})</p>
            {glimpses.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-black/40 p-4 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition">
                <div className="flex items-center gap-4 overflow-hidden">
                  {item.type === 'single' ? <ImageIcon size={18} className="text-blue-400" /> : <FolderOpen size={18} className="text-[#FFD700]" />}
                  <div>
                    <p className="text-sm font-bold uppercase italic text-white leading-none mb-1">{item.title}</p>
                    <div className="flex items-center gap-2">
                      <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded ${item.type === 'single' ? 'bg-blue-500/20 text-blue-400' : 'bg-[#FFD700]/20 text-[#FFD700]'}`}>
                        {item.type}
                      </span>
                      <p className="text-[10px] text-zinc-500 truncate italic max-w-[200px]">{item.driveUrl}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href={item.driveUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-500 hover:text-[#FFD700]"><ExternalLink size={18} /></a>
                  <button onClick={() => handleDeleteGlimpse(item.id)} className="p-2 text-zinc-500 hover:text-red-500"><Trash2 size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}