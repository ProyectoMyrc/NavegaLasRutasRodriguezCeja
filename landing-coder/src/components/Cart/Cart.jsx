import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, removeItem, total } = useContext(CartContext);

    // Si el carrito está vacío, mostramos un mensaje condicional (Requisito de la consigna)
    if (cart.length === 0) {
        return (
            <div className="container my-5 text-center">
                <h2 className="mb-4">Tu carrito de MotoShop está vacío</h2>
                <Link to="/" className="btn btn-danger btn-lg text-uppercase fw-bold">
                    Ver Catálogo de Motos
                </Link>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <h1 className="text-uppercase fw-bolder border-bottom border-danger border-3 d-inline-block mb-4">
                Tu Pedido
            </h1>

            <div className="table-responsive shadow-sm rounded-3">
                <table className="table table-hover align-middle bg-white mb-0">
                    <thead className="table-dark">
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={item.img} alt={item.name} style={{ width: '80px' }} className="me-3 rounded" />
                                        <span className="fw-bold">{item.name}</span>
                                    </div>
                                </td>
                                <td>{item.quantity}</td>
                                <td>${item.price.toLocaleString()}</td>
                                <td className="fw-bold">${(item.price * item.quantity).toLocaleString()}</td>
                                <td>
                                    <button onClick={() => removeItem(item.id)} className="btn btn-outline-danger btn-sm">
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="d-flex flex-column align-items-end mt-4 gap-3">
                <h3 className="fw-bolder">Total: <span className="text-danger">${total().toLocaleString()}</span></h3>
                <div className="d-flex gap-2">
                    <button onClick={clearCart} className="btn btn-outline-dark text-uppercase fw-bold">
                        Vaciar Carrito
                    </button>
                    <Link to="/checkout" className="btn btn-danger text-uppercase fw-bold px-5">
                        Finalizar Compra
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;