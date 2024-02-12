import { v4 as uuidv4 } from "uuid";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
export const fetchAddTweet = createAsyncThunk(
  "tweet/fetchAddTweetStatus",
  async (text: string, { rejectWithValue }) => {
    const payload = {
      text,
      id: uuidv4(),
      user: {
        fullName: "Nikita",
        userName: "ndev",
        avatarUrl:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
      },
    };
    try {
      const res = await axios.post<TweetData>(
        "https://65907955cbf74b575ecad237.mockapi.io/tweets",
        payload
      );
      return res.data as TweetData;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
export interface TweetData {
  text: string;
  id: string;
  user: {
    fullName: string;
    userName: string;
    avatarUrl: string;
  };
}
interface Tweets {
  tweets: TweetData[];
  isLoadingTweets: Status;
  isAddingTweet: Status;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
const initialState: Tweets = {
  tweets: [],
  isLoadingTweets: Status.LOADING,
  isAddingTweet: Status.LOADING,
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
        state.isLoadingTweets = Status.LOADING;
        state.tweets = [];
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.tweets = action.payload;
        state.isLoadingTweets = Status.SUCCESS;
      })
      .addCase(fetchTweets.rejected, (state) => {
        state.isLoadingTweets = Status.ERROR;
        state.tweets = [];
        //state.error = action.payload
      })
      .addCase(fetchAddTweet.pending, (state) => {
        state.isAddingTweet = Status.LOADING;
      })
      .addCase(fetchAddTweet.fulfilled, (state, action) => {
        state.tweets.push(action.payload);
        state.isAddingTweet = Status.SUCCESS;
      })
      .addCase(fetchAddTweet.rejected, (state) => {
        state.isAddingTweet = Status.ERROR;
        //state.error = action.payload
      });
  },
});
// export const GET_TWEETS = "tweets/getTweets";
// export const getTweets = createAction(GET_TWEETS);
export const { setTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
