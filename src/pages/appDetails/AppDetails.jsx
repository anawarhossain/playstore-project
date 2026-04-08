import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { CircleLoader } from "react-spinners";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  const expectedApp = apps.find((app) => String(app.id) === id);
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);

  const handleInstallApp = () => {
    if (
      !installedApps.some((installedApp) => installedApp.id === expectedApp.id)
    ) {
      setInstalledApps([...installedApps, expectedApp]);
      toast.success(`Successfully installed ${expectedApp.title}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
    } else {
      toast.info(`${expectedApp.title} is already installed`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
    }
  };
  console.log(installedApps);

  const ratings = [
    { star: "5 star", count: 140000000, width: "95%" },
    { star: "4 star", count: 35000000, width: "25%" },
    { star: "3 star", count: 12000000, width: "10%" },
    { star: "2 star", count: 5000000, width: "4%" },
    { star: "1 star", count: 3000000, width: "2%" },
  ];

  if (loading) {
    <div className="flex justify-center items-center">
      <CircleLoader color="#10e512" size={100} />
    </div>;
  }

  return (
    <div className="container mx-auto">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <CircleLoader color="#10e512" size={100} />
        </div>
      ) : (
        <div className="max-w-6xl mx-auto p-6 bg-white font-sans text-gray-800">
          {/* Top Section: App Info */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* App Logo */}
            <div className="p-4 rounded-4xl flex items-center justify-center shadow-lg">
              <figure>
                <img
                  className="w-40 h-40"
                  src={expectedApp?.image}
                  alt={expectedApp?.title}
                />
              </figure>
            </div>

            {/* App Meta Data */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold">{expectedApp?.title}</h1>
              <p className="text-gray-500 mb-6">
                Developed by{" "}
                <span className="text-[#6366f1]">
                  {expectedApp?.companyName}
                </span>
              </p>

              <div className="flex flex-wrap gap-12 mb-6">
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 text-[#25D366] mb-1">
                    <span className="text-2xl">⬇️</span>
                    <span className="text-sm text-gray-500 font-semibold">
                      Downloads
                    </span>
                  </div>
                  <p className="text-3xl font-bold">{expectedApp?.downloads}</p>
                </div>

                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 text-orange-500 mb-1">
                    <span className="text-2xl">⭐</span>
                    <span className="text-sm text-gray-500 font-semibold">
                      Average Ratings
                    </span>
                  </div>
                  <p className="text-3xl font-bold">{expectedApp?.ratingAvg}</p>
                </div>

                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 text-[#6366f1] mb-1">
                    <span className="text-2xl">💬</span>
                    <span className="text-sm text-gray-500 font-semibold">
                      Total Reviews
                    </span>
                  </div>
                  <p className="text-3xl font-bold">{expectedApp?.reviews}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  handleInstallApp(expectedApp.id);
                }}
                className="bg-[#25D366] hover:bg-[#1ebe57] text-white px-6 py-2 rounded-lg font-bold transition-colors"
              >
                Install Now ({expectedApp?.size} MB)
              </button>
            </div>
          </div>

          <hr className="my-10 border-gray-200" />

          {/* Stats Bar Chart */}
          <div className="mb-12">
            <div className="space-y-4 max-w-5xl">
              {ratings.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-16 text-sm text-gray-600 whitespace-nowrap">
                    {item.star}
                  </span>
                  <div className="flex-1 bg-gray-100 h-6 rounded-sm overflow-hidden">
                    <div
                      className="bg-orange-500 h-full transition-all duration-1000"
                      style={{ width: item.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart X-Axis Labels */}
            <div className="flex justify-between max-w-5xl ml-20 mt-2 text-xs text-gray-400 border-t pt-1">
              <span>0</span>
              <span>35000000</span>
              <span>70000000</span>
              <span>105000000</span>
              <span>140000000</span>
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500"></div>
                <span className="text-xs text-gray-600">count</span>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              {expectedApp?.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppDetails;
