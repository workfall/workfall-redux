// import { configureStore } from '@reduxjs/toolkit' 
import thunk from "redux-thunk";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory, History } from "history";
import createRootReducer from './reducers';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import {isSafari} from "react-device-detect";
import storageSession from "redux-persist/lib/storage/session";

export const history: History = createBrowserHistory();

let persistConfig = {
  key: 'root',
  storage,
  whitelist: ['stepper'],
  blacklist: [],
}

if (isSafari) {
  persistConfig = {
    key: "root",
    storage: storageSession,
    whitelist: ['stepper'],
    blacklist: [],
  };
}

export default function configureStore(initialState?: workfall.state.IRedux) {
  const middlewares = [routerMiddleware(history), thunk];

  const enhancers = [applyMiddleware(...middlewares)];

  let composeEnhancer = compose as any;

  if (process.env.REACT_APP_STAGE === "dev") {
    composeEnhancer =
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  const reducers = createRootReducer(history);

//   // Middleware: Redux Persist Persisted Reducer
  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancer(...enhancers)
  );

  const persistor = persistStore(store);

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextCreateRootReducer = require('./reducers').default
      store.replaceReducer(nextCreateRootReducer(history))
      // store.replaceReducer(require("./reducers").default);
    });
  }

  return { store, persistor };
}