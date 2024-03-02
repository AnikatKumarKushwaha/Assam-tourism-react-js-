import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PlaceCategory from "../UserPlaces/PlaceCategory";
import { fetchExperience } from "../../../redux/slice/ExperienceSlice";

export default function ExperienceList() {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.experience);
  useEffect(() => {
    dispatch(fetchExperience());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loadiing...</div>;
  } else {
    const festival = data.filter((place) => place.type === "festival");
    const adventure = data.filter((place) => place.type === "adventure");

    return (
      <>
        {festival.length > 0 && (
          <div>
            <PlaceCategory list={festival} header="Festivals" />
          </div>
        )}
        {adventure.length > 0 && (
          <div>
            <PlaceCategory list={adventure} header="Adventure" />
          </div>
        )}
      </>
    );
  }
}
