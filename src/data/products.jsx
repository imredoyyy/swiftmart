// Product 1
import SwivelChair from "../assets/product-images/swivel-chair.jpg";
import SwivelChairGray from "../assets/product-images/swivel-chair-gray.jpg";
import SwivelChairBlack from "../assets/product-images/swivel-chair-black.jpg";

// Product 2
import LivingRoomSofa from "../assets/product-images/living-room-sofa.jpg";
import LivingRoomSofaBlack from "../assets/product-images/living-room-sofa-black.jpg";

// Product 3
import Lamp from "../assets/product-images/lamp.jpg";
import LampYellow from "../assets/product-images/lamp-yellow.jpg";

// Product 4
import FlowerVase from "../assets/product-images/flower-vase.png";
import FlowerVase2 from "../assets/product-images/flower-vase-2.png";
import FlowerVase3 from "../assets/product-images/flower-vase-3.png";

// Product 5
import WallClock from "../assets/product-images/wall-clock.jpg";
import WallClockBlack from "../assets/product-images/wall-clock-black.jpg";
import WallClockBrown from "../assets/product-images/wall-clock-brown.png";

// Product 6
import SunPendant from "../assets/product-images/sun-pendant.png";
import SunPendantBlackWhite from "../assets/product-images/sun-pendant-black-white.png";
import SunPendantWhite from "../assets/product-images/sun-pendant-white.png";

// Product 7
import MinimalShelf from "../assets/product-images/minimal-shelf.jpg";
import MinimalShelf2 from "../assets/product-images/minimal-shelf-2.jpg";
import MinimalShelf3 from "../assets/product-images/minimal-shelf-3.png";

// Product 8
import TableLamp from "../assets/product-images/table-lamp.png";
import TableLamp2 from "../assets/product-images/table-lamp-2.jpg";
import TableLamp3 from "../assets/product-images/table-lamp-3.jpg";

// Product 9
import WallLamp from "../assets/product-images/wall-lamp.png";
import WallLamp2 from "../assets/product-images/wall-lamp-2.jpg";
import WallLamp3 from "../assets/product-images/wall-lamp-3.jpg";

// Product 10
import BaltsarChairNavyBlue from "../assets/product-images/baltsar-chair-navy-blue.png";
import BaltsarChairBlack from "../assets/product-images/baltsar-chair-black.png";
import BaltsarChairWhite from "../assets/product-images/baltsar-chair-white.png";

// Product 11
import ChildsDeskChairGray from "../assets/product-images/childs-desk-chair-gray.png";
import ChildsDeskChairSilverGray from "../assets/product-images/childs-desk-chair-silver-gray.png";
import ChildsDeskChairWhite from "../assets/product-images/childs-desk-chair-white.png";

// Product 12
import MinimalisticShelveBrown from "../assets/product-images/minimalistic-shelve-brown.png";
import MinimalisticShelveWhite from "../assets/product-images/minimalistic-shelve-white.png";

// Product 13
import OutdoorSofaGray from "../assets/product-images/outdoor-sofa-gray.png";
import OutdoorSofaNavyBlue from "../assets/product-images/outdoor-sofa-navy-blue.png";

// Product 14
import WallClock2 from "../assets/product-images/wall-clock-2.png";
import WallClock2Wall from "../assets/product-images/wall-clock-2-wall.png";

// Product 15
import DigitalAlarmClock from "../assets/product-images/digital-alarm-clock.png";
import DigitalAlarmClock2 from "../assets/product-images/digital-alarm-clock-2.png";

