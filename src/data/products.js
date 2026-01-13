const products = [
  {
    id: 1,
    name: "Cassava Flan",
    category: "Kakanin",
    image:
      "https://i.ytimg.com/vi/-Ku5yUqtGS4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAlsJYh2v3t_nfS0XvWUq6ji_ze3g",
    imageAlt: "Creamy Cassava Flan with golden caramel glaze",
    description:
      "The ultimate Filipino dessert hybrid. Our Cassava Flan features a base of buttery, grated cassava root baked to chewy perfection, crowned with a thick, velvety layer of creamy leche flan and golden caramel syrup.",
    prices: {
      solo: 60,
      couple: 100,
      family: 350,
      party: 650,
    },
    slug: "cassava-flan-YQaMSt",
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Baked Kakanin - Plain",
    category: "Kakanin",
    image:
      "https://www.seriouseats.com/thmb/W9cK95wrWNLlRtrxS3jqUWHonFs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210617-biko-vicky-wasik-seriouseats-seriouseats-27-62f3c7854d1443dfbe36f1b29dc1dae5.jpg",
    imageAlt: "Golden brown Baked Kakanin",
    description:
      "Experience the comforting taste of a Filipino fiesta. Our Baked Kakanin is made from premium glutinous rice and rich coconut milk, baked until golden with a soft, bouncy center, it offers the perfect balance of sweet and salty in every traditional bite.",
    prices: {
      solo: 60,
      couple: 100,
      family: 350,
      party: 650,
    },
    slug: "baked-kakanin-plain-Rtnlu1",
    isBestSeller: false,
  },
  {
    id: 3,
    name: "Baked Kakanin - Ube Macapuno",
    category: "Kakanin",
    image:
      "https://www.foxyfolksy.com/wp-content/uploads/2021/11/ube-biko-recipe.jpg",
    imageAlt: "Vibrant purple Ube Kakanin topped with Macapuno strings",
    description:
      "A purple yam lover's dream. We’ve infused our signature baked kakanin with real Ube Halaya for a deep, earthy sweetness, then topped it generously with silky Macapuno strings. It’s a rich, velvety upgrade to a classic favorite that’s as beautiful as it is delicious.",
    prices: {
      solo: 60,
      couple: 100,
      family: 350,
      party: 650,
    },
    slug: "baked-kakanin-ube-macapuno-k5iLT_",
    isBestSeller: false,
  },
  {
    id: 4,
    name: "Baked Kakanin - Buko Pandan",
    category: "Kakanin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7WSCa32gqKfIG1O2mQGSdiE92YtcQ7plOA&s",
    imageAlt: "Fragrant green Buko Pandan baked rice cake",
    description:
      "Tropical bliss in every bite. This version of our baked kakanin is infused with the sweet aroma of real Pandan leaves and mixed with tender young coconut (Buko) strips. It’s light, fragrant, and creamy, offering a refreshing twist on the traditional rice cake that smells as good as it tastes.",
    prices: {
      solo: 60,
      couple: 100,
      family: 350,
      party: 650,
    },
    slug: "baked-kakanin-buko-pandan-MfATNL",
    isBestSeller: false,
  },
  {
    id: 5,
    name: "Baked Kakanin - Yema",
    category: "Kakanin",
    image: "https://www.recipeshare.app/imagesFood/biko-yema-spread-recipe.jpg",
    imageAlt: "Baked Kakanin topped with thick golden yema custard",
    description:
      "A caramel lover's paradise. Our Baked Kakanin is elevated with a thick, velvety glaze of house-made Yema custard. The milky, caramel-like sweetness of the topping seeps into the soft rice cake base, creating a rich and indulgent treat that melts in your mouth. Truly the ultimate comfort dessert.",
    prices: {
      solo: 60,
      couple: 100,
      family: 350,
      party: 650,
    },
    slug: "baked-kakanin-yema-UbUwCJ",
    isBestSeller: false,
  },
  {
    id: 6,
    name: "Ube Halaya",
    category: "Classic Desserts",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzodNO9F_2Gf5CZ_Lk3zkRAPhsYhTy94L7w&s",
    imageAlt: "Smooth and creamy purple yam jam topped with latik",
    description:
      "The gold standard of Filipino sweets. Our Ube Halaya is slow-cooked to perfection using 100% real purple yam, creamy coconut milk, and real butter. It features a thick, jam-like consistency that is incredibly smooth and rich, finished with a hint of condensed milk for that classic, nostalgic sweetness you crave.",
    prices: {
      solo: 120,
      couple: 200,
      family: 700,
      party: 1300,
    },
    slug: "ube-halaya-QLNpmO",
    isBestSeller: true,
  },
  {
    id: 7,
    name: "Maja Blanca",
    category: "Classic Desserts",
    image:
      "https://theunlikelybaker.com/wp-content/uploads/2020/09/Maja-Blanca-Recipe-Feature-500x375.jpg",
    imageAlt: "Creamy white coconut pudding topped with golden sweet corn",
    description:
      "A silky, creamy celebration of coconut and corn. Our Maja Blanca is a luscious coconut milk pudding with a delicate sweetness, packed with juicy sweet corn kernels for a delightful pop of texture. Soft, cool, and incredibly refreshing, it’s the perfect light finish to any Filipino feast.",
    prices: {
      solo: 55,
      family: 350,
      party: 650,
    },
    slug: "maja-blanca-EQ0Zmz",
    isBestSeller: false,
  },
  {
    id: 8,
    name: "Leche Flan",
    category: "Classic Desserts",
    image:
      "https://i0.wp.com/www.Iankewks.com/wp-content/uploads/2022/12/IMG_4534.jpg?resize=800%2C530&ssl=1",
    imageAlt: "Smooth, golden Filipino Leche Flan with caramel glaze",
    description:
      "The gold standard of Filipino hospitality. Our Leche Flan is meticulously steamed to achieve a signature silky-smooth, melt-in-your-mouth texture without any air bubbles. Made with rich egg yolks and premium milk, it's finished with a deep, amber caramel sauce that provides a perfectly sweet and slightly smoky glaze.",
    prices: {
      solo: 120,
    },
    slug: "leche-flan-XZ556H",
    isBestSeller: true,
  },
];

export default products;
