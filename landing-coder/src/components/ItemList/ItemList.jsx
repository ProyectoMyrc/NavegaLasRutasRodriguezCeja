import Item from '../Item/Item'; // Asegúrate de que la ruta sea correcta según tu carpeta

const ItemList = ({ products }) => {
    return (
        /* Movimos el div de la fila (row) aquí para que ItemList controle el grid */
        <div className="row g-4 justify-content-center">
            {products.map((moto) => (
                <div key={moto.id} className="col-12 col-md-6 col-lg-4">
                    <Item {...moto} />
                </div>
            ))}
        </div>
    );
};

export default ItemList;