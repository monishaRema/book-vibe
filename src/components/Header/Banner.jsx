import React from "react";

import BannerImg from '../../assets/banner-book.png'

const Banner = () => {
  return (
    <section className="banner">
      <div className="container max-w-[1210px] mx-auto px-5">
        <div className="bg-gray-100 rounded-3xl py-20 px-5">
          <div className="flex flex-col-reverse md:flex-row gap-5 justify-between items-center max-w-[890px] mx-auto">
            <div className="banner-content max-w-[526px] mx-auto md:mx-0 text-center md:text-start">
              <h1 className="font-bold text-6xl mb-12">
                Books to freshen up your bookshelf
              </h1>
              <button className="inline-block  bg-[#23BE0A] text-white py-3 px-7 rounded-lg text-xl font-medium hover:bg-[#4d8145] transition-all duration-300 ease-in-out border-0 outline-0">
                View The List{" "}
              </button>
            </div>
            <div className="banner-img">
              <img src={BannerImg}alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
