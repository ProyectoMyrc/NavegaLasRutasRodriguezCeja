import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ItemListContainer.css';
import { getProducts } from '../../data/productsMock'; // Verifica que apunte a tu carpeta data

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts(categoryId)
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error al cargar:", err))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <main className="item-list-container" style={{ padding: '20px', textAlign: 'center' }}>
            <h2>{greeting}</h2>
            {loading ? (
                <p>Cargando catálogo...</p>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    {products.map((moto) => (
                        <article key={moto.id} className="product-card" style={{ border: '1px solid #ddd', padding: '15px', width: '250px', borderRadius: '10px' }}>
                        <img src={moto.img} alt={moto.name} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
                        <h3>{moto.name}</h3>
                        <p>Precio: ${moto.price}</p>
                        <Link to={`/item/${moto.id}`} className="btn-detail" style={{ color: 'red', fontWeight: 'bold' }}>
                            Ver Detalle
                        </Link>
                    </article>
                    ))}
                </div>
            )}
        </main>
    );
};

export default ItemListContainer;