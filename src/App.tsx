import React from 'react';

export default function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', textAlign: 'center', padding: '20px' }}>
      <div style={{ border: '1px solid #eab308', padding: '40px', borderRadius: '20px', backgroundColor: '#111' }}>
        <h1 style={{ fontSize: '3rem', margin: '0', color: '#eab308', fontStyle: 'italic', fontWeight: '900' }}>TACO NEXUS</h1>
        <p style={{ letterSpacing: '0.3em', fontSize: '0.8rem', color: '#666', marginBottom: '30px' }}>ELITE STREET FLAVORS</p>
        <div style={{ borderLeft: '3px solid #eab308', paddingLeft: '20px', textAlign: 'left', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.2rem', margin: '0' }}>THE SIGNATURE</h2>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>Wagyu Carne Asada • Truffle Crema</p>
        </div>
        <button style={{ width: '100%', backgroundColor: '#eab308', border: 'none', padding: '15px', borderRadius: '8px', fontWeight: '900', cursor: 'pointer', textTransform: 'uppercase' }}>Order Now</button>
      </div>
    </div>
  );
}
