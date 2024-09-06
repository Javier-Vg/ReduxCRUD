import { useState } from 'react';


function Modales() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Función para abrir el modal
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    // Función para cerrar el modal
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className="App">
        <h1>Ejemplo de Modal en React</h1>
        <button onClick={openModal}>Abrir Modal</button>
  
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>Título del Modal</h2>
              <p>Este es el contenido del modal en React.</p>
            </div>
          </div>
        )}
      </div>
    );
}

export default Modales