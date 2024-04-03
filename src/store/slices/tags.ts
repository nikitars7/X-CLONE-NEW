import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchTags = createAsyncThunk(
  "tags/fetchTagsStatus",
  async (params, { rejectWithValue }) => {
    try {
      const res = await axios.get<TagsData[]>(
        "https://65c2332af7e6ea59682adb59.mockapi.io/tags"
      );
      return res.data as TagsData[];
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
export interface TagsData {
  _id: string;
  name: string;
  count: string;
}
interface Tags {
  tags: TagsData[];
  isLoadingTags: Status;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
const initialState: Tags = {
  tags: [],
  isLoadingTags: Status.LOADING,
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,

  reducers: (create) => ({
    setTags: create.reducer((state, action: PayloadAction<TagsData[]>) => {
      state.tags = action.payload;
    }),
  }),

  selectors: {
    selectTags: (state) => state,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isLoadingTags = Status.LOADING;
        state.tags = [];
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.tags = action.payload;
        state.isLoadingTags = Status.SUCCESS;
      })
      .addCase(fetchTags.rejected, (state) => {
        state.isLoadingTags = Status.ERROR;
        state.tags = [];
      });
  },
});
export const { setTags } = tagsSlice.actions;
export const { selectTags } = tagsSlice.selectors;
export default tagsSlice.reducer;
