import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const fetchWorldDataList = createAsyncThunk(
  "chartsMaster/fetchWorldDataList",
  async () => {
    try {
      const response = await axios.get("https://disease.sh/v3/covid-19/all");
      return {
        worldDataList: response?.data,
        // totalPages: response?.data?.count?.total
      };
    } catch (e) {
      toast.error(e?.response?.data?.message);
    }
  }
);

export const fetchCountryDataList = createAsyncThunk(
  "chartsMaster/fetchCountryDataList",
  async () => {
    try {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/countries"
      );
      return {
        countryDataList: response?.data,
      };
    } catch (e) {
      toast.error(e?.response?.data?.message);
    }
  }
);

export const fetchGraphDataList = createAsyncThunk(
  "chartsMaster/fetchGraphDataList",
  async () => {
    try {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      return {
        graphDataList: response?.data,
        // totalPages: response?.data?.count?.total
      };
    } catch (e) {
      toast.error(e?.response?.data?.message);
    }
  }
);

export const chartsMaster = createSlice({
  name: "chartsMaster",
  initialState: {
    worldDataList: [],
    countryDataList: [],
    graphDataList: [],
    loader: true,
    params: {
      pageNo: 1,
      pageSize: 10,
      search: "",
    },
    totalPages: 0,
    selected: null,
  },
  reducers: {
    selectDesignation: (state, action) => {
      if (action.payload === null) {
        state.selected = null;
      } else {
        state.selected = action.payload;
      }
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setPageNo: (state, action) => {
      state.params = { ...state.params, pageNo: action.payload };
    },
    setPageSize: (state, action) => {
      state.params = { ...state.params, pageSize: action.payload };
    },
    setSearch: (state, action) => {
      state.params = { ...state.params, search: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorldDataList.fulfilled, (state, action) => {
        state.worldDataList = action?.payload?.worldDataList;
      })
      .addCase(fetchCountryDataList.fulfilled, (state, action) => {
        state.countryDataList = action?.payload?.countryDataList;
      })
      .addCase(fetchGraphDataList.fulfilled, (state, action) => {
        state.graphDataList = action?.payload?.graphDataList;
      });
  },
});

export const {
  selectDesignation,
  setLoader,
  setPageNo,
  setPageSize,
  setSearch,
} = chartsMaster.actions;

export default chartsMaster.reducer;
