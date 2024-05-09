import { Route, Routes } from "react-router-dom";

// Context
import { CartProvider } from "./context/CartContext";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

// Pages
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";
import Categories from "./Pages/Categories";

// Categories Pages
import All from "./Categories Pages/All";
import Chair from "./Categories Pages/Chair";
import Clock from "./Categories Pages/Clock";
import HomeDecor from "./Categories Pages/HomeDecor";
import Lamp from "./Categories Pages/Lamp";
import Sofa from "./Categories Pages/Sofa";

function App() {
  return (
    <CartProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:category/:name/:id" element={<ProductPage />} />

        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="chair" element={<Chair />} />
          <Route path="clock" element={<Clock />} />
          <Route path="lamp" element={<Lamp />} />
          <Route path="home-decor" element={<HomeDecor />} />
          <Route path="sofa" element={<Sofa />} />
        </Route>
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;
