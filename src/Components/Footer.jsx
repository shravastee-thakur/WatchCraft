import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#191970]">
      <div className="w-10/12 mx-auto grid grid-cols-1 md:mx-auto md:grid-cols-3 gap-8 py-8">
        <div className="text-sm text-white text-center md:pl-28">
          <h3 className="font-semibold text-lg">Let Us Help You</h3>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>Product Safety Alerts</p>
          <p>100% Purchase Protection</p>
          <p>Help</p>
        </div>

        <div className="text-sm text-white text-center md:pl-14">
          <h3 className="font-semibold text-lg">Get to Know Us</h3>
          <p>Your Account</p>
          <p>About Us</p>
          <p>Service Centers</p>
          <p>Customer Care</p>
        </div>

        <div className="text-sm text-white text-center">
          <h3 className="font-semibold text-lg">Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
