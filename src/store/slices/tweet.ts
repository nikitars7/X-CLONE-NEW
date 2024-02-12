import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Status, TweetData } from "./tweets";
export const fetchTweet = createAsyncThunk(
  "tweet/fetchTweetStatus",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.get<TweetData>(
        `https://65907955cbf74b575ecad237.mockapi.io/tweets/${id}`
      );
      return res.data as TweetData;
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
  reducers: {
    setTweet(state, action) {
      state.tweet = action.payload;
    },

    // setLoading(state) {
    //   state.tweets = [];
    //   state.isLoading = Status.LOADING;
    // },
    // setError(state) {
    //   state.tweets = [];
    //   state.isLoading = Status.ERROR;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTweet.pending, (state) => {
        state.isLoadingTweet = Status.LOADING;
        state.tweet = undefined;
      })
      .addCase(fetchTweet.fulfilled, (state, action) => {
        state.tweet = action.payload;
        state.isLoadingTweet = Status.SUCCESS;
      })
      .addCase(fetchTweet.rejected, (state) => {
        state.isLoadingTweet = Status.ERROR;
        state.tweet = undefined;
        //state.error = action.payload
      });
  },
});
// export const GET_TWEETS = "tweets/getTweets";
// export const getTweets = createAction(GET_TWEETS);
export const { setTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
