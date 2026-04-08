import React, { Suspense } from "react";
import Banner from "../../components/homePage/Banner";
import TrendingApps from "../../components/homePage/TrendingApps";
import Stats from "../../components/homePage/Stats";

const HomePage = () => {
  return (
    <div className="cointainer mx-auto">
      <Banner />
      <Stats/>
      <Suspense fallback={<div>Loading trending apps...</div>}>
        <TrendingApps />
      </Suspense>
    </div>
  );
};

export default HomePage;
