import React, { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import MyNavLink from "../../components/ui/MyNavLink";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);
  console.log(installedApps);

  const handleUninstall = (app) => {
    const updatedApps = installedApps.filter(
      (installedApp) => installedApp.id !== app.id,
    );
    setInstalledApps(updatedApps);
    toast.success(`Successfully uninstalled ${app.title}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center font-bold">
        <h1>({installedApps.length}) Apps Found</h1>
        <label className="input">
          <FaSearch className="text-gray-400" />
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      {installedApps.length === 0 ? (
        <div className="text-center mt-10 min-h-72 flex flex-col justify-center items-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">
            No apps installed yet.
          </h2>
          <MyNavLink to="/apps" className={"btn btn-primary"}>
            Browse Apps
          </MyNavLink>
        </div>
      ) : (
        <div>
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
                            <span className="text-orange-500 font-medium">
                              {app.ratingAvg}
                            </span>
                          </span>
                          <span className="font-medium text-gray-400">
                            {app.size} MB
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleUninstall(app)}
                      className="bg-[#ff3b30] hover:bg-red-600 text-white px-6 py-2 rounded-lg font-bold transition-colors"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InstallApps;
