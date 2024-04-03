import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import tweetsReducer from "./slices/tweets";
import tagsReducer from "./slices/tags";
import tweetReducer from "./slices/tweet";
import authReducer from "./slices/userAuth";
export const store = configureStore({
  reducer: {
    tweetsReducer,
    tweetReducer,
    tagsReducer,
    authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
