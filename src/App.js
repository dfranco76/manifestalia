import React, { useState, useEffect } from 'react';
import CanvasView from './components/CanvasView';
import Timeline from './components/Timeline';
import AddTextModal from './components/AddTextModal';
import AddImageModal from './components/AddImageModal';
import AddAudioModal from './components/AddAudioModal';

function App() {
  const [isTextModalOpen, setTextModalOpen] = useState(false);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [isAudioModalOpen, setAudioModalOpen] = useState(false);

  const [selectedText, setSelectedText] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedAudio, setSelectedAudio] = useState('');

  useEffect(() => {
    if (window.Canva && window.Canva.DesignButton) {
      window.Canva.DesignButton.init({
        selector: '#canva-button',
        designType: 'presentation',
        onDesignOpen: () => {
          console.log('Diseño abierto en Canva');
        }
      });
    }
  }, []);

  const handleTextSelect = (text) => {
    setSelectedText(text);
  };

  const handleImageSelect = (url) => {
    setSelectedImage(url);
  };

  const handleAudioSelect = (url) => {
    setSelectedAudio(url);
  };

  const handleSendToCanva = () => {
    if (!selectedText && !selectedImage && !selectedAudio) {
      alert('Por favor, selecciona al menos un texto, una imagen o un audio antes de enviar.');
      return;
    }

    // Aquí activamos el botón oculto de Canva
    const canvaButton = document.getElementById('canva-button');
    if (canvaButton) {
      canvaButton.click();
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Manifestalia</h1>

      <CanvasView 
        selectedText={selectedText} 
        selectedImage={selectedImage}
        selectedAudio={selectedAudio}
      />

      {/* Botones de acción */}
      <div style={{ margin: '20px 0' }}>
        <button style={buttonStyle} onClick={() => setTextModalOpen(true)}>Añadir Texto</button>
        <button style={buttonStyle} onClick={() => setImageModalOpen(true)}>Añadir Imagen</button>
        <button style={buttonStyle} onClick={() => setAudioModalOpen(true)}>Añadir Audio</button>
      </div>

      {/* Botón para Enviar a Canva */}
      <div style={{ margin: '20px 0' }}>
        <button 
          style={{ ...buttonStyle, backgroundColor: '#d1e7dd' }} 
          onClick={handleSendToCanva}
        >
          Enviar a Canva
        </button>
      </div>

      <Timeline />

      {/* Modales */}
      <AddTextModal 
        isOpen={isTextModalOpen}
        onClose={() => setTextModalOpen(false)}
        onSelectText={handleTextSelect}
      />
      <AddImageModal 
        isOpen={isImageModalOpen}
        onClose={() => setImageModalOpen(false)}
        onSelectImage={handleImageSelect}
      />
      <AddAudioModal 
        isOpen={isAudioModalOpen}
        onClose={() => setAudioModalOpen(false)}
        onSelectAudio={handleAudioSelect}
      />
    </div>
  );
}

// Estilo básico para los botones
const buttonStyle = {
  margin: '0 10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '8px',
  border: '1px solid #ccc',
  backgroundColor: '#f5f5f5'
};

export default App;