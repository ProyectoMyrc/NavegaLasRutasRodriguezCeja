import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducts } from '../../data/productsMock'; 
import Hero from '../Hero/Hero.jsx';
import './ItemListContainer.css';

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
        <>
            {/* Solo mostramos el Hero en la página de inicio (cuando no hay categoryId) */}
            {!categoryId && <Hero />}

            <main className="container my-5">
                {/* Título Estilo Racing */}
                <h2 className="text-center fw-bolder text-uppercase mb-5 pb-2 border-bottom border-danger border-3 d-inline-block">
                    {greeting}
                </h2>

                {loading ? (
                    <div className="d-flex justify-content-center my-5">
                        <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                ) : (
                    /* Grid de Bootstrap: 1 columna en móvil, 2 en tablet, 3 en desktop */
                    <div className="row g-4 justify-content-center">
                        {products.map((moto) => (
                            <div key={moto.id} className="col-12 col-md-6 col-lg-4">
                                <article className="card h-100 border-0 shadow-sm custom-card">
                                    {/* Contenedor de Imagen */}
                                    <div className="p-3 bg-light rounded-top d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                                        <img 
                                            src={moto.img} 
                                            alt={moto.name} 
                                            className="img-fluid h-100 object-fit-contain"
                                        />
                                    </div>
                                    
                                    {/* Cuerpo de la Card */}
                                    <div className="card-body text-center d-flex flex-column">
                                        <h3 className="h5 fw-bold text-uppercase">{moto.name}</h3>
                                        <p className="card-text fs-5 text-muted mb-4">
                                            Precio: <span className="text-dark fw-bold">${moto.price.toLocaleString()}</span>
                                        </p>
                                        
                                        <Link to={`/item/${moto.id}`} className="btn btn-danger mt-auto py-2 fw-bold text-uppercase shadow-sm">
                                            Ver Detalle
                                        </Link>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </>
    );
};

export default ItemListContainer;