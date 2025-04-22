import React from 'react';

function AddAudioModal({ isOpen, onClose, onSelectAudio }) {
  if (!isOpen) return null;

  // Audios predefinidos (pueden ser URLs a audios en línea o locales)
  const audios = [
    { name: "Relajación", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { name: "Energía positiva", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { name: "Concentración", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
  ];

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Elige un audio</h2>
        {audios.map((audio, index) => (
          <div 
            key={index}
            style={audioItemStyle}
            onClick={() => {
              onSelectAudio(audio.url);
              onClose();
            }}
          >
            {audio.name}
          </div>
        ))}
        <button onClick={onClose} style={{ marginTop: '20px' }}>Cerrar</button>
      </div>
    </div>
  );
}

// Estilos
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};

const modalStyle = {
  backgroundColor: '#fff',
  padding: '30px',
  borderRadius: '10px',
  textAlign: 'center',
  maxWidth: '400px',
  width: '90%'
};

const audioItemStyle = {
  margin: '10px 0',
  padding: '10px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  cursor: 'pointer'
};

export default AddAudioModal;