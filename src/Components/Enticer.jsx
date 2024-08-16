import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

let newWatchData = [
  {
    id: 25,
    img: "./images/25.png",
    brand: "ENTICER",
    model: "MTP-B130L-1AV",
    price: 5995,
  },
  {
    id: 26,
    img: "./images/26.png",
    brand: "ENTICER",
    model: "MTP-B130L-2AV",
    price: 5995,
  },
  {
    id: 27,
    img: "./images/27.png",
    brand: "ENTICER",
    model: "MTP-B130L-3AV",
    price: 5995,
  },
  {
    id: 28,
    img: "./images/28.png",
    brand: "ENTICER",
    model: "MTP-B135B-1AV",
    price: 7495,
  },
  {
    id: 29,
    img: "./images/29.png",
    brand: "ENTICER",
    model: "MTP-B135D-1AV",
    price: 5995,
  },
  {
    id: 30,
    img: "./images/30.png",
    brand: "ENTICER",
    model: "MTP-B135L-2AV",
    price: 5995,
  },
  {
    id: 31,
    img: "./images/31.png",
    brand: "ENTICER",
    model: "MTP-B135MG-1AV",
    price: 7495,
  },
  {
    id: 32,
    img: "./images/32.png",
    brand: "ENTICER",
    model: "MTP-E715C-8AV",
    price: 7695,
  },
  {
    id: 33,
    img: "./images/33.png",
    brand: "ENTICER",
    model: "MTP-E715D-7AV",
    price: 8495,
  },
  {
    id: 34,
    img: "./images/34.png",
    brand: "ENTICER",
    model: "MTP-E715L-1AV",
    price: 7695,
  },
  {
    id: 35,
    img: "./images/35.png",
    brand: "ENTICER",
    model: "MTP-E715L-5AV",
    price: 7695,
  },
  {
    id: 36,
    img: "./images/36.png",
    brand: "ENTICER",
    model: "MTP-VD200D-1B",
    price: 4995,
  },
  {
    id: 37,
    img: "./images/37.png",
    brand: "ENTICER",
    model: "MTP-VD200G-1B",
    price: 5995,
  },
  {
    id: 38,
    img: "./images/38.png",
    brand: "ENTICER",
    model: "MTP-VD200L-2B",
    price: 4795,
  },
  {
    id: 39,
    img: "./images/39.png",
    brand: "ENTICER",
    model: "MTP-B120B-8AV",
    price: 7495,
  },
  {
    id: 40,
    img: "./images/40.png",
    brand: "ENTICER",
    model: "MTP-B120BL-1AV",
    price: 6095,
  },
  {
    id: 41,
    img: "./images/41.png",
    brand: "ENTICER",
    model: "MTP-B120GL-7AV",
    price: 6095,
  },
  {
    id: 42,
    img: "./images/42.png",
    brand: "ENTICER",
    model: "MTP-E705D-2EV",
    price: 5395,
  },
  {
    id: 43,
    img: "./images/43.png",
    brand: "ENTICER",
    model: "MTP-E710M-1AV",
    price: 6895,
  },
  {
    id: 44,
    img: "./images/44.png",
    brand: "ENTICER",
    model: "MTP-E710M-2AV",
    price: 6895,
  },
  {
    id: 45,
    img: "./images/45.png",
    brand: "ENTICER",
    model: "MTP-E710M-8AV",
    price: 6895,
  },
  {
    id: 46,
    img: "./images/46.png",
    brand: "ENTICER",
    model: "MTP-E710MB-1AV",
    price: 7995,
  },
  {
    id: 47,
    img: "./images/47.png",
    brand: "ENTICER",
    model: "MTP-E710MB-2AV",
    price: 7995,
  },
  {
    id: 48,
    img: "./images/48.png",
    brand: "ENTICER",
    model: "MTP-VD03GL-1A",
    price: 3495,
  },
];

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
