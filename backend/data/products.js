const products = [
  {
    name: "White Gold Plated Princess",
    imageUrl:
    "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    description:
    "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her",
    price: 1300,
  },

  {
    name: "Pierced Owl Rose",
    imageUrl:
    "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    description:
    "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    price: 600,
  },
  {
    name: "Hard Drive",
    imageUrl:
    "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    description:
    "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity",
    price: 439,
  },
  {
    name: "SanDisk SSD",
    imageUrl:
    "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    description:
    "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive",
    price: 109,
  },
  {
    name: "Silicon Power 256GB SSD",
    imageUrl:
    "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    description:
    "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup",
    price: 130,
  },
  {
    name: "WD 4TB Gaming  Hard Drive",
    imageUrl:
    "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    description:
    "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity",
    price: 250,
  },
  {
    name: "Curved Gaming Monitor",
    imageUrl:
    "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    description:
    "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 2233,
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
    "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
  },
  {
    name: "DANVOUY Womens T Shirt",
    imageUrl:
    "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    description:
    "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric ",
    price: 190,
  },{
    name: "Jacket Winter Coats",
    imageUrl:
    "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    description:
    "Note:The Jackets is US standard size, Please choose size as your usual wear Material",
    price: 370,
  },
  {
    name: "Moto Biker Jacket",
    imageUrl:"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    description:
    "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort",
    price: 109,
  },
  {
    name: "Jacket Women Windbreaker",
    imageUrl:
    "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    description:
    "Lightweight perfet for trip or casual wear---Long sleeve with hooded",
    price: 1300,
  },
  {
    name: "PlayStation 5",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    price: 499,
  },
  {
    name: "Iphone 13",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
  },
  {
    name: "Cannon EOS-1D",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
  },
  {
    name: "Amazon Alexa",
    imageUrl:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 50,
  },
  {
    name: "Audio Technica Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
  },

  {
    name: "Fjallraven",
    imageUrl:
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 170,
  },
  {
    name: "Mens T-Shirts",
    imageUrl:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket,",
    price: 439,
  },
  {
    name: "Mens Cotton Jacket",
    imageUrl:
     "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking",
    price: 49,
  },
  {
    name: "Mens Casual Slim Fit",
    imageUrl:
      "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    description:
      "The color could be slightly different between on the screen and in practice.",
    price: 100,
  },
  {
    name: "Silver  Bracelet",
    imageUrl:
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    description:
    "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl",
    price: 680,
  },
  {
    name: "Solid Gold Petite Micropave",
    imageUrl:
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days",
    price: 2003,
  },
  {
    name: "Jacket Winter Coats",
    imageUrl:
    "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    description:
    "Note:The Jackets is US standard size, Please choose size as your usual wear Material",
    price: 370,
  },
  {
    name: "Moto Biker Jacket",
    imageUrl:"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    description:
    "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort",
    price: 109,
  },
  {
    name: "Jacket Women Windbreaker",
    imageUrl:
    "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    description:
    "Lightweight perfet for trip or casual wear---Long sleeve with hooded",
    price: 1300,
  },
  {
    name: "Women's Short Sleeve Moisture",
    imageUrl:
    "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    description:
    "Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    price: 50,
  },
  {
    name: "Audio Technica Headphones",
    imageUrl:
    "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
  },
  
  {
    name: "Women's Short Sleeve Moisture",
    imageUrl:
    "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    description:
    "Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    price: 50,
  },
  {
    name: "Audio Technica Headphones",
    imageUrl:
    "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
    "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
  },

  {
    name: "DANVOUY Womens T Shirt",
    imageUrl:
    "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    description:
    "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric ",
    price: 190,
  },
];

module.exports = products;