import React from 'react';

function AddImageModal({ isOpen, onClose, onSelectImage }) {
  if (!isOpen) return null;

  // Imágenes predefinidas (pueden ser URLs públicas o imágenes locales en public/)
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1516594798947-e65505dbb29d",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
  ];

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Elige una imagen</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {images.map((url, index) => (
            <img 
              key={index}
              src={url}
              alt="opción"
              style={imageStyle}
              onClick={() => {
                onSelectImage(url);
                onClose();
              }}
            />
          ))}
        </div>
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
  maxWidth: '600px',
  width: '90%'
};

const imageStyle = {
  width: '100px',
  height: '100px',
  objectFit: 'cover',
  margin: '10px',
  cursor: 'pointer',
  borderRadius: '8px',
  border: '2px solid transparent'
};

export default AddImageModal;