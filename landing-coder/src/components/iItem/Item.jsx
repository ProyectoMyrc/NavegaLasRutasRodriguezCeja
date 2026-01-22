import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price }) => {
    return (
        <article className="card h-100 border-0 shadow-sm custom-card">
            {/* Contenedor de Imagen */}
            <div className="p-3 bg-light rounded-top d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                <img 
                    src={img} 
                    alt={name} 
                    className="img-fluid h-100 object-fit-contain"
                />
            </div>
            
            {/* Cuerpo de la Card */}
            <div className="card-body text-center d-flex flex-column">
                <h3 className="h5 fw-bold text-uppercase">{name}</h3>
                <p className="card-text fs-5 text-muted mb-4">
                    Precio: <span className="text-dark fw-bold">${price.toLocaleString()}</span>
                </p>
                
                {/* Botón que navega al detalle usando el ID de la moto */}
                <Link to={`/item/${id}`} className="btn btn-danger mt-auto py-2 fw-bold text-uppercase shadow-sm">
                    Ver Detalle
                </Link>
            </div>
        </article>
    );
};

export default Item;