const products = [
    {
        "id": 1,
        "name": "Notebook Pro",
        "description": "Notebook con pantalla de 15 pulgadas, 16GB RAM y 1TB SSD.",
        "image": "https://www.compumarket.com.py/storage/sku/apple-notebook-apple-macbook-air-15-m3-chip-8c-cpu-10c-gpu-8gb-256gb-ssd-space-gray-ingles-mrym3lla-1-1-1713382692.jpg",
        "price": 1299.99,
        "stock": 10,
        "brand": "Apple",
        "category": "notebook"
    },
    {
        "id": 2,
        "name": "Notebook Air",
        "description": "Notebook ligera con pantalla de 13 pulgadas, 8GB RAM y 256GB SSD.",
        "image": "https://tpc.ucf.edu/wp-content/uploads/sites/5/2020/03/macbook-air-spacegray-gallery2-20220606.png",
        "price": 999.99,
        "stock": 15,
        "brand": "Apple",
        "category": "notebook"
    },
    {
        "id": 3,
        "name": "Notebook Basic",
        "description": "Notebook económica con pantalla de 14 pulgadas, 4GB RAM y 128GB SSD.",
        "image": "https://www.cordobanotebooks.com.ar/wp-content/uploads/2024/05/aEdit.jpg",
        "price": 499.99,
        "stock": 20,
        "brand": "Lenovo",
        "category": "notebook"
    },
    {
        "id": 4,
        "name": "Notebook Gaming",
        "description": "Notebook para gamers con pantalla de 17 pulgadas, 32GB RAM y 1TB SSD.",
        "image": "https://lidernotebooks.com.ar/wp-content/uploads/2021/10/Msi-GF63-i5-Thin-10SCXR-222-41654651_0001_Capa-2.jpg",
        "price": 1999.99,
        "stock": 5,
        "brand": "MSI",
        "category": "notebook"
    },
    {
        "id": 5,
        "name": "Notebook Student",
        "description": "Notebook para estudiantes con pantalla de 14 pulgadas, 8GB RAM y 256GB SSD.",
        "image": "https://www.necxus.com.ar/products_image/34296/1000x1000_1.jpg",
        "price": 699.99,
        "stock": 25,
        "brand": "HP",
        "category": "notebook"
    },
    {
        "id": 6,
        "name": "Notebook Business",
        "description": "Notebook para negocios con pantalla de 15 pulgadas, 16GB RAM y 512GB SSD.",
        "image": "https://www.bidcom.com.ar/publicacionesML/productos/NOT00191/1000x1000-NOT00191.jpg",
        "price": 1199.99,
        "stock": 12,
        "brand": "HP",
        "category": "notebook"
    },
    {
        "id": 7,
        "name": "Smartphone X",
        "description": "Smartphone con pantalla de 6.1 pulgadas, 128GB de almacenamiento y cámara dual.",
        "image": "https://acdn.mitiendanube.com/stores/001/531/943/products/redmi-12-392f535e8ffba711af169928428536841-8d28991ddcee4b9c2416992843777176-1024-1024.jpg",
        "price": 799.99,
        "stock": 30,
        "brand": "Xiaomi",
        "category": "smartphone"
    },
    {
        "id": 8,
        "name": "Smartphone Y",
        "description": "Smartphone con pantalla de 6.5 pulgadas, 256GB de almacenamiento y cámara triple.",
        "image": "https://sharecomputacion.com/wp-content/uploads/2022/07/note13.png",
        "price": 999.99,
        "stock": 20,
        "brand": "Xiaomi",
        "category": "smartphone"
    },
    {
        "id": 9,
        "name": "iPhone 14",
        "description": "Smartphone con pantalla de 6.7 pulgadas, 512GB de almacenamiento y cámara cuádruple.",
        "image": "https://i0.wp.com/clavebursatil.com/tech/wp-content/uploads/2022/10/img-9.jpg",
        "price": 1199.99,
        "stock": 15,
        "brand": "Apple",
        "category": "smartphone"
    },
    {
        "id": 10,
        "name": "Smartphone Lite",
        "description": "Smartphone económico con pantalla de 5.8 pulgadas, 64GB de almacenamiento.",
        "image": "https://masonlineprod.vtexassets.com/arquivos/ids/246529/Smartphone-Motorola-Edge-20-Lite-128-6gb-6-67-Gris-1-10257.jpg",
        "price": 499.99,
        "stock": 40,
        "brand": "Motorola",
        "category": "smartphone"
    },
    {
        "id": 11,
        "name": "Iphone 15 Pro Max",
        "description": "Smartphone con pantalla de 6.9 pulgadas, 1TB de almacenamiento y cámara profesional.",
        "image": "https://maximstore.com/wp-content/uploads/2024/01/iPhone15PRO_familia.jpg",
        "price": 1499.99,
        "stock": 10,
        "brand": "Apple",
        "category": "smartphone"
    },
    {
        "id": 12,
        "name": "Samsung S23 Ultra",
        "description": "Smartphone con pantalla de 7.2 pulgadas, 512GB de almacenamiento y cámara cuádruple avanzada.",
        "image": "https://images.fravega.com/f1000/dd36193bdb3c470b67eb6382ad9e5552.jpg",
        "price": 1399.99,
        "stock": 12,
        "brand": "Samsung",
        "category": "smartphone"
    },
    {
        "id": 13,
        "name": "Smartwatch Fit",
        "description": "Smartwatch con monitor de ritmo cardíaco y seguimiento de actividad física.",
        "image": "https://images.fravega.com/f1000/f76a394047dad7ac41b6c4a5165456d6.jpg",
        "price": 199.99,
        "stock": 50,
        "brand": "FitTech",
        "category": "smartwatch"
    },
    {
        "id": 14,
        "name": "Apple Watch Serie 7",
        "description": "Smartwatch con GPS integrado, monitoreo del sueño y notificaciones inteligentes.",
        "image": "https://ar.oneclickstore.com/wp-content/uploads/2022/10/AWS7_GPS_41mm_Green_Aluminum_Clover_Sport_Band_PDP_Image_Position-1_COES.jpg",
        "price": 299.99,
        "stock": 30,
        "brand": "Apple",
        "category": "smartwatch"
    },
    {
        "id": 15,
        "name": "Smartwatch Lite",
        "description": "Smartwatch económico con seguimiento de actividad y notificaciones básicas.",
        "image": "https://www.bidcom.com.ar/publicacionesML/productos/REL00232/1000x1000-REL00232.jpg",
        "price": 99.99,
        "stock": 60,
        "brand": "EconoWatch",
        "category": "smartwatch"
    },
    {
        "id": 16,
        "name": "Smartwatch Sport",
        "description": "Smartwatch resistente al agua con modos de deporte y GPS.",
        "image": "https://cdn-xiaomi.waugi.com.ar/3004-thickbox_default/smartwatch-xiaomi-redmi-watch-4.jpg",
        "price": 249.99,
        "stock": 25,
        "brand": "SportWatch",
        "category": "smartwatch"
    },
    {
        "id": 17,
        "name": "Smartwatch Classic",
        "description": "Smartwatch con diseño clásico, notificaciones inteligentes y monitoreo del ritmo cardíaco.",
        "image": "https://authogar.vtexassets.com/arquivos/ids/197288/mi-bro-lite2-1.png",
        "price": 179.99,
        "stock": 35,
        "brand": "ClassicTech",
        "category": "smartwatch"
    },
    {
        "id": 18,
        "name": "Apple Watch Ultra 2",
        "description": "Smartwatch de lujo con pantalla AMOLED, GPS y monitoreo avanzado de salud.",
        "image": "https://acdn.mitiendanube.com/stores/001/248/099/products/apple-watch-ultra-2-49mm-titanium-azul-alpine-loop-medium-5bfbf4e889d49f603516964509993014-1024-1024.jpg",
        "price": 599.99,
        "stock": 20,
        "brand": "LuxuryWatch",
        "category": "smartwatch"
    },
    {
        "id": 19,
        "name": "Notebook Ultra",
        "description": "Notebook ultraligera con pantalla de 13.5 pulgadas, 16GB RAM y 512GB SSD.",
        "image": "https://i0.wp.com/hardcorecomputacion.com.ar/wp-content/uploads/2023/10/9TG18.jpg",
        "price": 1499.99,
        "stock": 8,
        "brand": "Dell",
        "category": "notebook"
    },
    {
        "id": 20,
        "name": "Smartphone Mini",
        "description": "Smartphone compacto con pantalla de 5.5 pulgadas y 128GB de almacenamiento.",
        "image": "https://m.media-amazon.com/images/I/51SwJ8mKpWL.jpg",
        "price": 699.99,
        "stock": 25,
        "brand": "MiniPhone",
        "category": "smartphone"
    },
    {
        "id": 21,
        "name": "Smartwatch Kids",
        "description": "Smartwatch para niños con GPS y funciones de seguridad.",
        "image": "https://images.fravega.com/f1000/ff0df2b56d95a68809361a1a955791a5.jpg",
        "price": 149.99,
        "stock": 40,
        "brand": "KidWatch",
        "category": "smartwatch"
    },
    {
        "id": 22,
        "name": "iPad Pro",
        "description": "Tablet de 12.9 pulgadas con 1TB de almacenamiento y soporte para lápiz óptico.",
        "image": "https://maximstore.com/wp-content/uploads/2023/05/iPad_Pro_Wi-Fi_11_in_4th_generation_Space_Gray_PDP_Image_Position-1b_MXLA.jpg",
        "price": 899.99,
        "stock": 20,
        "brand": "Apple",
        "category": "tablet"
    },
    {
        "id": 23,
        "name": "Tablet Air",
        "description": "Tablet ligera de 10.5 pulgadas con 128GB de almacenamiento y pantalla Retina.",
        "image": "https://www.bidcom.com.ar/publicacionesML/productos/TABLEK10/1000x1000-TABLEK10.jpg",
        "price": 599.99,
        "stock": 25,
        "brand": "Lenovo",
        "category": "tablet"
    },
    {
        "id": 24,
        "name": "Tablet Mini",
        "description": "Tablet compacta de 8 pulgadas con 64GB de almacenamiento y cámara de 8MP.",
        "image": "https://dcdn.mitiendanube.com/stores/004/075/478/products/tablet-samsung-a7-lite-87-3gb-ram-01261ade5cec8cf3ef17050718980137-1024-1024.jpg",
        "price": 399.99,
        "stock": 30,
        "brand": "Samsung",
        "category": "tablet"
    },
    {
        "id": 25,
        "name": "Tablet Kids",
        "description": "Tablet resistente para niños de 7 pulgadas con aplicaciones educativas preinstaladas.",
        "image": "https://images.fravega.com/f1000/12006481c3bd60edbe4b5bb8eeab0023.png",
        "price": 199.99,
        "stock": 50,
        "brand": "KidTab",
        "category": "tablet"
    },
    {
        "id": 26,
        "name": "Tablet Business",
        "description": "Tablet de 11 pulgadas con teclado desmontable y 256GB de almacenamiento, ideal para negocios.",
        "image": "https://cdn-xiaomi.waugi.com.ar/2680-home_default/tablet-xiaomi-pad-6-6gb-ram-128gb-rom.jpg",
        "price": 799.99,
        "stock": 15,
        "brand": "Xiaomi",
        "category": "tablet"
    },
    {
        "id": 27,
        "name": "Tablet Gaming",
        "description": "Tablet de 10 pulgadas optimizada para juegos, con 128GB de almacenamiento y procesador rápido.",
        "image": "https://static0.anpoimages.com/wordpress/wp-content/uploads/2023/07/galaxy-tab-s9-graphite-render-square.jpg",
        "price": 499.99,
        "stock": 20,
        "brand": "Samsung",
        "category": "tablet"
    },
    {
        "id": 28,
        "name": "Tablet Kindle",
        "description": "Tablet de 7 pulgadas con pantalla e-ink y 32GB de almacenamiento, ideal para leer libros electrónicos.",
        "image": "https://www.soscomputacion.com.ar/24447/amazon-kindle-paperwhite-8gb-wifi-waterproof-6-pulgadas-10-generacion-con-luz-libro-digital-ebook-reader-black.jpg",
        "price": 149.99,
        "stock": 40,
        "brand": "Amazon",
        "category": "tablet"
    }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find((prod) => prod.id == productId))
        }, 1100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod)=> prod.category == categoryId));
        }, 1100);
    });
};

export const getProductsByBrand = (brandId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod)=> prod.brand == brandId));
        }, 1100);
    });
};
