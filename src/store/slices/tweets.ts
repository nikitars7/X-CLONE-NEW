import {
  PayloadAction,
  createSlice,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";
export const fetchTweets = createAsyncThunk(
  "tweets/fetchTweetsStatus",
  async (params, { rejectWithValue }) => {
    try {
      const res = await axios.get<TweetData[]>(
        "https://65907955cbf74b575ecad237.mockapi.io/tweets"
      );
      return res.data as TweetData[];
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
export interface TweetData {
  text: string;
  _id: string;
  user: {
    fullName: string;
    userName: string;
    avatarUrl: string;
  };
}
interface Tweets {
  tweets: TweetData[];
  isLoading: Status;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
const initialState: Tweets = {
  tweets: [],
  isLoading: Status.LOADING,
};

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    setTweets(state, action) {
      state.tweets = action.payload;
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
      .addCase(fetchTweets.pending, (state) => {
        state.isLoading = Status.LOADING;
        state.tweets = [];
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.tweets = action.payload;
        state.isLoading = Status.SUCCESS;
      })
      .addCase(fetchTweets.rejected, (state) => {
        state.isLoading = Status.ERROR;
        state.tweets = [];
        //state.error = action.payload
      });
  },
});
// export const GET_TWEETS = "tweets/getTweets";
// export const getTweets = createAction(GET_TWEETS);
export const { setTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
