import React from "react";

export default function SinglePlaceHeader({ image, name }) {
  return (
    <div
      className="flex h-[80vh] items-end bg-cover"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(254, 215, 170, 0.5), rgba(251, 146, 60, 0.5)),url(${image})`,
      }}
    >
      <div className="px-16 py-20 text-3xl font-bold uppercase text-orange-50">
        {name}
      </div>
    </div>
  );
}
