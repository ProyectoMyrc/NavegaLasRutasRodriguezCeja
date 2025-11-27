import React from 'react';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      {/* 1. Insertamos la Barra de Navegación */}
      <NavBar />
      
      {/* 2. Insertamos el Contenedor y le pasamos la 'prop' greeting */}
      <ItemListContainer 
        greeting="¡Bienvenido a Mi Tienda Online! ¡Encuentra lo que necesitas!" 
      />
      
      {/* Puedes agregar más componentes aquí abajo, como el Footer */}
    </div>
  );
}

export default App;