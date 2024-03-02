import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addplace,
  deletePlace,
  editPlace,
  getPlaces,
  getSinglePlace,
  searchPlace,
} from "../../services/PlacesApi";

const initialState = {
  isLoading: false,
  status: "",
  data: [],
  singleData: {},
  isError: false,
  searchData: [],
};

//action

export const placeSearch = createAsyncThunk(
  "serchPlace",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await searchPlace(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch search results");
    }
  },
);

//getPlaces
export const fetchPlaces = createAsyncThunk(
  "fetchPlaces",
  async (payload, { rejectWithValue }) => {
    const data = await getPlaces();
    return data;
  },
);

//get single place
export const getPlaceSingleData = createAsyncThunk("getPlace", getSinglePlace);
//deletePlace
export const deletePlaces = createAsyncThunk(
  "deletePlaces",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await deletePlace(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "failed to delete data");
    }
  },
);

//AddNewPlace
export const addNewPlace = createAsyncThunk(
  "addNewPlace",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await addplace(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "failed to add data");
    }
  },
);
//updatePlace
export const updatePlace = createAsyncThunk(
  "updatePlace",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await editPlace(payload);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Cannot update data, something went wrong",
      );
    }
  },
);

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //places

    builder.addCase(fetchPlaces.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPlaces.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchPlaces.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error", action.payload);
      state.isError = true;
    });

    //delete places
    builder.addCase(deletePlaces.pending, (state, action) => {
      state.isLoading = true;
      state.status = "pending";
    });
    builder.addCase(deletePlaces.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = "fulfilled";
      state.isError = false;

      const id = action.payload.data._id;
      if (id) {
        state.data = state.data.filter((ele) => ele._id !== id);
      }
    });
    builder.addCase(deletePlaces.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.status = "error";
      state.isError = true;
      state.isLoading = false;
    });
    //add places
    builder.addCase(addNewPlace.pending, (state, action) => {
      state.isLoading = true;
      state.status = "pending";
    });
    builder.addCase(addNewPlace.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;

      state.status = "success";
    });
    builder.addCase(addNewPlace.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.status = "error";
      state.isLoading = false;
    });
    //Update places
    builder.addCase(updatePlace.pending, (state, action) => {
      state.isLoading = true;
      state.status = "pending";
    });
    builder.addCase(updatePlace.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = state.data.map((ele) =>
        ele._id === action.payload.data._id ? { ...action.payload.data } : ele,
      );
      state.status = "success";
    });
    builder.addCase(updatePlace.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.status = "error";
      state.isLoading = false;
    });

    //get single place

    builder.addCase(getPlaceSingleData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getPlaceSingleData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleData = action.payload;
      state.isError = false;
    });
    builder.addCase(getPlaceSingleData.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error", action.payload);
      state.isError = true;
    });
    //searchPlaces
    builder.addCase(placeSearch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(placeSearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchData = action.payload;
      state.isError = false;
    });
    builder.addCase(placeSearch.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default placeSlice.reducer;
