import { Routes, Route } from "react-router-dom";
import { privateRouter, publicRouter } from ".";
import MainLayout from "../layouts/MainLayout";

const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth ? (
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
