import { Routes, Route } from "react-router-dom";
import { router } from ".";

const AppRouter = () => {
  return (
    <Routes>
      {router.map(({ path, component }) => (
        <Route key={path} path={path} Component={component} />
      ))}
    </Routes>
  );
};

export default AppRouter;
