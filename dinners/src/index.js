import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import persistState from "redux-localstorage";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dinnersApp from "./reducers/index";
import { getInitialState } from "./actions/initialStateFromFirebase";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(persistState(), applyMiddleware(thunk));

const store = createStore(dinnersApp, enhancer);

store.dispatch(getInitialState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
