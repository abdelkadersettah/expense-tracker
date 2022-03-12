import { Route, Routes } from "react-router-dom";
import Charts from "../components/Charts/Charts";
import Home from "../pages/Home/Home";
import { CHARTS, HOME } from "../utils/Constants/RoutesPath";

interface MainRouterProps {}

const MainRouter: React.FunctionComponent<MainRouterProps> = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />}></Route>
      <Route path={CHARTS} element={<Charts />}></Route>
    </Routes>
  );
};

export default MainRouter;
