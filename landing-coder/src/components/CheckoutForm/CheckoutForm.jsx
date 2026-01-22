import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: "",
        emailConfirm: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Validación básica de ingeniería: ¿Los emails coinciden?
        if (userData.email !== userData.emailConfirm) {
            alert("Los correos electrónicos no coinciden");
            return;
        }

        // Si todo está bien, enviamos los datos hacia arriba
        onConfirm(userData);
    };

    return (
        <div className="card shadow-lg p-4 rounded-4 border-0">
            <h3 className="text-uppercase fw-bold mb-4 border-bottom border-danger border-3 d-inline-block">
                Datos de Contacto
            </h3>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label className="form-label fw-bold text-uppercase" style={{fontSize: '0.8rem'}}>Nombre Completo</label>
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control form-control-lg border-2" 
                        placeholder="Ej: Juan Pérez"
                        required 
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold text-uppercase" style={{fontSize: '0.8rem'}}>Teléfono</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        className="form-control form-control-lg border-2" 
                        placeholder="Ej: 11 2233 4455"
                        required 
                        value={userData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold text-uppercase" style={{fontSize: '0.8rem'}}>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control form-control-lg border-2" 
                        placeholder="moto@ejemplo.com"
                        required 
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label fw-bold text-uppercase" style={{fontSize: '0.8rem'}}>Confirmar Email</label>
                    <input 
                        type="email" 
                        name="emailConfirm" 
                        className="form-control form-control-lg border-2" 
                        placeholder="Repite tu email"
                        required 
                        value={userData.emailConfirm}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-danger w-100 py-3 fw-bold text-uppercase shadow">
                    Generar Orden de Compra
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;