const products = [
    { 
        id: '1', 
        name: 'Yamaha R1', 
        category: 'deportivas', 
        price: 18500, 
        stock: 2, 
        description: 'Motor de 998 cc con tecnología de MotoGP.',
        img: 'https://images.tcdn.com.br/img/img_prod/693836/yamaha_yzf_r1_2023_azul_6403_1_d64d5098e987118182b885361288c1c0.jpg'
    },
    { 
        id: '2', 
        name: 'Honda CB500F', 
        category: 'urbanas', 
        price: 6800, 
        stock: 5, 
        description: 'Moto ágil y ligera, perfecta para la ciudad.',
        img: 'https://powersports.honda.com/street/sport/-/media/products/family/cb500f/trims/cb500f/2022/2022-cb500f-matte_gray_metallic-600x400.png'
    },
    { 
        id: '3', 
        name: 'BMW R 1250 GS', 
        category: 'adventure', 
        price: 22000, 
        stock: 3, 
        description: 'La reina de las motos de aventura para cualquier terreno.',
        img: 'https://www.bmw-motorrad.com.mx/content/dam/bmwmotorradnsc/marketMX/common/images/models/adventure/r1250gs/2022/sp-r1250gs-p0n2s.png'
    }
];

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(p => p.category === categoryId) : products);
        }, 500);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(p => p.id === id));
        }, 500);
    });
};