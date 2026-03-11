import { motion } from 'framer-motion';

export const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-black/50 backdrop-blur-2xl border-b border-white/5">
    <div className="text-2xl font-black italic tracking-tighter text-[#FF5F1F]">TACO.NEXUS</div>
    <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
      <a href="#menu" className="hover:text-[#FF5F1F] transition-colors">Protocol</a>
      <a href="#about" className="hover:text-[#FF5F1F] transition-colors">The.Labs</a>
      <a href="#location" className="hover:text-[#FF5F1F] transition-colors">Coordinates</a>
    </div>
    <button className="bg-[#FF5F1F] text-black px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-tighter hover:bg-white transition-all">
      Sync Order
    </button>
  </nav>
);
