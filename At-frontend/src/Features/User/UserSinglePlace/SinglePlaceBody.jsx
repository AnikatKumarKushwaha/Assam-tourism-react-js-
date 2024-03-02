import React from "react";

export default function SinglePlaceBody({ description }) {
  return (
    <div className="my-5 px-3 text-sm tracking-wide text-slate-600 sm:text-base">
      {description}
    </div>
  );
}
