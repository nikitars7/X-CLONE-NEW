import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../axios";
import { Status, TweetData, TweetsResponse } from "./tweets";
export const fetchTweet = createAsyncThunk(
  "tweet/fetchTweetStatus",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.get<TweetsResponse<TweetData>>(
        `/x-clone/tweets/${id}`
      );
      return res.data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
interface Tweets {
  tweet: TweetData | undefined;
  isLoadingTweet: Status;
}
const initialState: Tweets = {
  tweet: undefined,
  isLoadingTweet: Status.LOADING,
};

const tweetSlice = createSlice({
  name: "tweets",
  initialState,

  reducers: (create) => ({
    setTweet: create.reducer(
      (state, action: PayloadAction<TweetData | undefined>) => {
        state.tweet = action.payload;
      }
    ),
  }),

  selectors: {
    selectTweet: (state) => state,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTweet.pending, (state) => {
        state.isLoadingTweet = Status.LOADING;
        state.tweet = undefined;
      })
      .addCase(fetchTweet.fulfilled, (state, action) => {
        state.tweet = action.payload.data;
        state.isLoadingTweet = Status.SUCCESS;
      })
      .addCase(fetchTweet.rejected, (state) => {
        state.isLoadingTweet = Status.ERROR;
        state.tweet = undefined;
        //state.error = action.payload
      });
  },
});
export const { setTweet } = tweetSlice.actions;
export const { selectTweet } = tweetSlice.selectors;
export default tweetSlice.reducer;
