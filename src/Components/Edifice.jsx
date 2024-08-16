import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { watchData } from "../Data/edifice";

const Edifice = () => {
  return (
    <>
      <Navbar />
      <div>
        <header>
          <img src="./images/edifice.png" alt="Edifice" />
        </header>

        <section className="bg-zinc-300">
          <div className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-6 pb-6 gap-4">
            {watchData.map((watch, id) => {
              return (
                <div
                  key={id}
                  className=" bg-white hover:border border-black transition ease-in-out delay-150 rounded-lg text-center"
                >
                  <img src={watch.img} />
                  <div className="py-4">
                    <h3 className="text-base">{watch.brand}</h3>
                    <h2 className="text-lg font-bold">{watch.model}</h2>
                    <p className="font-semibold">
                      ₹ {watch.price.toLocaleString()} (inclusive of all taxes)
                    </p>
                    <button className="bg-black text-white py-2 px-4 mt-4 rounded-xl hover:bg-blue-800">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Edifice;
