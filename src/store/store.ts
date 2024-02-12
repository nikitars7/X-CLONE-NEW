import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
import { useDispatch } from "react-redux";
import tweetsReducer from "./slices/tweets";
import tagsReducer from "./slices/tags";
import tweetReducer from "./slices/tweet";
// import  { watchMySaga } from "./saga/saga";

// const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tweetsReducer,
    tweetReducer,
    tagsReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// sagaMiddleware.run(watchMySaga);

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
