import React from "react";
import microsoft from "../assets/Microsoft.svg";
import safaricom from "../assets/Safaricom.svg";
import airtel from "../assets/Airtel.svg";
import betika from "../assets/Betika.svg";
import youtube from "../assets/Youtube.svg";

const JoinBrandsSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-indigo-900 mb-8">
        Join these brands
      </h2>
      <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
        We've had the pleasure of working with industry-defining brands. These
        are just some of them.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        <img
          src={safaricom}
          alt="Safaricom"
          className="h-10 md:h-16 object-contain"
        />
        <img
          src={airtel}
          alt="Airtel"
          className="h-10 md:h-16 object-contain"
        />
        <img
          src={betika}
          alt="Betika"
          className="h-10 md:h-16 object-contain"
        />
        <img
          src={youtube}
          alt="YouTube"
          className="h-10 md:h-16 object-contain"
        />
        <img
          src={microsoft}
          alt="Microsoft"
          className="h-10 md:h-16 object-contain"
        />
      </div>
    </div>
  );
};

export default JoinBrandsSection;
