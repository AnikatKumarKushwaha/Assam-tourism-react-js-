import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./slice/placeSlice";
import experienceReducer from "./slice/ExperienceSlice";
import userReducer from "./slice/UserSlice";

export const store = configureStore({
  reducer: {
    place: placeReducer,
    experience: experienceReducer,
    user: userReducer,
  },
});
