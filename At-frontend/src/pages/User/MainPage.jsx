import React from "react";
import HeaderImage from "../../Features/User/UserMainPage/HeaderImage";
import SectionExperience from "../../Features/User/UserMainPage/SectionExperience";
import Footer from "../../Features/User/UserMainPage/Footer";

export default function MainPage() {
  return (
    <div className="md:mx-10">
      <HeaderImage />
      <SectionExperience />
      <Footer />
    </div>
  );
}
