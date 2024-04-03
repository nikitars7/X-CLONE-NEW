import { lazy, Suspense } from "react";
import SignIn from "../pages/SignIn/SignIn";
import LoaderX from "../UI/LoaderX/LoaderX";
import FullTweet from "../pages/FullTweet";
const Home = lazy(() => import(/*webpackChunkName: 'Home'*/ "../pages/Home"));
export const privateRouter = [
  {
    path: "/",
    component: (
      <Suspense fallback={<LoaderX />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/home/tweet/:id",
    component: <FullTweet />,
  },
];
export const publicRouter = [{ path: "/signin", component: <SignIn /> }];
