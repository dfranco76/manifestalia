import React from 'react';

function Timeline() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      padding: '10px',
      borderTop: '1px solid #ccc',
      borderBottom: '1px solid #ccc'
    }}>
      {/* Aquí vamos a poner los frames */}
      <div style={{
        width: '60px',
        height: '60px',
        backgroundColor: '#eee',
        margin: '0 5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}>
        Frame 1
      </div>
      <div style={{
        width: '60px',
        height: '60px',
        backgroundColor: '#eee',
        margin: '0 5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}>
        Frame 2
      </div>
      <div style={{
        width: '60px',
        height: '60px',
        backgroundColor: '#eee',
        margin: '0 5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}>
        Frame 3
      </div>
    </div>
  );
}

export default Timeline;