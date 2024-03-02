import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaces } from "../../../redux/slice/placeSlice";
import PlaceCategory from "./PlaceCategory";

export default function PlacesList() {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.place);
  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loadiing...</div>;
  } else {
    const temple = data.filter((place) => place.category === "temple");
    const river = data.filter((place) => place.category === "river island");
    const nationalPark = data.filter(
      (place) => place.category === "National Park",
    );

    return (
      <>
        {temple.length > 0 && (
          <div>
            <PlaceCategory list={temple} header="Temple" />
          </div>
        )}
        {river.length > 0 && (
          <div>
            <PlaceCategory list={river} header="River Island" />
          </div>
        )}
        {nationalPark.length > 0 && (
          <div>
            <PlaceCategory list={nationalPark} header="National Park" />
          </div>
        )}
      </>
    );
  }
}
