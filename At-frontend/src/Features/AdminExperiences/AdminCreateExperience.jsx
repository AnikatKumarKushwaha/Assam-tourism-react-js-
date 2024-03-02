import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";
import FormRow from "../../Ui/FormRow";
import Input from "../../Ui/Input";
import FileInput from "../../Ui/FileInput";
import Button from "../../Ui/Button";
import { addNewExperience } from "../../redux/slice/ExperienceSlice";

export default function AdminCreateExperienceForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const { isLoading, isError, status } = useSelector(
    (state) => state.experience,
  );
  console.log(isLoading, isError, status);

  function onSubmit(data) {
    dispatch(addNewExperience({ ...data, image: data.image[0] }));
  }

  useEffect(() => {
    if (!isLoading && !isError && status === "success") {
      toast.success("Experience successfully added");
      reset();
    } else if (isError) {
      toast.error("Could not add new Experience, something went wrong");
    }
  }, [isLoading, isError, status, reset]);

  function onError(error) {
    console.log(error);
  }

  return (
    <div className="px-5 py-5">
      <form
        className=" rounded-md border border-slate-300 bg-slate-50 px-6 py-4"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <FormRow label="Experience name" error={errors?.name?.message}>
          <Input
            type="text"
            id="name"
            register={{
              ...register("name", {
                required: "This Field is required",
              }),
            }}
          />
        </FormRow>
        <FormRow label="Description" error={errors?.description?.message}>
          <Input
            type="text"
            id="description"
            rows={3}
            register={{
              ...register("description", {
                required: "This Field is required",
                minLength: {
                  value: 10,
                  message: "The field shoul atleast contain length of 50",
                },
              }),
            }}
          />
        </FormRow>

        <FormRow label="Category" error={errors?.location?.message}>
          <Input
            type="text"
            id="type"
            register={{
              ...register("type", {
                required: "This Field is required",
              }),
            }}
          />
        </FormRow>

        <FormRow label="Image" error={errors?.image?.message}>
          <FileInput
            id="image"
            register={{
              ...register("image", {
                required: "This Field is required",
              }),
            }}
          />
        </FormRow>
        <FormRow>
          <Button type="reset" color="danger">
            Reset
          </Button>
          <Button color="primary">Create new Place</Button>
        </FormRow>
      </form>
    </div>
  );
}
