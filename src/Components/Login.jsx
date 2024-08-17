import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  const [password, setPassword] = useState("password");
  return (
    <>
      <Navbar />
      <div className="w-full md:h-screen flex justify-center items-center">
        <div className="w-4/5 p-4 md:w-1/3 bg-white md:p-8 rounded-lg ">
          <h1 className="text-xl md:text-3xl font-semibold text-center mb-2">
            Login
          </h1>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold md:text-lg">Email</label>
              <input
                required
                type="email"
                placeholder="Enter your email"
                name="email"
                className="p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="flex flex-col relative">
              <label className="text-sm font-semibold md:text-lg">
                Password
              </label>
              <input
                required
                type={password}
                placeholder="********"
                name="password"
                className="p-2 border border-gray-300 rounded mt-1"
              />
              <button
                onClick={() =>
                  setPassword(password === "password" ? "text" : "password")
                }
                type="button"
                className="absolute top-9 right-4 w-8 h-8 rounded-full hover:bg-blue-100 hover:text-blue-600"
              >
                {password === "password" ? (
                  <i class="ri-eye-line"></i>
                ) : (
                  <i class="ri-eye-off-line"></i>
                )}
              </button>
            </div>

            <div className="flex justify-center">
              <button className="py-2 px-6 md:py-3 md:px-8 rounded bg-blue-800 text-white font-semibold hover:bg-green-800">
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-2">
            Don't have an account. Register now.
            <Link to="/signup">
              <span className="text-blue-600">Click Here</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
