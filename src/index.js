import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import {FitToViewport} from "react-fit-to-viewport";
import App from "./components/App";
import reducers from "./reducers";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  // <React.StrictMode>
    <FitToViewport width={670} height={670} minZoom={0} maxZoom={.7}>
      <Provider store={store}>
  
      <App/>
    </Provider>
  </FitToViewport>
    ,
  // </React.StrictMode>,
  document.querySelector("#root")
);
