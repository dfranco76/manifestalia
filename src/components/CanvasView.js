import React from 'react';

function CanvasView({ selectedText, selectedImage, selectedAudio }) {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      border: '2px dashed #cccccc',
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      {selectedImage && (
        <img 
          src={selectedImage} 
          alt="Seleccionada" 
          style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '20px' }}
        />
      )}
      {selectedText ? (
        <h2>{selectedText}</h2>
      ) : (
        <p>Aquí se mostrará tu película mental</p>
      )}
      {selectedAudio && (
        <audio controls style={{ marginTop: '20px' }}>
          <source src={selectedAudio} type="audio/mpeg" />
          Tu navegador no soporta la reproducción de audio.
        </audio>
      )}
    </div>
  );
}

export default CanvasView;