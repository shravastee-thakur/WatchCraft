import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

const Home = () => {
  return (
    <>
      <div>
        <header>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img src="./images/Slider1.png" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/Slider2.png" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/Slider3.png" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/Slider4.png" alt="Slide 4" />
            </SwiperSlide>
          </Swiper>
        </header>

        <div className="w-full h-auto bg-gray-400 ">
          <div className="grid grid-cols-1 md:grid-cols-4 w-10/12 mx-auto pt-6 pb-6 gap-4">
            <div>
              <img src="./images/products-sp.png" alt="Products" />
            </div>
            <div>
              <img src="./images/products-sp2.png" alt="Products2" />
            </div>
            <div>
              <img src="./images/products-sp3.png" alt="Products3" />
            </div>
            <div>
              <img src="./images/products-sp4.png" alt="Products4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
