const products = [
  {
    name: "Samsung Galaxy M14",
    price: 13999,
    rating: 4.6,
    category: "Electronics",
    brand: "Samsung",
    icon: "📱",
    image: "Images/samsunggalaxym14.jpg"
  },
  {
    name: "Sony WH-1000XM5 Headphones",
    price: 27990,
    rating: 4.8,
    category: "Electronics",
    brand: "Sony",
    icon: "🎧",
    image: "Images/sonyheadphones.jpg"
  },
  {
    name: "Apple AirPods Pro",
    price: 22999,
    rating: 4.7,
    category: "Electronics",
    brand: "Apple",
    icon: "🎧",
    image: "Images/apple airpods.jpg"
  },
  {
    name: "HP Pavilion x360 Laptop",
    price: 58990,
    rating: 4.5,
    category: "Electronics",
    brand: "HP",
    icon: "💻",
    image: "Images/HP Pavilion x360 Laptop.jpg"
  },
  {
    name: "boAt Stone 1200 Speaker",
    price: 3499,
    rating: 4.3,
    category: "Electronics",
    brand: "boAt",
    icon: "🔊",
    image: "Images/boAt Stone 1200 Speaker.jpg"
  },
  {
    name: "Sony Bravia 32\" Smart TV",
    price: 22990,
    rating: 4.4,
    category: "Electronics",
    brand: "Sony",
    icon: "📺",
    image: "Images/Sony Bravia 32 inches Smart TV.jpg"
  },
  {
    name: "Nike Dri-FIT T-Shirt",
    price: 1495,
    rating: 4.4,
    category: "Clothing",
    brand: "Nike",
    icon: "👕",
    image: "Images/Nike Dri-FIT T-Shirt.jpg"
  },
  {
    name: "Puma Track Pants",
    price: 1999,
    rating: 4.3,
    category: "Clothing",
    brand: "Puma",
    icon: "👖",
    image: "Images/Puma Track Pants.jpg"
  },
  {
    name: "Levi’s Slim Fit Jeans",
    price: 2999,
    rating: 4.5,
    category: "Clothing",
    brand: "Levi's",
    icon: "👖",
    image: "Images/Levi’s Slim Fit Jeans.jpg"
  },
  {
    name: "H&M Cotton Hoodie",
    price: 1799,
    rating: 4.2,
    category: "Clothing",
    brand: "H&M",
    icon: "🧥",
    image: "Images/H&M Cotton Hoodie.jpg"
  },
  {
    name: "Global Desi Kurti Set",
    price: 1999,
    rating: 4.3,
    category: "Ethnic Wear",
    brand: "Global Desi",
    icon: "🥻",
    image: "Images/Global Desi Kurti Set.jpg"
  },
  {
    name: "AND Floral Maxi Dress",
    price: 2599,
    rating: 4.4,
    category: "Clothing",
    brand: "AND",
    icon: "👗",
    image: "Images/AND Floral Maxi Dress.jpg"
  },
  {
    name: "Biba Girls Anarkali Dress",
    price: 2190,
    rating: 4.5,
    category: "Ethnic Wear",
    brand: "Biba",
    icon: "👘",
    image: "Images/Biba Girls Anarkali Dress.jpg"
  },
  {
    name: "FabAlley Skater Dress",
    price: 1599,
    rating: 4.2,
    category: "Western Wear",
    brand: "FabAlley",
    icon: "👗",
    image: "Images/FabAlley Skater Dress.webp"
  },
  {
    name: "Ziyaa Printed A-line Kurta",
    price: 1299,
    rating: 4.1,
    category: "Ethnic Wear",
    brand: "Ziyaa",
    icon: "🧥",
    image: "Images/Ziyaa Printed A-line Kurta.jpg"
  },
  {
    name: "Aurelia Straight Kurti",
    price: 999,
    rating: 4.0,
    category: "Ethnic Wear",
    brand: "Aurelia",
    icon: "👚",
    image: "Images/Aurelia Straight Kurti.jpg"
  },
  {
    name: "Zara Women's Dress",
    price: 2490,
    rating: 4.6,
    category: "Clothing",
    brand: "Zara",
    icon: "👗",
    image: "Images/Zara Women's Dress.jpg"
  },
  {
    name: "Nike Running Shoes",
    price: 3599,
    rating: 4.4,
    category: "Footwear",
    brand: "Nike",
    icon: "👟",
    image: "Images/Nike Running Shoes.jpg"
  },
  {
    name: "Skechers Sports Shoes",
    price: 4299,
    rating: 4.5,
    category: "Footwear",
    brand: "Skechers",
    icon: "👟",
    image: "Images/Skechers Sports Shoes.jpg"
  },
  {
    name: "Adidas Slides",
    price: 1399,
    rating: 4.3,
    category: "Footwear",
    brand: "Adidas",
    icon: "🩴",
    image: "Images/Adidas Slides.jpg"
  },
  {
    name: "Crocs Clogs",
    price: 2295,
    rating: 4.4,
    category: "Footwear",
    brand: "Crocs",
    icon: "👡",
    image: "Images/Crocs Clogs.jpg"
  },
  {
    name: "HRX Training Shoes",
    price: 3199,
    rating: 4.3,
    category: "Footwear",
    brand: "HRX",
    icon: "👟",
    image: "Images/HRX Training Shoes.jpg"
  },
  {
    name: "Bata Leather Formal Shoes",
    price: 2499,
    rating: 4.2,
    category: "Footwear",
    brand: "Bata",
    icon: "👞",
    image: "Images/Bata Leather Formal Shoes.jpg"
  },
  {
    name: "Lakmé Lipstick",
    price: 899,
    rating: 4.1,
    category: "Beauty",
    brand: "Lakmé",
    icon: "💄",
    image: "Images/Lakmé Lipstick.jpg"
  },
  {
    name: "Maybelline Mascara",
    price: 450,
    rating: 4.3,
    category: "Beauty",
    brand: "Maybelline",
    icon: "👁️",
    image: "Images/Maybelline Mascara.jpg"
  },
  {
    name: "Mamaearth Face Wash",
    price: 299,
    rating: 4.0,
    category: "Beauty",
    brand: "Mamaearth",
    icon: "🧴",
    image: "Images/Mamaearth Face Wash.jpg"
  },
  {
    name: "Nivea Body Lotion",
    price: 325,
    rating: 4.2,
    category: "Beauty",
    brand: "Nivea",
    icon: "🧴",
    image: "Images/Nivea Body Lotion.jpg"
  },
  {
    name: "Allen Solly Girls Fit & Flare Dress",
    price: 1899,
    rating: 4.3,
    category: "Clothing",
    brand: "Allen Solly",
    icon: "👗",
    image: "Images/Allen Solly Girls Fit & Flare Dress.jpg"
  },
  {
    name: "Van Heusen Handbag",
    price: 2499,
    rating: 4.4,
    category: "Accessories",
    brand: "Van Heusen",
    icon: "👜",
    image: "Images/Van Heusen Handbag.jpg"
  },
  {
    name: "The Body Shop Perfume",
    price: 1299,
    rating: 4.4,
    category: "Beauty",
    brand: "The Body Shop",
    icon: "🌸",
    image: "Images/the body shape perfume.jpg"
  },
  {
    name: "Maybelline Foundation",
    price: 599,
    rating: 4.1,
    category: "Beauty",
    brand: "Maybelline",
    icon: "💄",
    image: "Images/Maybelline Foundation.webp"
  },
  {
    name: "Ray-Ban Sunglasses",
    price: 6990,
    rating: 4.6,
    category: "Accessories",
    brand: "Ray-Ban",
    icon: "🕶️",
    image: "Images/Ray-Ban Sunglasses.jpg"
  },
  {
    name: "Fastrack Watch",
    price: 1999,
    rating: 4.3,
    category: "Accessories",
    brand: "Fastrack",
    icon: "⌚",
    image: "Images/Fastrack Watch.jpg"
  },
  {
    name: "Skybags Backpack",
    price: 1599,
    rating: 4.2,
    category: "Accessories",
    brand: "Skybags",
    icon: "🎒",
    image: "Images/Skybags Backpack.jpg"
  },
  {
    name: "Wildcraft Laptop Bag",
    price: 1899,
    rating: 4.4,
    category: "Accessories",
    brand: "Wildcraft",
    icon: "🎒",
    image: "Images/Wildcraft Laptop Bag.jpg"
  },
  {
    name: "Zouk Wallet",
    price: 999,
    rating: 4.1,
    category: "Accessories",
    brand: "Zouk",
    icon: "👛",
    image: "Images/Zouk Wallet.jpg"
  },
  {
    name: "Prestige Induction Stove",
    price: 2999,
    rating: 4.4,
    category: "Home Appliances",
    brand: "Prestige",
    icon: "🍳",
    image: "Images/Prestige Induction Stove.jpg"
  },
  {
    name: "LG 7 Kg Washing Machine (Top Load)",
    price: 16490,
    rating: 4.6,
    category: "Home Appliances",
    brand: "LG",
    icon: "🧺",
    image: "Images/LG 7 Kg Washing Machine (Top Load).jpg"
  },
  {
    name: "Havells Instanio Instant Water Heater (3L)",
    price: 3599,
    rating: 4.4,
    category: "Home Appliances",
    brand: "Havells",
    icon: "🚿",
    image: "Images/Havells Instanio Instant Water Heater (3L).jpg"
  },
  {
    name: "Samsung 253L Double Door Refrigerator",
    price: 23490,
    rating: 4.5,
    category: "Home Appliances",
    brand: "Samsung",
    icon: "🧊",
    image: "Images/Samsung 253L Double Door Refrigerator.jpg"
  }

];
