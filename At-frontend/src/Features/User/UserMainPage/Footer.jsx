import React from "react";
import { GiRhinocerosHorn } from "react-icons/gi";

export default function Footer() {
  return (
    <div className=" flex flex-col items-center bg-slate-900 py-14 text-slate-100">
      <div className="transition-all duration-300 hover:scale-110">
        <GiRhinocerosHorn className=" text-6xl text-orange-400" />
        <div className="bg-gradient-to-r from-orange-200 to-orange-400 bg-clip-text text-transparent">
          Assam
        </div>
      </div>
      <div className=" mt-6 flex w-full flex-col px-10 text-slate-400 md:flex-row  md:gap-32 md:px-10  lg:gap-56 lg:px-32 ">
        <div className="w-full">
          <hr className="border border-slate-700" />
          <div className="my-2  flex justify-between text-sm">
            <div className=" hover:scale-110  hover:text-orange-400">
              Contact us
            </div>
            <div className=" hover:scale-110 hover:text-orange-400">
              Privacy Policy
            </div>
            <div className=" hover:scale-110  hover:text-orange-400">Terms</div>
          </div>
        </div>
        <div className="w-full">
          <hr className="border border-slate-700" />
          <div className="mt-2 text-sm">
            Build by Aniket kr. Kushwaha for his resume using react-js and
            node-js.
          </div>
        </div>
      </div>
    </div>
  );
}
