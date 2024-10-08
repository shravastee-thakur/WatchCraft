import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  const [profile, setProfile] = useState(false);
  const [visible, setVisible] = useState(200);
  return (
    <>
      <nav className="w-full bg-[#191970] px-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white p-4">WatchCraft</h1>
        </div>
        <div className="px-6 flex justify-center items-center gap-8">
          <ul className="hidden md:font-semibold md:flex md:gap-8 md:items-center">
            <Link to={"/"}>
              <li className="text-white hover:text-yellow-400">Home</li>
            </Link>
            <Link to={"/edifice"}>
              <li className="text-white hover:text-yellow-400">Edifice</li>
            </Link>
            <Link to={"/enticer"}>
              <li className="text-white hover:text-yellow-400">Enticer</li>
            </Link>
            <Link to={"/login"}>
              <li className="text-white hover:text-yellow-400">Log In</li>
            </Link>
            {/* <Link to={"/signup"}>
              <li className="text-white hover:text-yellow-400">Sign Up</li>
            </Link> */}
            <li>
              <button>
                <Link to={"/profile"}>
                  <i className="ri-user-fill text-white text-xl"></i>
                </Link>
              </button>
            </li>
          </ul>

          {/* shopping cart  */}

          <Link to={"/cart"}>
            <button>
              <div className="flex items-center justify-center relative">
                <i className="ri-shopping-cart-line text-2xl text-white"></i>
                <div className="w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center absolute -top-2 -right-2">
                  {cart.length}
                </div>
              </div>
            </button>
          </Link>
          {/* menu  */}
          <button onClick={() => setVisible(visible === 200 ? 0 : 200)}>
            <i className="ri-menu-line text-white text-xl md:hidden"></i>
          </button>
        </div>
      </nav>
      <aside>
        <div
          className="h-screen bg-slate-200 fixed top-0 right-0 z-30 md:hidden"
          style={{
            width: visible,
            transition: "0.3s",
          }}
        >
          <div className="py-4 px-4">
            <div className="text-2xl">
              <button onClick={() => setVisible(0)}>x</button>
            </div>
          </div>
          <ul className="font-semibold flex flex-col gap-8 items-center overflow-hidden md:hidden">
            <li>
              <p className="text-center">Welcome</p>
              <span className="text-lg font-semibold text-center">
                Shravastee
              </span>
            </li>

            <Link to={"/"}>
              <li className="text-black hover:text-red-400 pt-2">Home</li>
            </Link>
            <Link to={"/profile"}>
              <li className="text-black hover:text-red-400">Profile</li>
            </Link>
            <Link to={"/edifice"}>
              <li className="text-black hover:text-red-400">Edifice</li>
            </Link>
            <Link to={"/enticer"}>
              <li className="text-black hover:text-red-400">Enticer</li>
            </Link>
            <Link to={"/login"}>
              <li className="text-black hover:text-red-400">Log In</li>
            </Link>

            <li className="text-black hover:text-red-400">Log out</li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
