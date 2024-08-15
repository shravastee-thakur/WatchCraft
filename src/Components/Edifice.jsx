import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

let watchData = [
  {
    id: 1,
    img: "./images/1.png",
    brand: "EDIFICE",
    model: "ECB-2000DC-1B",
    price: 19995,
  },
  {
    id: 2,
    img: "./images/2.png",
    brand: "EDIFICE",
    model: "ECB-2000NP-1A",
    price: 23995,
  },
  {
    id: 3,
    img: "./images/3.png",
    brand: "EDIFICE",
    model: "ECB-40NP-1A",
    price: 16995,
  },
  {
    id: 4,
    img: "./images/4.png",
    brand: "EDIFICE",
    model: "ECB-2200HTR-1A",
    price: 39995,
  },
  {
    id: 5,
    img: "./images/5.png",
    brand: "EDIFICE",
    model: "EFR-S108D-2AV",
    price: 12495,
  },
  {
    id: 6,
    img: "./images/6.png",
    brand: "EDIFICE",
    model: "EFR-S108D-2BV",
    price: 12495,
  },
  {
    id: 7,
    img: "./images/7.png",
    brand: "EDIFICE",
    model: "EFR-S108D-3AV",
    price: 12495,
  },
  {
    id: 8,
    img: "./images/8.png",
    brand: "EDIFICE",
    model: "ECB-30DB-1A",
    price: 15495,
  },
  {
    id: 9,
    img: "./images/9.png",
    brand: "EDIFICE",
    model: "ECB-30DC-1B",
    price: 15995,
  },
  {
    id: 10,
    img: "./images/10.png",
    brand: "EDIFICE",
    model: "EFV-C110D-2B",
    price: 9995,
  },
  {
    id: 11,
    img: "./images/11.png",
    brand: "EDIFICE",
    model: "EFV-C110D-5A",
    price: 9995,
  },
  {
    id: 12,
    img: "./images/12.png",
    brand: "EDIFICE",
    model: "EFV-C110DC-1A",
    price: 11995,
  },
  {
    id: 13,
    img: "./images/13.png",
    brand: "EDIFICE",
    model: "EFV-650D-1AV",
    price: 9995,
  },
  {
    id: 14,
    img: "./images/14.png",
    brand: "EDIFICE",
    model: "EFV-650D-2AV",
    price: 9995,
  },
  {
    id: 15,
    img: "./images/15.png",
    brand: "EDIFICE",
    model: "EFV-650D-3AV",
    price: 9995,
  },
  {
    id: 16,
    img: "./images/16.png",
    brand: "EDIFICE",
    model: "EFR-574D-1AV",
    price: 11995,
  },
  {
    id: 17,
    img: "./images/17.png",
    brand: "EDIFICE",
    model: "EFR-574D-2AV",
    price: 11995,
  },
  {
    id: 18,
    img: "./images/18.png",
    brand: "EDIFICE",
    model: "EFR-574DB-3AV",
    price: 12495,
  },
  {
    id: 19,
    img: "./images/19.png",
    brand: "EDIFICE",
    model: "ECB-40MU-1A",
    price: 29995,
  },
  {
    id: 20,
    img: "./images/20.png",
    brand: "EDIFICE",
    model: "ECB-2200DC-1A",
    price: 21995,
  },
  {
    id: 21,
    img: "./images/21.png",
    brand: "EDIFICE",
    model: "ECB-2200DD-1A",
    price: 19995,
  },
  {
    id: 22,
    img: "./images/22.png",
    brand: "EDIFICE",
    model: "ECB-2200P-1A",
    price: 18995,
  },
  {
    id: 23,
    img: "./images/23.png",
    brand: "EDIFICE",
    model: "EFV-640D-1AV",
    price: 8995,
  },
  {
    id: 24,
    img: "./images/24.png",
    brand: "EDIFICE",
    model: "EFB-710D-2AV",
    price: 11995,
  },
];

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
