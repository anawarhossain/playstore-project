import React, { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import { FaSearch } from "react-icons/fa";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);
  console.log(installedApps);

  return (
    <div className="container mx-auto p-4">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center font-bold">
        <h1>({installedApps.length}) Apps Found</h1>
        <div className="flex justify-center items-center gap-2 p-2 border rounded-lg">
          <input type="text" placeholder={`${(<FaSearch />)}Search apps... `} />
        </div>
      </div>
      {installedApps.map((app) => {
        return (
          <div key={app.id}>
            <div className="mt-6">
              {/* Card Container */}
              <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  {/* App Logo */}
                  <div className=" rounded-xl flex items-center justify-center shadow-inner">
                    <img
                      className="w-10 h-10"
                      src={app.image}
                      alt={app.title}
                    />
                  </div>

                  {/* App Text Info */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 leading-tight">
                      {app.title}
                    </h2>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <span className="text-[#2ecc71] text-lg">⬇️</span>
                        <span className="text-[#2ecc71] font-medium">
                          {app.downloads}
                        </span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-orange-500">⭐</span>
                        <span className="text-orange-500 font-medium">{app.ratingAvg}</span>
                      </span>
                      <span className="font-medium text-gray-400">{app.size} MB</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="bg-[#ff3b30] hover:bg-red-600 text-white px-6 py-2 rounded-lg font-bold transition-colors">
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InstallApps;
