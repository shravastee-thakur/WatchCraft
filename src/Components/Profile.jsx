import React from "react";

const Profile = () => {
  return (
    <div className="w-full pt-8 mx-auto md:w-1/2 md:p-12">
      <h1 className="text-xl text-red-800 px-8 md:text-3xl font-bold md:px-8">
        Welcome Shravastee
      </h1>
      <hr className="border-1 border-gray-800 w-full mt-2" />

      <h2 className="text-lg px-8 mt-4 md:text-2xl font-semibold md:px-8">
        My Account
      </h2>
      <h4 className="text-base font-semibold mt-4 px-8 md:px-8">
        Contact Details
      </h4>
      <div className="grid grid-cols-2 px-8 mx-auto md:px-8">
        <p className="font-semibold mt-4">Your Name</p>
        <p className="font-semibold mt-4 ml-4">Email Address</p>
        <p>Shravastee Thakur</p>
        <p className="ml-4">test@example.com</p>
        <p className="font-semibold mt-4">Phone Number</p>
        <p></p>
        <p>+91 1234567890</p>
        <p> </p>
      </div>
      <button className="py-1 px-4 ml-8 mt-4 md:py-1 md:px-8 rounded bg-blue-800 text-white font-semibold">
        Edit
      </button>

      <hr className="border-1 border-gray-800 w-full mt-8" />

      <h2 className="text-lg px-8 mt-8 md:text-2xl font-semibold md:px-8">
        My Address
      </h2>
      <div className="border border-gray-300 w-3/4 md:w-auto mx-auto md:mx-8 p-2 md:p-4 mt-2 rounded-lg">
        <p className="font-semibold mt-4">Shravastee Thakur</p>
        <p>
          701, Valencia, Hiranandani Gardens, High St Road, Powai - Mumbai -
          400076
        </p>
      </div>
      <button className="py-1 px-4 ml-8 mb-10 mt-4 md:py-1 md:px-8 rounded bg-blue-800 text-white font-semibold">
        Edit
      </button>
    </div>
  );
};

export default Profile;
