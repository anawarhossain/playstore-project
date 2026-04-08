import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';

const AppCard = ({app}) => {
    return (
      <div>
        <div className=" p-4 rounded-lg shadow-md h-full">
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
                  <FaDownload /> {app.downloads}
                </button>
                <button className="btn bg-[#f7e4d1] text-[#FF8811] font-bold ">
                  <FaStar /> {app.ratingAvg}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AppCard;