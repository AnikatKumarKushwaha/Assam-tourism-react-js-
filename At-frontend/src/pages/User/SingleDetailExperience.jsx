import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchExperience,
  fetchSingleExperience,
} from "../../redux/slice/ExperienceSlice";
import SinglePlaceHeader from "../../Features/User/UserSinglePlace/SinglePlaceHeader";
import SinglePlaceBody from "../../Features/User/UserSinglePlace/SinglePlaceBody";
import Footer from "../../Features/User/UserMainPage/Footer";

export default function SingleDetailExperience() {
  const dispatch = useDispatch();
  const { isLoading, singleData: data } = useSelector(
    (state) => state.experience,
  );

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleExperience(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    console.log(data);
    return (
      <div className="bg-slate-100 md:mx-7">
        <SinglePlaceHeader image={data.image} name={data.name} />

        <SinglePlaceBody description={data.description} />
        <Footer />
      </div>
    );
  }
}
