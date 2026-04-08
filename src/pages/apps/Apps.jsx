import React from "react";
import useApps from "../../hooks/useApps";
import { CircleLoader } from "react-spinners";
import AppCard from "../../components/ui/AppCard";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";

const Apps = () => {
  const { apps, loading } = useApps();

  return (
    <div className="container mx-auto p-10 space-y-4">
      <div className="text-center space-y-3 p-10">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>
      <div className="flex justify-between items-center font-bold">
        <h1>({apps.length}) Apps Found</h1>
        <label className="input">
          <FaSearch className="text-gray-400" />
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <CircleLoader color="#10e512" size={100} />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 3 */}
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
