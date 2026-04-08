import React, { use } from "react";
import { FiDownload, FiStar } from "react-icons/fi";
import { useLoaderData } from "react-router";

// 1.
// const appsPromise = fetch("/data.json").then((res) => res.json());



const TrendingApps = () => {

  // 1.
  // const getApps = use(appsPromise);
  // console.log(getApps);

  // 2.
  const getDataByLoader = useLoaderData();
  console.log(getDataByLoader);

  return (
    <div className="container mx-auto p-10">
      <div className="text-center space-y-3 p-10">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* {getApps.map((app) => (
          <div key={app.id} className=" p-4 rounded-lg shadow-md ">
            <div className="card bg-base-100">
              <figure>
                <img
                  className="p-4 bg-gray-300 rounded-lg overflow-hidden"
                  src={app.image}
                  alt={app.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{app.title}</h2>
                <div className="card-actions justify-between items-center">
                  <button className="btn bg-[#d2f7eb] text-[#00D390] font-bold ">
                    <FiDownload /> {app.downloads}
                  </button>
                  <button className="btn bg-[#f7e4d1] text-[#FF8811] font-bold ">
                    <FiStar /> {app.ratingAvg}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))} */}

        {getDataByLoader.map((app) => (
          <div key={app.id} className=" p-4 rounded-lg shadow-md ">
            <div className="card bg-base-100">
              <figure>
                <img
                  className="p-4 bg-gray-300 rounded-lg overflow-hidden"
                  src={app.image}
                  alt={app.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{app.title}</h2>
                <div className="card-actions justify-between items-center">
                  <button className="btn bg-[#d2f7eb] text-[#00D390] font-bold ">
                    <FiDownload /> {app.downloads}
                  </button>
                  <button className="btn bg-[#f7e4d1] text-[#FF8811] font-bold ">
                    <FiStar /> {app.ratingAvg}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingApps;
