import React from "react";
import Obinna from "../assets/Obinna.svg";

const FeaturedEventCard = () => {
  return (
    <div className="container mx-8 md:mx-28 my-8">
      <h2 className="text-3xl font-bold mb-4">Featured Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="relative">
            <img src={Obinna} alt="" className="w-full h-48 object-cover" />
          </div>
          <div className="p-4">
            <div className="flex space-x-4 items-center mb-2">
              <div>
                <span className="text-gray-600 text-center text-md font-semibold">
                  NOV 01
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1 ">
                  NAKURU MOTOR CLUB 1ST ANNIVERSARY
                </h3>
                <p className="text-gray-600 text-sm mb-2 ">Ksh. 4500 - 9750</p>
                <div className="flex space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-600 text-sm">MTONI CAMP, GILGIL</p>
                </div>
              </div>
            </div>

            <button className="w-[35%] mt-3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
              Get Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEventCard;
