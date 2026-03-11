import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center p-8 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-xl"
      >
        <h1 className="text-6xl font-black mb-4 tracking-tighter">TACO NEXUS</h1>
        <p className="text-xl text-white/60 mb-8 uppercase tracking-widest">Elite. Street. Cyber.</p>
        <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all">
          ORDER NOW
        </button>
      </motion.div>
    </div>
  );
};

export default App;
