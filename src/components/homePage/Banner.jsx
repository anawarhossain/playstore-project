import React from "react";
import PlayStoreIcon from "../../assets/images/playstore.png";
import AppStoreIcon from "../../assets/images/appstore.png";
import BannerImage from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center pt-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">
          We Build <br />
          <span className="text-[#8057E3] ">Productive </span>
          Apps
        </h1>
        <p>
          At HERO.IO we craft innovative apps designed to make everyday life
          simpler, smarter and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="flex gap-3 justify-center items-center">
          <button className="flex gap-1 justify-center items-center btn btn-outline rounded-lg">
            <img src={PlayStoreIcon} alt="" />
            Download
          </button>
          <button className="flex gap-1 justify-center items-center btn btn-outline rounded-lg">
            <img src={AppStoreIcon} alt="" />
            Download
          </button>
        </div>
        <img src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
