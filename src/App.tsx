import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full border border-yellow-500/30 p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-xl shadow-2xl">
        <h1 className="text-5xl font-black tracking-tighter mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent italic">
          TACO NEXUS
        </h1>
        <p className="text-zinc-400 text-sm uppercase tracking-[0.3em] mb-8">Elite Street Flavors</p>
        
        <div className="space-y-6">
          <div className="border-l-2 border-yellow-500 pl-4">
            <h2 className="text-xl font-bold text-white">THE SIGNATURE</h2>
            <p className="text-zinc-500 text-sm">Wagyu Carne Asada • Truffle Crema • Micro-Cilantro</p>
          </div>
          
          <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-95 uppercase tracking-widest">
            Order Delivery
          </button>
          
          <div className="flex justify-between text-[10px] text-zinc-600 uppercase tracking-widest pt-4 border-t border-zinc-800">
            <span>Open 24/7</span>
            <span>Austin, TX</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
