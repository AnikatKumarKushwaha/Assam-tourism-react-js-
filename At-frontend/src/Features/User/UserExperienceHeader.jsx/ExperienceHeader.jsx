import React from "react";
import experienceHeader from "../../../assets/sectionExperience_header.jpg";

export default function ExperienceHeader() {
  return (
    <div>
      <div
        className="flex h-[40vh] items-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(254, 215, 170, 0.5), rgba(251, 146, 60, 0.5)),url(${experienceHeader})`,
        }}
      >
        <div className=" pl-2 text-3xl font-bold uppercase text-orange-50 sm:pl-16">
          Destinations
        </div>
      </div>
      <div className=" my-7 px-2 text-sm sm:px-0">
        Assam will open your senses. From cultural highlights to
        adrenaline-pumping activities, there are a lot of memorable experiences
        waiting for the interested explorer. We hope you enjoy our list of
        experiences – whatever type of traveller you are, you will relish the
        options
      </div>
    </div>
  );
}
