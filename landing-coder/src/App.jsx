// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
// src/App.jsx
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a MotoShop!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoría" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;