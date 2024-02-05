import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
import { useDispatch } from "react-redux";
import tweetsReducer from "./slices/tweets";
// import  { watchMySaga } from "./saga/saga";

// const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tweetsReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// sagaMiddleware.run(watchMySaga);

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
