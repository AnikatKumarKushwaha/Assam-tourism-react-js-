import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addExperience,
  deleteExperiences,
  editExperience,
  getExperiences,
  getSingleExperienceData,
} from "../../services/ExperiencesApi";

export const fetchExperience = createAsyncThunk(
  "fetchExperience",
  getExperiences,
);
export const fetchSingleExperience = createAsyncThunk(
  "fetchSingleExperience",
  getSingleExperienceData,
);

export const removeExperience = createAsyncThunk(
  "deleteExperience",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await deleteExperiences(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "failed to delete data");
    }
  },
);

export const addNewExperience = createAsyncThunk(
  "addExperience",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await addExperience(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "failed to add data");
    }
  },
);

export const updateExperience = createAsyncThunk(
  "updatePlace",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await editExperience(payload);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Cannot update data, something went wrong",
      );
    }
  },
);

const initialState = {
  isLoading: false,
  status: "",
  data: [],
  singleData: {},
  isError: false,
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExperience.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchExperience.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchExperience.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error", action.payload);
      state.isError = true;
    });

    /////////delete////

    builder.addCase(removeExperience.pending, (state, action) => {
      state.isLoading = true;
      state.status = "pending";
    });
    builder.addCase(removeExperience.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = "fulfilled";
      state.isError = false;

      const id = action.payload.data._id;
      if (id) {
        state.data = state.data.filter((ele) => ele._id !== id);
      }
    });
    builder.addCase(removeExperience.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.status = "error";
      state.isError = true;
      state.isLoading = false;
    });

    //add places
    builder.addCase(addNewExperience.pending, (state, action) => {
      state.isLoading = true;
      state.status = "pending";
    });
    builder.addCase(addNewExperience.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;

      state.status = "success";
    });
    builder.addCase(addNewExperience.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.status = "error";
      state.isLoading = false;
    });

    //Update places
    builder.addCase(updateExperience.pending, (state, action) => {
      state.isLoading = true;
      state.status = "pending";
    });
    builder.addCase(updateExperience.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = state.data.map((ele) =>
        ele._id === action.payload.data._id ? { ...action.payload.data } : ele,
      );
      state.status = "success";
    });
    builder.addCase(updateExperience.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.status = "error";
      state.isLoading = false;
    });
    //single experience data
    builder.addCase(fetchSingleExperience.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleExperience.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleData = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchSingleExperience.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default experienceSlice.reducer;
