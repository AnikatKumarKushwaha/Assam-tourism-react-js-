import React from "react";
import ExperienceHeader from "../../Features/User/UserExperienceHeader.jsx/ExperienceHeader";
import ExperienceList from "../../Features/User/UserExperienceHeader.jsx/ExperienceList";
import Footer from "../../Features/User/UserMainPage/Footer";

export default function Experiences() {
  return (
    <div className=" bg-slate-100 text-slate-600 md:mx-10">
      <ExperienceHeader />
      <ExperienceList />
      <Footer />
    </div>
  );
}
