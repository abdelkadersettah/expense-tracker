import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.scss";

import MainRouter from "./routers/MainRouter";
import { actionCreators, State } from "./state";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { addCategory, addItem, removeCategory, removeItem, getCategory } =
    bindActionCreators(actionCreators, dispatch);

  const state = useSelector((state: State) => state.categories);
  const state2 = useSelector((state: State) => state.budget);
  return (
    <div className="App">
      <MainRouter />
    </div>
  );
};

export default App;
