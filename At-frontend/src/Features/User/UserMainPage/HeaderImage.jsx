import { useSelector } from "react-redux";
import headerImage from "../../../assets/mainHeader_1.jpg";

import React from "react";

export default function HeaderImage() {
  const { data } = useSelector((state) => state.user);
  console.log(data);
  return (
    <div
      className="relative top-0 z-[-1] flex h-[80vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right,rgba(254, 215, 170, 0.5), rgba(251, 146, 60, 0.5)), url(${headerImage})`,
      }}
    >
      <div>
        <div className="text-center text-2xl font-bold uppercase text-orange-50 md:text-3xl">
          Explore The Beauty Of Assam
        </div>
        <div className=" mt-8 text-center">
          <button className=" rounded-2xl  bg-green-600 px-3 py-2 text-sm uppercase text-green-50 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 md:px-4 md:py-2 md:text-base">
            Discover Places
          </button>
        </div>
      </div>
    </div>
  );
}
