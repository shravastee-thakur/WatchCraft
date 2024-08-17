import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { newWatchData } from "../Data/enticer";

const Enticer = () => {
  const [sortedData, setSortedData] = useState(newWatchData);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (e) => {
    const Order = e.target.value;
    setSortOrder(Order);
    const sorted = [...sortedData].sort((a, b) => {
      if (Order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedData(sorted);
  };
  return (
    <>
      <Navbar />

      <div>
        <header>
          <img src="./images/enticer.png" alt="Enticer" />
        </header>

        <section className="bg-zinc-300">
          <div className="w-10/12 mx-auto pt-6 pb-6 ">
            <div className="flex justify-end mb-4">
              <select
                onChange={handleSort}
                className="bg-white border border-black py-1 px-1 md:py-2 md:px-4 rounded-lg"
              >
                <option value="">Sort By</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sortedData.map((watch, id) => {
                return (
                  <div
                    key={id}
                    className="bg-white hover:border border-black transition ease-in-out delay-150 rounded-lg text-center"
                  >
                    <img src={watch.img} alt={watch.model} />
                    <div className="py-4">
                      <h3 className="text-base">{watch.brand}</h3>
                      <h2 className="text-lg font-bold">{watch.model}</h2>
                      <p className="font-semibold">
                        ₹ {watch.price.toLocaleString()} (inclusive of all
                        taxes)
                      </p>
                      <button className="bg-black text-white py-2 px-4 mt-4 rounded-xl hover:bg-blue-800">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Enticer;
