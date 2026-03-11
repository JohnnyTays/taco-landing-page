import { motion } from 'framer-motion';
import { Zap, MapPin, ShieldCheck, Flame, Utensils, Star, Info, Phone, Instagram, Twitter, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF5F1F] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF5F1F] rounded-lg rotate-45 flex items-center justify-center">
            <Zap size={18} className="text-black -rotate-45" />
          </div>
          <span className="text-xl font-black italic tracking-tighter text-white">TACO.NEXUS</span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
          <a href="#menu" className="hover:text-[#FF5F1F] transition-colors">The.Protocol</a>
          <a href="#about" className="hover:text-[#FF5F1F] transition-colors">The.Labs</a>
          <a href="#location" className="hover:text-[#FF5F1F] transition-colors">Coordinates</a>
        </div>
        <button className="bg-[#FF5F1F] text-black px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-tighter hover:bg-white transition-all shadow-[0_0_20px_rgba(255,95,31,0.3)]">
          Sync Order
        </button>
      </nav>

      {/* Hero Banner */}
      <section className="relative h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover opacity-20 grayscale" alt="Taco Nexus Hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center max-w-5xl">
          <span className="inline-block text-[#FF5F1F] font-mono text-xs font-bold uppercase tracking-[0.6em] mb-6 px-4 py-1 border border-[#FF5F1F]/30 rounded-full bg-[#FF5F1F]/5">Operational // V4.0.0</span>
          <h1 className="text-6xl md:text-[140px] font-black leading-[0.85] italic tracking-tighter mb-8 text-white uppercase">
            STREET <br/> <span className="text-[#FF5F1F]">ENGINEERED.</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto font-medium uppercase tracking-[0.4em] mb-12 leading-relaxed">
            Layer Zero Freshness. No Fluff. High-Velocity Flavor Architected for the Sovereign Individual.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="w-full md:w-auto bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-tighter hover:bg-[#FF5F1F] transition-all">Initialize Order</button>
            <button className="w-full md:w-auto border border-white/20 px-12 py-5 rounded-full font-black uppercase tracking-tighter hover:bg-white/5 transition-all text-white flex items-center justify-center gap-2">
              View Map <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Menu */}
      <section id="menu" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-4">The Protocol</h2>
          <p className="text-[#FF5F1F] font-mono uppercase tracking-[0.4em] font-bold text-sm">Active Flavor Nodes // Optimized for Throughput</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Featured Item */}
          <motion.div whileHover={{ y: -5 }} className="md:col-span-8 relative rounded-[40px] overflow-hidden border border-white/10 group h-[500px]">
            <img src="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=1200&q=80" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt="Neon Al Pastor" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
              <div>
                <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-2">Neon Al Pastor</h3>
                <p className="text-gray-300 uppercase text-xs tracking-widest font-bold max-w-md">24-hour marinated pork, flash-grilled with pineapple reduction and micro-cilantro nodes.</p>
              </div>
              <span className="text-[#FF5F1F] font-mono text-3xl font-black italic">$4.50</span>
            </div>
          </motion.div>

          {/* Secondary Items */}
          <motion.div whileHover={{ y: -5 }} className="md:col-span-4 bg-white/[0.03] border border-white/10 rounded-[40px] p-8 flex flex-col justify-between hover:border-[#FF5F1F]/40 transition-all">
            <div className="w-12 h-12 bg-[#FF5F1F]/10 rounded-2xl flex items-center justify-center text-[#FF5F1F] mb-8">
              <Flame size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">Cyber Carnitas</h3>
              <p className="text-gray-500 uppercase text-[10px] tracking-widest leading-relaxed mb-6 font-bold">Slow-rendered pork shoulder, crispy exterior, optimized with salsa verde 2.0.</p>
              <div className="flex justify-between items-center">
                <span className="text-[#FF5F1F] font-mono text-xl font-bold">$4.75</span>
                <button className="p-3 bg-white/5 rounded-full hover:bg-[#FF5F1F] hover:text-black transition-all"><ChevronRight size={20}/></button>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="md:col-span-4 bg-[#FF5F1F] text-black rounded-[40px] p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(255,95,31,0.2)]">
            <h3 className="text-4xl font-black italic uppercase tracking-tighter leading-none">The <br/> Birria <br/> Kernel</h3>
            <div>
              <p className="text-black/70 uppercase text-[10px] tracking-widest leading-relaxed mb-6 font-black">Three quesabirria tacos served with a high-bandwidth consommé dip.</p>
              <div className="flex justify-between items-center">
                <span className="font-mono text-2xl font-black italic">$12.00</span>
                <button className="p-3 bg-black text-white rounded-full hover:bg-white hover:text-black transition-all"><ChevronRight size={20}/></button>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="md:col-span-8 relative rounded-[40px] overflow-hidden border border-white/10 group h-[400px]">
             <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Logic Asada" />
             <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500" />
             <div className="absolute top-10 right-10 bg-white text-black px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-tighter">PRIME CUT</div>
             <div className="absolute bottom-10 left-10">
               <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-2 text-white">Logic Asada</h3>
               <p className="text-white/70 uppercase text-xs font-bold tracking-widest">Citrus-hacked marinade // Charred onion matrix.</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* The Labs Section */}
      <section id="about" className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[60px] overflow-hidden border border-white/10 relative">
               <img src="https://images.unsplash.com/photo-1565061828011-282424b9ab40?auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover grayscale" alt="The Labs" />
               <div className="absolute inset-0 bg-[#FF5F1F]/10 mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#FF5F1F] p-10 rounded-[40px] rotate-6 shadow-2xl hidden md:block">
              <ShieldCheck size={80} className="text-black" />
            </div>
          </div>
          <div>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none text-white">The <span className="text-[#FF5F1F]">Flavor</span> <br/> Labs.</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 uppercase tracking-[0.2em] font-light">
              We don't just cook; we architect. Every taco is a system of balanced variables, engineered for the sovereign citizen who demands excellence without the fluff. Our protocols ensure 99/100 purity across all flavor nodes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Zap size={20}/>, title: "Velocity", text: "Optimized throughput." },
                { icon: <Utensils size={20}/>, title: "Purity", text: "Verified ingredients." },
                { icon: <Star size={20}/>, title: "Elite", text: "Layer Zero standard." },
                { icon: <Phone size={20}/>, title: "Sync", text: "Live coordinates." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-[#FF5F1F] mt-1">{item.icon}</span>
                  <div>
                    <h4 className="font-black italic uppercase text-xs tracking-widest text-white mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-6">
            <div className="text-4xl font-black italic tracking-tighter text-[#FF5F1F] mb-6">TACO.NEXUS</div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.4em] leading-loose max-w-sm mb-10">
              Architected by JohnnyTays Architectures. Built for the sovereign individual. © 2025 All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#FF5F1F] hover:text-black transition-all"><Instagram size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#FF5F1F] hover:text-black transition-all"><Twitter size={18}/></a>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
            <span className="text-white mb-4">System.Nav</span>
            <a href="#" className="hover:text-[#FF5F1F] transition-colors">Initialise</a>
            <a href="#menu" className="hover:text-[#FF5F1F] transition-colors">Protocols</a>
            <a href="#about" className="hover:text-[#FF5F1F] transition-colors">The.Labs</a>
            <a href="#location" className="hover:text-[#FF5F1F] transition-colors">Coordinates</a>
          </div>
          <div className="md:col-span-3 flex flex-col gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
            <span className="text-white mb-4">Security</span>
            <a href="#" className="hover:text-[#FF5F1F] transition-colors">Identity.Lock</a>
            <a href="#" className="hover:text-[#FF5F1F] transition-colors">Terminal.Access</a>
            <a href="#" className="hover:text-[#FF5F1F] transition-colors">Privacy.Audit</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
