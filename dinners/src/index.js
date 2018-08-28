import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import persistState from "redux-localstorage";
import { compose, createStore } from "redux";
import dinnersApp from "./reducers/dinners_app";
// import initialState from './reducers/initial_state'
import { testState as initialState } from "./test/initial_state";

const enhancer = compose(
  persistState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(dinnersApp, initialState, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
