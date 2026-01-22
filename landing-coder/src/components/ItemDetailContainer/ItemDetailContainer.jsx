import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/productsMock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProductById(itemId)
            .then(res => setItem(res))
            .catch(err => console.error("Error al obtener producto:", err))
            .finally(() => setLoading(false));
    }, [itemId]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center my-5">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Cargando detalles de la moto...</span>
                </div>
            </div>
        );
    }

    return (
        <main className="container my-5">
            {item ? <ItemDetail {...item} /> : <h2 className="text-center">Producto no encontrado</h2>}
        </main>
    );
};

export default ItemDetailContainer;