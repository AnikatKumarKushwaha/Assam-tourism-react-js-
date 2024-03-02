import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa";

export default function SinglePlaceLocation({ location, transportation }) {
  return (
    <div className="mt-4 px-3">
      <div className="mb-3 flex items-center gap-2  text-base font-semibold text-slate-600">
        <div>
          <FaLocationDot />
        </div>
        <div>
          Location : <span className=" text-sm font-normal">{location}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-base font-semibold text-slate-600">
        <div>
          <FaPlane />
        </div>
        Consolidate:{" "}
        <span className=" text-sm font-normal">{transportation}</span>
      </div>
    </div>
  );
}
