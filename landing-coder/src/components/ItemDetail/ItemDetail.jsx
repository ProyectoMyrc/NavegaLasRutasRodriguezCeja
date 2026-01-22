import React, { useState, useContext } from 'react'; // 1. Importamos useContext
import { CartContext } from '../../context/CartContext'; // 2. Importamos el contexto
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, name, img, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    // 3. Consumimos la función addItem del contexto
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        
        // 4. Creamos el objeto del item y lo mandamos al carrito
        const item = { id, name, price, img };
        addItem(item, quantity);
        
        console.log(`Agregado al carrito: ${quantity} unidades de ${name}`);
    };

    return (
        <div className="card mb-3 border-0 shadow-lg p-4 rounded-4">
            <div className="row g-0 align-items-center">
                <div className="col-md-5">
                    <img src={img} alt={name} className="img-fluid rounded-4 shadow-sm" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h1 className="display-5 fw-bold text-uppercase italic">{name}</h1>
                        <p className="text-muted fs-5 mb-4">{description}</p>
                        <h2 className="text-danger fw-bolder mb-3">${price.toLocaleString()}</h2>
                        <p className="badge bg-dark p-2 mb-4">Stock disponible: {stock} unidades</p>

                        <div className="mt-4">
                            {quantityAdded > 0 ? (
                                <Link to="/cart" className="btn btn-danger w-100 py-3 fw-bold text-uppercase shadow">
                                    Finalizar Compra
                                </Link>
                            ) : (
                                <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;