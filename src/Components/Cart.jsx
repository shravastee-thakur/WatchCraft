import React, { useState } from "react";

const Cart = ({ cart, handleRemove }) => {
  const [showModal, setShowModal] = useState(false);

  const total = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toLocaleString();
  };

  const handleShow = () => {
    setShowModal(true);
  };
  return (
    <>
      {cart.length > 0
        ? showModal && (
            <div className=" w-[400px] h-[200px] bg-lime-50 rounded-xl flex flex-col justify-center items-center gap-4 z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div>
                <h2 className="text-xl font-bold">
                  Your order No. #{Math.round(Math.random() * 100000)}
                </h2>
                <p className="mt-2">You can pay with card or UPI</p>
                <p>Thank you for shopping with us.</p>
              </div>
              <div>
                <div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-blue-700 text-white px-6 py-1 rounded"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          )
        : <div className=" w-[400px] h-[200px] bg-lime-50 rounded-xl flex flex-col justify-center items-center gap-4 z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img className = "w-[100px] h-[100px]" src="./images/emptycart.png" alt="" />
          <h1 className="text-2xl font-semibold flex justify-center items-center">Your cart is empty</h1>
            
            </div>}
        

      <div>
        <div className="container mx-auto mt-10">
          <div className="flex flex-col justify-center w-full md:flex md:flex-row shadow-md my-10">
            <div className="w-full md:w-3/4 bg-white px-3 md:px-10 py-10">
              <div className="flex justify-between border-b pb-3 md:pb-8">
                <h1 className="text-base font-semibold md:text-2xl">
                  Shopping Cart
                </h1>
                <h2 className="text-base font-semibold md:text-2xl">
                  {cart.length} Items
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Total
                </h3>
              </div>

              {/* cart section started */}

              {cart.map((item, id) => {
                return (
                  <div
                    key={id}
                    className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                  >
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img className="h-19 w-auto md:h-24" src={item.img} />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-semibold md:font-bold text-sm">
                          {item.model}
                        </span>
                        <span className="text-red-500 text-xs">
                          {item.brand}
                        </span>
                        <a
                          onClick={() => handleRemove(item.id)}
                          href="#"
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <input
                        className="mx-2 border text-center w-8"
                        type="text"
                        value={item.quantity}
                      />
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ₹ {item.price.toLocaleString()}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ₹ {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* cart section ended */}

            <div
              id="summary"
              className="w-full md:w-1/4 px-8 py-10 bg-amber-50"
            >
              <h1 className="text-base font-semibold md:text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {cart.length}
                </span>
                <span className="ml-20 md:font-semibold text-sm">
                  ₹{total()}
                </span>
              </div>

              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>₹{total()}</span>
                </div>

                <button className="bg-green-600 hover:bg-green-800 px-5 py-2 mt-8 text-sm text-white uppercase w-full">
                  Pay Now
                </button>

                <button
                  onClick={handleShow}
                  className="bg-blue-700 hover:bg-blue-800 px-5 py-2 mt-8 text-sm text-white uppercase w-full"
                >
                  Cash on Delivery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
