import React from "react";
import placeHeaderImage from "../../../assets/place_header_1.jpg";

export default function PlacesHeader() {
  return (
    <div>
      <div
        className="flex h-[40vh] items-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(254, 215, 170, 0.5), rgba(251, 146, 60, 0.5)),url(${placeHeaderImage})`,
        }}
      >
        <div className=" pl-3 text-3xl font-bold uppercase text-orange-50 sm:pl-16">
          Destinations
        </div>
      </div>
      <div className=" my-7 px-3 text-sm md:px-0">
        Our Destinations list reflects the diversity of Assam's landscapes and
        traditions.We have added information like themes and activities to help
        you shortlist places according to what interests you have. Many of our
        destinations require you to head into rural heartlands and wild spaces,
        so information like distance from the nearest urban centres will help
        you schedule better. We also continue to add tidbits like places to stop
        enroute and lodging options so you have a complete and authentic
        experience wherever you go. Enjoy discovering Assam's beautiful secrets.
        Get started now.
      </div>
    </div>
  );
}
