import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaceSingleData } from "../../redux/slice/placeSlice";
import { useParams } from "react-router-dom";
import SinglePlaceHeader from "../../Features/User/UserSinglePlace/SinglePlaceHeader";
import SinglePlaceBody from "../../Features/User/UserSinglePlace/SinglePlaceBody";
import SinglePlaceLocation from "../../Features/User/UserSinglePlace/SinglePlaceLocation";
import Footer from "../../Features/User/UserMainPage/Footer";

export default function SingleDetailPage() {
  const dispatch = useDispatch();
  const { isLoading, singleData: data } = useSelector((state) => state.place);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPlaceSingleData(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="bg-slate-100 md:mx-7">
        <SinglePlaceHeader image={data.image} name={data.name} />
        <SinglePlaceLocation
          location={data.location}
          transportation={data.transportation}
        />
        <SinglePlaceBody description={data.description} />
        <Footer />
      </div>
    );
  }
}
