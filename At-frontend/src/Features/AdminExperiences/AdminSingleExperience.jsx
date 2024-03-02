import React, { useState } from "react";
import Button from "../../Ui/Button";
import { useDispatch } from "react-redux";

import { removeExperience } from "../../redux/slice/ExperienceSlice";
import AdminUpdateExperience from "./AdminUpdateExperience";

export default function AdminSingleExperience({
  experience,
  error,
  isLoading,
  status,
}) {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const truncatedName =
    experience.name.length > 20
      ? `${experience.name.slice(0, 20)}...`
      : experience.name;
  const truncatedDescription =
    experience.description.length > 30
      ? `${experience.description.slice(0, 30)}...`
      : experience.description;

  function handelDelete() {
    dispatch(removeExperience(experience._id));
  }

  return (
    <>
      <li className="grid grid-cols-[0.6fr_1.4fr_2.2fr_1fr_1fr] place-items-center items-center rounded-md border border-stone-200 bg-stone-50">
        <div className="w-15 h-24">
          <img
            className="m-2 h-[80%] w-full rounded-sm object-cover"
            src={experience.image}
            alt="experience_image"
          />
        </div>
        <div>{truncatedName}</div>
        <div>{truncatedDescription}</div>
        <div>{experience.type}</div>
        <div>
          <Button onClick={handelDelete} color="danger">
            Delete
          </Button>
          <Button color="primary" onClick={() => setShowForm(!showForm)}>
            Edit
          </Button>
        </div>
      </li>
      {showForm && (
        <div className="rounded-md border border-stone-200 bg-stone-50 px-2 py-1">
          <AdminUpdateExperience experienceToEdit={experience} />
        </div>
      )}
    </>
  );
}
