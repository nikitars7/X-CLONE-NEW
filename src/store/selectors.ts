import { RootState } from "./store";

export const selectTweets = (state: RootState) => state.tweetsReducer;
export const selectTweet = (state: RootState) => state.tweetReducer;
export const selectTags = (state: RootState) => state.tagsReducer;
