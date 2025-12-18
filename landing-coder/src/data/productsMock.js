export const products = [
    {
        id: "1",
        name: "Yamaha R1",
        category: "deportivas",
        price: 18500,
        stock: 3,
        description: "Motor de 998 cc con tecnología de MotoGP.",
        img: "/img/yamaha-NMAX.jpg" 
    },
    
    {
        id: "3",
        name: "BMW R 1250 GS",
        category: "adventure",
        price: 22000,
        stock: 2,
        description: "La reina de las motos de aventura para cualquier terreno.",
        img: "/img/GS_310_R.jpg"
    },
    {
        id: "4",
        name: "Kawasaki Ninja 400",
        category: "deportivas",
        price: 7500,
        stock: 4,
        description: "Estilo Ninja agresivo y rendimiento líder en su clase.",
        img: "/img/Ninja_400.jpeg"
    },
    {
        id: "5",
        name: "KTM Duke 390",
        category: "urbanas",
        price: 5900,
        stock: 6,
        description: "La 'Corner Rocket' definitiva para divertirse en curvas.",
        img: "/img/Duke390.png"
    },
    {
        id: "6",
        name: "Honda CBR250R",
        category: "deportivas",
        price: 4500,
        stock: 10,
        description: "Rendimiento deportivo para pilotos que inician.",
        img: "/img/Honda_CBR250R.jpeg"
    },
    {
        id: "7",
        name: "Harley-Davidson Iron 883",
        category: "urbanas",
        price: 12000,
        stock: 2,
        description: "Estilo minimalista y agresivo con el alma de Milwaukee.",
        img: "/img/Harley-DavidsonIron883.jpg"
    },
    {
        id: "8",
        name: "Yamaha MT-07",
        category: "urbanas",
        price: 8200,
        stock: 4,
        description: "Par motor brutal y diseño Dark Side of Japan.",
        img: "/img/MT-07yamaha.jpeg"
    },
    {
        id: "9",
        name: "Suzuki Gixxer 250",
        category: "urbanas",
        price: 3900,
        stock: 12,
        description: "Tecnología de carreras en una moto para el diario.",
        img: "/img/gixxer-250-abs.png"
    },
    {
        id: "10",
        name: "Pulsar NS 200",
        category: "urbanas",
        price: 3200,
        stock: 15,
        description: "Potencia y agilidad Naked líder en su segmento.",
        img: "/img/Pulsar_NS_200.webp"
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