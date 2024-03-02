import React from "react";
import SinglePlace from "./SinglePlace";

export default function PlaceCategory({ list, header }) {
  return (
    <div>
      <hr className="my-7 h-1 bg-gradient-to-r from-orange-200 to-orange-400" />
      <div className=" text-2xl font-bold">{header}</div>
      <ul className="my-7 grid grid-flow-row grid-cols-2 justify-items-center gap-6 px-1 sm:grid-cols-4 sm:px-0">
        {list.map((place) => (
          <SinglePlace place={place} key={place._id} />
        ))}
      </ul>
    </div>
  );
}
