import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // 1. Importamos el proveedor del contexto
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout.jsx';

function App() {
  return (
    /* 2. Envolvemos toda la aplicación con el CartProvider */
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a MotoShop!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoría" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </CartProvider>
  );
}

export default App;