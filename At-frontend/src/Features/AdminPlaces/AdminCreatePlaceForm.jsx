import React, { useEffect } from "react";

import FormRow from "../../Ui/FormRow";
import Button from "../../Ui/Button";
import Input from "../../Ui/Input";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewPlace } from "../../redux/slice/placeSlice";
import toast from "react-hot-toast";
import FileInput from "../../Ui/FileInput";

export default function AdminCreatePlaceForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const { isLoading, isError, status } = useSelector((state) => state.place);
  console.log(isLoading, isError, status);

  function onSubmit(data) {
    dispatch(addNewPlace({ ...data, image: data.image[0] }));
  }

  useEffect(() => {
    if (!isLoading && !isError && status === "success") {
      toast.success("Place successfully added");
      reset();
    } else if (isError) {
      toast.error("Could not add new place, something went wrong");
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
        <FormRow label="Place Name" error={errors?.name?.message}>
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

        <FormRow label="Location" error={errors?.location?.message}>
          <Input
            type="text"
            id="location"
            register={{
              ...register("location", {
                required: "This Field is required",
              }),
            }}
          />
        </FormRow>
        <FormRow label="Transportation" error={errors?.transportation?.message}>
          <Input
            type="text"
            id="tranportation"
            register={{
              ...register("transportation", {
                required: "This Field is required",
              }),
            }}
          />
        </FormRow>
        <FormRow label="Category" error={errors?.category?.message}>
          <Input
            type="text"
            id="category"
            register={{
              ...register("category", {
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
