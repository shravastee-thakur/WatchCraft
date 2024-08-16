import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { newWatchData } from "../Data/enticer";

const Enticer = () => {
  return (
    <>
      <Navbar />

      <div>
        <header>
          <img src="./images/enticer.png" alt="Enticer" />
        </header>

        <section className="bg-zinc-300">
          <div className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-6 pb-6 gap-4">
            {newWatchData.map((item, id) => {
              return (
                <div
                  key={id}
                  className=" bg-white hover:border border-black transition ease-in-out delay-150 rounded-lg text-center"
                >
                  <img src={item.img} />
                  <div className="py-4">
                    <h3 className="text-base">{item.brand}</h3>
                    <h2 className="text-lg font-bold">{item.model}</h2>
                    <p className="font-semibold">
                      ₹ {item.price.toLocaleString()} (inclusive of all taxes)
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

export default Enticer;
