// import React, { use } from "react";
import { useEffect, useState } from "react";
import { FiDownload, FiStar } from "react-icons/fi";
import AppCard from "../ui/AppCard";
import { CircleLoader } from "react-spinners";
// import { useLoaderData } from "react-router";

// 1.
// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  // 1.
  // const getApps = use(appsPromise);
  // console.log(getApps);

  // 2.
  // const getDataByLoader = useLoaderData();
  // console.log(getDataByLoader);

  // 3
  const [apps, setApps] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);

      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 2000);

      // setApps(data);
      // setLoading(false);
    };
    fetchData();
  }, []);
  console.log(apps);
  console.log(loading);

  return (
    <div className="container mx-auto p-10">
      <div className="text-center space-y-3 p-10">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <CircleLoader color="#10e512" size={100} />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1 */}
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

          {/* 2 */}
          {/* {getDataByLoader.map((app) => (
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

          {/* 3 */}
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"> */}
      {/* 1 */}
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

      {/* 2 */}
      {/* {getDataByLoader.map((app) => (
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

      {/* 3 */}
      {/* {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))} */}
      {/* </div> */}
    </div>
  );
};

export default TrendingApps;
