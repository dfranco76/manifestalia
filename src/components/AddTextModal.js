import React from 'react';

function AddTextModal({ isOpen, onClose, onSelectText }) {
  if (!isOpen) return null;

  // Textos predefinidos
  const texts = [
    "Estoy logrando todo lo que deseo.",
    "Cada día me acerco más a mis sueños.",
    "Soy capaz, soy fuerte, soy imparable.",
    "Mi energía positiva atrae oportunidades.",
    "Estoy agradecido por todo lo que viene."
  ];

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Elige un texto</h2>
        {texts.map((text, index) => (
          <div 
            key={index}
            onClick={() => {
              onSelectText(text);
              onClose();
            }}
            style={textItemStyle}
          >
            {text}
          </div>
        ))}
        <button onClick={onClose} style={{ marginTop: '20px' }}>Cerrar</button>
      </div>
    </div>
  );
}

// Estilos del modal
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

const textItemStyle = {
  margin: '10px 0',
  padding: '10px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  cursor: 'pointer'
};

export default AddTextModal;