export const products = [
  {
    id: 1,
    category: "chair",
    name: "swivel chair",
    img: SwivelChair,
    otherImg: {
      "Light Gray": SwivelChair,
      "Dark Gray": SwivelChairGray,
      Black: SwivelChairBlack,
    },
    colors: ["Light Gray", "Dark Gray", "Black"],
    priceCents: 2950,
    desc: "Introducing our stylish and comfortable Swivel Chair, the perfect addition to any modern workspace or home office. Designed for both style and functionality, this swivel chair features a sleek and contemporary design that will complement any decor. The chair is crafted with high-quality & durable materials, providing both durability & comfort",
    weight: "4kg",
    dimension: "110 x 72 cm",
  },
  {
    id: 2,
    category: "sofa",
    name: "living room sofa",
    img: LivingRoomSofa,
    otherImg: {
      "Steel Blue": LivingRoomSofa,
      "Slate Gray": LivingRoomSofaBlack,
    },
    colors: ["Steel Blue", "Slate Gray"],
    priceCents: 4970,
    desc: "Transform your living space into a haven of comfort and style with our luxurious Living Room Sofa. Crafted with meticulous attention to detail, that effortlessly blends into any decor style. The sofa is covered in premium fabric that not only looks elegant but also feels soft to the touch",
    weight: "6.35kg",
    dimension: "320 x 180 x 76 cm",
  },
  {
    id: 3,
    category: "lamp",
    name: "modern led lamp",
    img: Lamp,
    otherImg: {
      Green: Lamp,
      Yellow: LampYellow,
    },
    colors: ["Green", "Yellow"],
    priceCents: 2450,
    desc: "Brighten up your space with our stylish Hanging Lamp! This lamp is designed to look great and provide light wherever you need it. It's made to last and has an adjustable cord so you can hang it at just the right height. Plus, its warm glow creates a cozy atmosphere that's perfect for any room.",
    weight: "0.4kg",
    dimension: "110 x 72 cm",
  },
  {
    id: 4,
    category: "home-decor",
    name: "ceramic flower vase",
    img: FlowerVase,
    otherImg: {
      "Light Gray": FlowerVase,
      FlowerVase2,
      FlowerVase3,
    },
    colors: ["Light Gray"],
    priceCents: 1800,
    desc: "Add a touch of beauty to your home with our Ceramic Flower Vase! This vase is crafted to show off your favorite flowers in style. Its smooth ceramic finish goes well with any decor, from modern to classic.",
    weight: "0.6kg",
    dimension: "90 x 55 cm",
  },
  {
    id: 5,
    category: "clock",
    name: "modern wall clock",
    img: WallClock,
    otherImg: {
      "Light Gray": WallClock,
      "Charcoal Gray": WallClockBlack,
      "Silver Gray": WallClockBrown,
    },
    colors: ["Light Gray", "Charcoal Gray", "Silver Gray"],
    priceCents: 3570,
    desc: "Keep track of time in style with our Modern Wall Clock! It's a sleek clock designed to look great on any wall. The clean, modern design adds a touch of sophistication to your space.",
    weight: "0.8kg",
    dimension: "300 x 300 cm",
  },
  {
    id: 6,
    category: "lamp",
    name: "sun pendant lamp",
    img: SunPendant,
    otherImg: {
      "Black-Brown": SunPendant,
      "White-Brown": SunPendantWhite,
      "Black-White": SunPendantBlackWhite,
    },
    colors: ["Black-Brown", "White-Brown", "Black-White"],
    priceCents: 6500,
    desc: "Bring sunshine into your home with our Sun Pendant Lamp! It's a stylish lamp that hangs from the ceiling like a sunbeam. Its design adds warmth and light to any room.",
    weight: "0.4kg",
    dimension: "30 x 30 cm",
  },
  {
    id: 7,
    category: "home-decor",
    name: "minimalistic shelf",
    img: MinimalShelf,
    otherImg: {
      Black: MinimalShelf,
      MinimalShelf2,
      MinimalShelf3,
    },
    colors: ["Black"],
    priceCents: 5440,
    desc: "Add organization and style to your space with our Minimalistic Shelf! It's a simple yet stylish shelf designed to hold your essentials without taking up too much space.",
    weight: "2.5kg",
    dimension: "550 x 420 cm",
  },
  {
    id: 8,
    category: "lamp",
    name: "table lamp",
    img: TableLamp,
    otherImg: {
      Gray: TableLamp,
      "Bronze Brown": TableLamp2,
      Silver: TableLamp3,
    },
    colors: ["Gray", "Bronze Brown", "Silver"],
    priceCents: 4750,
    desc: "Light up your space with our Table Lamp! It's a stylish lamp designed to sit on your table or desk. Its modern design adds a touch of sophistication to any room.",
    weight: "0.75kg",
    dimension: "180 x 70 cm",
  },
  {
    id: 9,
    category: "lamp",
    name: "wall lamp",
    img: WallLamp,
    otherImg: {
      "Dark Gray": WallLamp,
      WallLamp2,
      WallLamp3,
    },
    colors: ["Dark Gray"],
    priceCents: 6800,
    desc: "Illuminate your space with our Wall Lamp! It's a sleek and modern lamp that mounts to your wall. Perfect for adding light to any room without taking up space on your table or floor.",
    weight: "1.4kg",
    dimension: "270 x 70 cm",
  },
  {
    id: 10,
    category: "chair",
    name: "baltsar chair",
    img: BaltsarChairNavyBlue,
    otherImg: {
      "Navy Blue": BaltsarChairNavyBlue,
      Black: BaltsarChairBlack,
      White: BaltsarChairWhite,
    },
    colors: ["Navy Blue", "Black", "White"],
    priceCents: 4500,
    desc: "Introducing the Baltsar Chair - a blend of Scandinavian simplicity and comfort. Crafted with high-quality materials, this chair features a curved backrest and cushioned seat for optimal support.",
    weight: "1.2kg",
    dimension: "270 x 70 cm",
  },
  {
    id: 11,
    category: "chair",
    name: "child's desk chair",
    img: ChildsDeskChairGray,
    otherImg: {
      Gray: ChildsDeskChairGray,
      "Silver Gray": ChildsDeskChairSilverGray,
      White: ChildsDeskChairWhite,
    },
    colors: ["Gray", "Silver Gray", "White"],
    priceCents: 2900,
    desc: "Make studying or creative time more enjoyable for your little one with our Child's Desk Chair. Designed with their comfort and safety in mind, this chair features a sturdy construction and ergonomic design. Its adjustable height ensures a perfect fit for growing kids, while the colorful and playful design adds a fun touch to any child's workspace.",
    weight: "1.1kg",
    dimension: "270 x 70 cm",
  },
  {
    id: 12,
    category: "home-decor",
    name: "minimalistic shelf",
    img: MinimalisticShelveBrown,
    otherImg: {
      Brown: MinimalisticShelveBrown,
      White: MinimalisticShelveWhite,
    },
    colors: ["Brown", "White"],
    priceCents: 2200,
    desc: "Keep your room essentials organized with our sleek and modern Minimalistic Shelf. Its clean lines and minimalist design make it a stylish addition to any room decor. Perfect for storing books, clothes and more",
    weight: "1.4kg",
    dimension: "270 x 70 cm",
  },
  {
    id: 13,
    category: "sofa",
    name: "outdoor sofa",
    img: OutdoorSofaGray,
    otherImg: {
      Gray: OutdoorSofaGray,
      "Navy Blue": OutdoorSofaNavyBlue,
    },
    colors: ["Gray", "Navy Blue"],
    priceCents: 7800,
    desc: "Elevate your outdoor living space with our stylish and durable Outdoor Sofa. Crafted from weather-resistant materials, this sofa is built to withstand the elements while providing ultimate comfort. Whether you're hosting a barbecue or lounging in the sun, our outdoor sofa offers ample seating for you and your guests, making it the perfect addition to your patio or garden oasis.",
    weight: "2.8kg",
    dimension: "270 x 70 cm",
  },
  {
    id: 14,
    category: "clock",
    name: "analogue clock",
    img: WallClock2,
    otherImg: {
      "Navy Blue": WallClock2,
      WallClock2Wall,
    },
    colors: ["Navy Blue"],
    priceCents: 1500,
    desc: "Introducing our classic analogue clock, a timeless addition to any space. Crafted with precision and elegance, this clock features a traditional design that brings a touch of sophistication to your home or office. Perfect for those who appreciate the charm of analogue timekeeping, our clock blends seamlessly into any decor",
    weight: "0.7kg",
    dimension: "180 x 180 cm",
  },
  {
    id: 15,
    category: "clock",
    name: "digital alarm clock",
    img: DigitalAlarmClock,
    otherImg: {
      "Charcoal Green": DigitalAlarmClock,
      DigitalAlarmClock2,
    },
    colors: ["Charcoal Green"],
    priceCents: 2300,
    desc: "Meet our Digital Alarm Clock, your reliable companion for waking up refreshed and on time every day. With its sleek and modern design, this clock fits seamlessly into any bedroom or workspace. Its large LED display offers clear visibility, even from a distance, ensuring you can always check the time at a glance.",
    weight: "0.45kg",
    dimension: "70 x 40 cm",
  },
];
