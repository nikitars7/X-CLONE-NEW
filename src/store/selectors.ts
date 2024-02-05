import { RootState } from "./store";

export const selectTweets = (state: RootState) => state.tweetsReducer;
