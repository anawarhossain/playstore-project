import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-r from-[#8057E3] to-[#AE7FEF] text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Trusted by Millions, Built for You
      </h1>
      <div className="flex justify-center items-center">
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title text-white">Total Downloads</div>
            <div className="stat-value">29.6M</div>
            <div className="stat-desc text-white">21% more than last month</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title text-white">Total Reviews</div>
            <div className="stat-value ">906K</div>
            <div className="stat-desc text-white">46% more than last month</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title text-white">Active Apps</div>
            <div className="stat-value">132+</div>
            <div className="stat-desc text-white">31 more will Launch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
