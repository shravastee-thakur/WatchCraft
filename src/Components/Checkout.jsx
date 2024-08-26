import React from "react";
import { Link } from "react-router-dom";

const Checkout = ({ cart }) => {
  const total = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toLocaleString();
  };
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold text-center md:mt-8 mt-4">
        Checkout
      </h1>
      <div className="mx-auto gap-10 flex justify-center items-start flex-col md:flex md:flex-row md:gap-20 bg-white">
        <div className="w-full p-4 md:w-3/5 md:p-8">
          <h3 className="font-bold text-base md:text-lg text-red-700">
            Select a delivery address
          </h3>
          <div className="border border-gray-300 p-4 mt-2">
            <div className="flex items-start gap-4">
              <div>
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 mt-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <div>
                <p className="font-semibold mt-4">Shravastee Thakur</p>
                <p>
                  701, Valencia, Hiranandani Gardens, High St Road, Powai -
                  Mumbai - 400076
                </p>
              </div>
            </div>

            <div className="md:flex md:justify-between md:items-center">
              <button className="bg-yellow-500 py-1 px-6 text-sm md:px-3 mt-5 rounded-xl">
                Use this address
              </button>
              <Link to="/profile">
                <h4 className="text-blue-500 mt-3 md:mt-6">
                  Add a new address
                </h4>
              </Link>
            </div>
          </div>
          <h3 className="font-bold text-base md:text-lg text-red-700 pt-8">
            Select a payment method
          </h3>
          <div className="border border-gray-300 p-4 mt-2 ">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <span className="ml-2">Credit or Debit Card</span>
            <div className="flex gap-4 items-center mt-2">
              <img
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                src="./images/Visalogo.png"
                alt=""
              />
              <img
                className="w[40px] h-[30px] md:w-[50px] md:h-[40px]"
                src="./images/mastercardlogo.png"
                alt=""
              />
              <img
                className="w-[60px] h-auto md:w-[70px] md:h-auto"
                src="./images/rupaylogo.png"
                alt=""
              />
              <img
                className="w-[70px] h-[50px] md:w-[70px] md:h-[70px]"
                src="./images/maestro.png"
                alt=""
              />
            </div>
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-8"
            />
            <span className="ml-2">Net Banking</span>
            <div>
              <select>
                <option value="">Choose an option</option>
                <option value="">HDFC Bank</option>
                <option value="">ICICI Bank</option>
                <option value="">Axis Bank</option>
                <option value="">State Bank of India</option>
                <option value="">Bank of Baroda</option>
                <option value="">Union Bank of India</option>
              </select>
            </div>

            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-8"
            />
            <span className="ml-2">Other UPI Apps</span>
          </div>
        </div>

        <div className="w-full md:w-1/4 px-8 py-10 mt-16 bg-white">
          <h1 className="text-base font-semibold md:text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="md:font-semibold text-sm">
              ITEMS {cart.length}
            </span>
            <span className="ml-20 md:font-semibold text-sm">₹{total()}</span>
          </div>

          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>₹{total()}</span>
            </div>

            <button className="bg-green-600 hover:bg-green-800 px-5 py-2 mt-8 text-sm text-white uppercase w-full">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
