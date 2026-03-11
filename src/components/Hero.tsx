import { motion } from 'framer-motion';

export const Hero = () => (
  <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden border-b border-white/5">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover opacity-20 grayscale" alt="Background" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
    </div>
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative z-10 text-center">
      <h1 className="text-7xl md:text-[160px] font-black leading-none italic tracking-tighter mb-4 text-white">
        STREET <br/> <span className="text-[#FF5F1F]">ENGINEERED.</span>
      </h1>
      <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto font-bold uppercase tracking-[0.5em] mb-12">
        High-Velocity Flavor // Layer Zero Freshness
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <button className="bg-white text-black px-14 py-6 rounded-full font-black uppercase tracking-tighter hover:bg-[#FF5F1F] transition-all shadow-2xl">Initialize Order</button>
        <button className="border-2 border-white/10 px-14 py-6 rounded-full font-black uppercase tracking-tighter hover:bg-white/5 transition-all text-white">View Map</button>
      </div>
    </motion.div>
  </section>
);
