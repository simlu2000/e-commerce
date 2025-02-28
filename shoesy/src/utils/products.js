const allproducts = [
  {
    id: 1,
    brand: "Nike",
    name: "Nike Air Max",
    image: "https://sneakernews.com/wp-content/uploads/2023/01/nike-air-max-95-kiss-my-airs-cddb52-1.jpg?w=1200",
    alt: "Nike Air Max shoes",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    color: ["White", "Grey", "Black", "Blue", "Yellow"],
    price: 150
  },
  {
    id: 2,
    brand: "Adidas",
    name: "Adidas Ultraboost",
    image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F12%2Fadidas-ultraboost-20-eg1341-closer-look-6.jpg?q=80&w=610&cbr=1&fit=max",
    alt: "Adidas Ultraboost shoes",
    sizes: [37, 38, 39, 40, 41, 42],
    color: ["Black", "Blue"],
    price: 180
  },
  {
    id: 3,
    brand: "Puma",
    name: "Puma Suede",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_550,h_550/global/399781/05/fnd/EEA/fmt/png/Sneakers-Suede-Classic-unisex",
    alt: "Puma Suede Classic shoes",
    sizes: [38, 39, 40, 41, 42, 43],
    color: ["White", "Red"],
    price: 120
  },
  {
    id: 4,
    brand: "Vans",
    name: "Vans Old Skool",
    image: "https://img01.ztat.net/article/spp-media-p1/1d120b21cbe7360c907f5ddfda94342d/9da699c86efb4f959aaf5e0b80ef1d0e.jpg?imwidth=1800",
    alt: "Vans Old Skool shoes",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    color: ["White", "Blu"],
    price: 75
  },
  {
    id: 5,
    brand: "Rebook",
    name: "Reebok Classic",
    image: "https://www.reebok.com/cdn/shop/files/100008492_SLC_eCom-tif.png?v=1736438138&width=600",
    alt: "Reebok Classic shoes",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    color: ["White"],
    price: 90
  },
  {
    id: 6,
    brand: "New Balance",
    name: "New Balance 530",
    image: "https://nb.scene7.com/is/image/NB/u530sma_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
    alt: "New Balance 574 shoes",
    sizes: [37, 38, 39, 40, 41, 42],
    color: ["White", "Beige", "Red", "Grey"],
    price: 140
  },
  {
    id: 7,
    brand: "Asics",
    name: "Asics Novablast 5",
    image: "https://images.asics.com/is/image/asics/1012B765_401_SR_RT_GLB?$sfcc-product$",
    alt: "Asics Novablast shoes",
    sizes: [38, 39, 40, 41, 42, 43],
    color: ["Cyan", "Black"],
    price: 130
  },
  {
    id: 8,
    brand: "Nike",
    name: "Nike Salomon",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    alt: "Salomon Speedcross shoes",
    sizes: [38, 39, 40, 41, 42, 43],
    color: ["White", "Red"],
    price: 160
  },
  {
    id: 9,
    brand: "Dr. Martens",
    name: "Dr. Martens 1460",
    image: "https://cdn.media.amplience.net/i/drmartens/24758001.80.jpg?$medium$",
    alt: "Dr. Martens 1460 shoes",
    sizes: [38, 39, 40, 41, 42, 43],
    color: ["Black"],
    price: 200
  },
  {
    id: 10,
    brand: "Nike",
    name: "Jordan Air 1",
    image: "https://cdn.flightclub.com/1000/TEMPLATE/243224/1.jpg",
    alt: "Jordan Air 1 shoes",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    color: ["Blue", "Gold"],
    price: 220
  },
  {
    id: 11,
    brand: "Fila",
    name: "Fila Disruptor",
    image: "https://i8.amplience.net/i/jpl/jd_711572_a?qlt=92&w=950&h=673&v=1&fmt=auto",
    alt: "Fila Disruptor shoes",
    sizes: [37, 38, 39, 40, 41, 42],
    color: ["White", "Blue"],
    price: 85
  },
  {
    id: 12,
    brand: "Saucony",
    name: "Saucony Jazz",
    image: "https://egress.storeden.net/gallery/6639518a202628567d082991",
    alt: "Saucony Jazz Original shoes",
    sizes: [38, 39, 40, 41, 42, 43],
    color: ["White", "Green", "Orange"],
    price: 100
  },
  {
    id: 13,
    brand: "Hoka",
    name: "Hoka One One Clifton 8",
    image: "https://areterunning.com/storage/2023/05/HK.F22.1119393-RYMZ.jpg",
    alt: "Hoka One One shoes",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    color: ["White", "Orange", "Yellow"],
    price: 150
  },
  {
    id: 14,
    brand: "Under Armour",
    name: "Under Armour HOVR Phantom",
    image: "https://www.shooos.it/media/catalog/product/cache/16/image/1350x778/9df78eab33525d08d6e5fb8d27136e95/u/n/under-armour-w-hovr-phantom-2-3023021-002.jpg",
    alt: "Under Armour HOVR shoes",
    sizes: [37, 38, 39, 40, 41, 42],
    color: ["Black"],
    price: 160
  },
  {
    id: 15,
    brand: "Mizuno",
    name: "Mizuno Wave Rider 25",
    image: "https://magazine.deporvillage.it/wp-content/uploads/2021/12/ZAPATILLAS-MIZUNO-WAVE-RIDER-25CF1161.jpg",
    alt: "Mizuno Wave Rider shoes",
    sizes: [38, 39, 40, 41, 42, 43],
    color: ["White", "Blue"],
    price: 130
  },
  {
    id: 16,
    brand: "Brooks",
    name: "Brooks Ghost 14",
    image: "https://www.runnersalliance.it/wp-content/uploads/2022/12/Brooks-Ghost-14-GTX-Uomo.jpg",
    alt: "Brooks Ghost shoes",
    sizes: [38, 39, 40, 41, 42, 43],
    color: ["White", "Black"],
    price: 140
  },
  {
    id: 17,
    brand: "Lacoste",
    name: "Lacoste Carnaby Evo",
    image: "https://photos6.spartoo.it/photos/186/18600529/18600529_1200_A.jpg",
    alt: "Lacoste Carnaby Evo shoes",
    sizes: [37, 38, 39, 40, 41, 42],
    color: ["White", "Pink"],
    price: 110
  },
  {
    id: 18,
    brand:"Timberland",
    name: "Timberland 6-inch Premium",
    image: "https://assets.timberland.eu/images/t_img/f_auto,h_650,w_650,e_sharpen:60/dpr_2.0/v1712584192/TB110061713-HERO/Timberland-Premium-6Inch-LaceUp-Waterproof-Boot-for-Men-in-Yellow.png",
    alt: "Timberland 6-inch Premium shoes",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    color:["Brown"],
    price: 120
  }

];
export default allproducts;