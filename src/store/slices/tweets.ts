// import { v4 as uuidv4 } from "uuid";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../axios";
export interface TweetsResponse<T> {
  status: string;
  data: T;
}
export const fetchTweets = createAsyncThunk(
  "tweets/fetchTweetsStatus",
  async (params, { rejectWithValue }) => {
    try {
      const res = await axios.get<TweetsResponse<TweetData[]>>(
        "/x-clone/tweets"
      );
      return res.data as TweetsResponse<TweetData[]>;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
export const fetchAddTweet = createAsyncThunk(
  "tweet/fetchAddTweetStatus",
  async (payload: string, { rejectWithValue }) => {
    // const payload = {
    //   text,
    //   id: uuidv4(),
    //   user: {
    //     fullName: "Nikita",
    //     userName: "ndev",
    //     avatarUrl:
    //       "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    //   },
    // };
    try {
      const res = await axios.post<TweetsResponse<TweetData>>(
        "/x-clone/tweets",
        { text: payload }
      );
      return res.data as TweetsResponse<TweetData>;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
export interface TweetData {
  text: string;
  _id: string;
  createdAt: string;
  user: {
    _id: string;
    fullname: string;
    username: string;
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
  NEVER = "never",
}
const initialState: Tweets = {
  tweets: [],
  isLoadingTweets: Status.LOADING,
  isAddingTweet: Status.NEVER,
};

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,

  reducers: (create) => ({
    setTweets: create.reducer((state, action: PayloadAction<TweetData[]>) => {
      state.tweets = action.payload;
    }),
  }),

  selectors: {
    selectTweets: (state) => state,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTweets.pending, (state) => {
        state.isLoadingTweets = Status.LOADING;
        state.tweets = [];
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.tweets = action.payload.data;
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
        state.isAddingTweet = Status.SUCCESS;
        state.tweets.unshift(action.payload.data);
      })
      .addCase(fetchAddTweet.rejected, (state) => {
        state.isAddingTweet = Status.ERROR;
        //state.error = action.payload
      });
  },
});
export const { setTweets } = tweetsSlice.actions;
export const { selectTweets } = tweetsSlice.selectors;
export default tweetsSlice.reducer;
