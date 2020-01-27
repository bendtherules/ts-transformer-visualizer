import {
  createStore,
  combineReducers,
  applyMiddleware,
  Middleware
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { sourceFilesReducer } from "./sourceFiles/reducer";

const rootReducer = combineReducers({
  sourceFiles: sourceFilesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares: Middleware[] = [];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
