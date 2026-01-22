import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

const Checkout = () => {
    const [orderId, setOrderId] = useState("");
    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async (userData) => {
        try {
            const order = {
                buyer: userData,
                items: cart,
                total: total(),
                date: serverTimestamp()
            };

            const ordersRef = collection(db, "orders");
            const response = await addDoc(ordersRef, order);
            
            setOrderId(response.id); // Este es el ID real de Firebase
            clearCart();
            
        } catch (error) {
            console.error("Error al generar la orden en Firebase:", error);
        }
};  

    if (orderId) {
        return (
            <div className="container my-5 text-center p-5 bg-light rounded-5 shadow">
                <i className="bi bi-check-circle-fill text-success" style={{fontSize: '4rem'}}></i>
                <h2 className="mt-3 fw-bold text-uppercase">¡Compra Exitosa!</h2>
                <p className="fs-5">Tu número de orden es: <span className="badge bg-dark fs-5">{orderId}</span></p>
                <p>Guarda este código para el seguimiento de tu moto.</p>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <CheckoutForm onConfirm={createOrder} />
                </div>
            </div>
        </div>
    );
};

export default Checkout;