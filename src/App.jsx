import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./Components/SignUp";
import Edifice from "./Components/Edifice";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Enticer from "./Components/Enticer";
import Cart from "./Components/Cart";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  const AddToCart = (item) => {
    const isItemExist = cart.find((findItem) => findItem.id === item.id);

    if (isItemExist) {
      const updateCart = cart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCart(updateCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemove = (id) => {
    const updateCart = cart.filter((item) => item.id !== id);
    setCart(updateCart);
  };
  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edifice" element={<Edifice AddToCart={AddToCart} />} />
        <Route path="/enticer" element={<Enticer AddToCart={AddToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} handleRemove={handleRemove} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
