import React from 'react';

export default function App() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        border: '1px solid #eab308',
        padding: '40px',
        borderRadius: '20px',
        backgroundColor: '#18181b',
        maxWidth: '400px'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '900',
          margin: '0',
          color: '#eab308',
          fontStyle: 'italic'
        }}>TACO NEXUS</h1>
        <p style={{
          color: '#71717a',
          letterSpacing: '0.2em',
          fontSize: '0.8rem',
          marginBottom: '30px'
        }}>ELITE STREET FLAVORS</p>
        
        <div style={{
          textAlign: 'left',
          borderLeft: '2px solid #eab308',
          paddingLeft: '15px',
          marginBottom: '30px'
        }}>
          <h2 style={{ fontSize: '1.2rem', margin: '0' }}>THE SIGNATURE</h2>
          <p style={{ color: '#52525b', fontSize: '0.9rem' }}>Wagyu Carne Asada • Truffle Crema</p>
        </div>
        
        <button style={{
          width: '100%',
          backgroundColor: '#eab308',
          color: 'black',
          border: 'none',
          padding: '15px',
          borderRadius: '8px',
          fontWeight: '900',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>ORDER NOW</button>
      </div>
    </div>
  );
}
