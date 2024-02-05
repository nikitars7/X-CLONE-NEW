// import { put, takeEvery, call } from "redux-saga/effects";
// import { TweetsApi } from "../../services/API/tweetsApi";
// import { GET_TWEETS, TweetData, setError, setTweets } from "../slices/tweets";
// import { AxiosResponse } from "axios";

// function* fetchTweetsRequest(): any {
//   try {
//     const response: AxiosResponse<TweetData[]> = yield call(
//       TweetsApi.fetchTweets
//     );
//     yield put(setTweets(response));
//   } catch (error) {
//     yield put(setError());
//   }
// }

// export function* watchMySaga() {
//   yield takeEvery(GET_TWEETS, fetchTweetsRequest);
// }
// export default fetchTweetsRequest;
