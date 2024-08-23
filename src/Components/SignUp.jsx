import React, { useState } from "react";

const SignUp = () => {
  const [password, setPassword] = useState("password");
  return (
    <div className="mx-auto py-10 gap-10 bg-gray-100 flex justify-center items-center flex-col md:flex md:flex-row md:gap-20">
      <div className="w-4/5 p-4 md:w-1/3 bg-white md:p-8 rounded-lg">
        <h1 className="text-xl md:text-3xl font-semibold text-center mb-6">
          Personal Information
        </h1>

        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold md:text-lg">
              Full Name
            </label>
            <input
              required
              type="text"
              placeholder="Enter your full name"
              name="name"
              className="p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold md:text-lg">
              Address line 1
            </label>
            <input
              required
              type="text"
              placeholder="Enter your address"
              name="address1"
              className="p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold md:text-lg">
              Address line 2
            </label>
            <input
              type="text"
              placeholder="Enter your address"
              name="address2"
              className="p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold md:text-lg">
              Mobile No.
            </label>
            <input
              required
              type="number"
              placeholder="Enter your mobile number"
              name="mobile"
              className="p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex justify-center">
            <button className="py-2 px-6 md:py-3 md:px-8 rounded bg-blue-800 text-white font-semibold hover:bg-green-800">
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="w-4/5 p-4 md:w-1/3 bg-white md:p-8 rounded-lg">
        <h1 className="text-xl md:text-3xl font-semibold text-center mb-2">
          SignUp
        </h1>
        <p className="text-center p-2 font-semibold">
          New user please register here.
        </p>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold md:text-lg">
              Full Name
            </label>
            <input
              required
              type="text"
              placeholder="Enter your full name"
              name="name"
              className="p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold md:text-lg">Email</label>
            <input
              required
              type="email"
              placeholder="Enter your Email"
              name="email"
              className="p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold md:text-lg">Password</label>
            <input
              required
              type="password"
              placeholder="Enter your password"
              name="password"
              className="p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold md:text-lg">
              Confirm Password
            </label>
            <input
              required
              type="password"
              placeholder="Enter your password"
              name="confirmPassword"
              className="p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex justify-center">
            <button className="py-2 px-6 md:py-3 md:px-8 rounded bg-blue-800 text-white font-semibold hover:bg-green-800">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
