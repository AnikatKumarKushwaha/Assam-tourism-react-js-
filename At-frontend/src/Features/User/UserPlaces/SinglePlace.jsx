import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function SinglePlace({ place }) {
  const navigate = useNavigate();
  let placeName;

  if (place.name.length > 20) {
    placeName = `${place.name.slice(0, 15)}...`;
  } else {
    placeName = place.name;
  }
  function clickHandeler() {
    if (!!localStorage.getItem("user")) {
      navigate(
        place.location ? `/places/${place._id}` : `/experience/${place._id}`,
      );
    } else {
      toast.success("Login to access this page");
    }
  }

  return (
    <li className="rounded-sm border-2 border-orange-400 bg-slate-50 px-2 py-2">
      <button onClick={clickHandeler}>
        <img
          src={place.image}
          alt="placeImage"
          className="h-28 w-48 object-cover object-center"
        />
        <div className="py-3 text-center uppercase">{placeName}</div>
      </button>
    </li>
  );
}
