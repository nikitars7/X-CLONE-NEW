import { Routes, Route } from "react-router-dom";
import { privateRouter, publicRouter } from ".";
import MainLayout from "../layouts/MainLayout";
import { useAppDispatch } from "../store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "../store/slices/userAuth";

const AppRouter = () => {
  const data = useSelector(selectIsAuth);
  console.log(data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <Routes>
      {data ? (
        <Route path="/home" element={<MainLayout />}>
          {privateRouter.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
      ) : (
        publicRouter.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))
      )}
    </Routes>
  );
};

export default AppRouter;
