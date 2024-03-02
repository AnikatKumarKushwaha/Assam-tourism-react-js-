import React, { useEffect } from "react";
import AdminSinglePlace from "../../Features/AdminPlaces/AdminSinglePlace";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaces } from "../../redux/slice/placeSlice";

export default function AdminPlaces() {
  const dispatch = useDispatch();
  const {
    isLoading,
    data: places,
    isError: error,
    status,
  } = useSelector((state) => state.place);

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  if (isLoading) {
    return <div>...Loading</div>;
  } else {
    return (
      <>
        <div>
          <div className="flex justify-between">
            <h1 className=" text-2xl font-medium">Places</h1>
            <p>Filter/Sort</p>
          </div>

          <header className="mt-5 overflow-hidden rounded-t-md border border-stone-200 text-lg font-semibold">
            <ul className=" grid grid-cols-[0.6fr_1.4fr_2.2fr_1fr_1fr] place-items-center items-center justify-center gap-y-4 bg-slate-50 px-2 py-2 uppercase tracking-wide text-slate-600">
              <li>Image</li>
              <li>Name</li>
              <li>Description</li>

              <li>Transportation</li>
              <li>Operations</li>
            </ul>
          </header>

          <ul className=" flex flex-col gap-2">
            {places.map((place) => (
              <AdminSinglePlace
                place={place}
                key={place._id}
                error={error}
                isLoading={isLoading}
                status={status}
              />
            ))}
          </ul>
        </div>
      </>
    );
  }
}
