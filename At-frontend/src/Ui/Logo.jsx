import React from "react";
import atImage from "../assets/assam-tourism.jpg";

export default function Logo() {
  return (
    <div className="flex justify-center">
      <img className=" w-24 rounded-md" src={atImage} alt="Assam Tourism" />
    </div>
  );
}
