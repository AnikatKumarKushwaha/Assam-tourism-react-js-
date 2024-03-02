import React from "react";
import PlacesHeader from "../../Features/User/UserPlaces/PlacesHeader";
import PlacesList from "../../Features/User/UserPlaces/PlacesList";
import Footer from "../../Features/User/UserMainPage/Footer";

export default function Places() {
  return (
    <div className=" bg-slate-100 text-slate-600 md:mx-10">
      <PlacesHeader />
      <PlacesList />
      <Footer />
    </div>
  );
}
