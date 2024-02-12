import { lazy, Suspense } from "react";
import SignIn from "../pages/SignIn/SignIn";
import { CircularProgress } from "@mui/material";
import LoaderX from "../UI/LoaderX/LoaderX";
import FullTweet from "../pages/FullTweet";
const Home = lazy(() => import(/*webpackChunkName: 'Home'*/ "../pages/Home"));
export const router = [
  {
    path: "/home",
    component: (
      <Suspense fallback={<LoaderX />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/home/tweet/:id",
    component: (
      <Suspense fallback={<CircularProgress />}>
        <FullTweet />
      </Suspense>
    ),
  },
  // { path: "/login", component: <SignIn /> },
];
