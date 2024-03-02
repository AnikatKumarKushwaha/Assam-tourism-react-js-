import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import FormRow from "../../Ui/FormRow";
import Input from "../../Ui/Input";
import FileInput from "../../Ui/FileInput";
import Button from "../../Ui/Button";
import { updateExperience } from "../../redux/slice/ExperienceSlice";

export default function AdminUpdateExperience({ experienceToEdit = {} }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: experienceToEdit,
  });
  const { errors } = formState;

  const { isLoading, isError } = useSelector((state) => state.experience);

  function onSubmit(data) {
    if (data.image) {
      if (data.image.length === 0) {
        data.image = experienceToEdit.image;
      } else if (data.image.length === 1) {
        data.image = data.image[0];
      }
    }
    dispatch(updateExperience(data));

    if (!isLoading && !isError) {
      toast.success("Place successfully added");
      reset();
    } else if (isError) {
      toast.error("Could not add new place, something went wrong");
      return;
    }
  }
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
              ...register("image"),
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
