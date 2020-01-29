import {
  createStore,
  combineReducers,
  applyMiddleware,
  Middleware
} from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  sourceFilesReducer,
  highlightedNodesReducer
} from "./sourceFiles/reducer";

const rootReducer = combineReducers({
  sourceFiles: sourceFilesReducer,
  highlightedNodes: highlightedNodesReducer
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

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
