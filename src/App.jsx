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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edifice" element={<Edifice />} />
        <Route path="/enticer" element={<Enticer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    // <Navbar />
  );
}

export default App;
