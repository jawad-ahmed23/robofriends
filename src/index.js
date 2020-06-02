import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { requestRobotsReducer, searchRobotsReducer } from "./redux/reducers";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "tachyons";

const rootReducer = combineReducers({
  robotsReducer: requestRobotsReducer,
  searchField: searchRobotsReducer,
});
const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
