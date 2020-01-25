/**
 * @class ExampleComponent
 */

import * as React from "react";
import { bindActionCreators } from "redux";
import { Provider } from "react-redux";

import ASTOutline from "./components/ASTOutline";
import {
  CodeOutputForInitial,
  CodeOutputForCurrent
} from "./components/CodeOutput";

import configureStore from "./store";
import { initSourceFile, updateSourceFile } from "./store/sourceFiles/actions";

// import styles from "./styles.css";

const store = configureStore();

export function ASTVisualizer() {
  return (
    <Provider store={store}>
      Initial:
      <br />
      <CodeOutputForInitial />
      Current:
      <br />
      <CodeOutputForCurrent />
      <ASTOutline />
    </Provider>
  );
}

const {
  initSourceFile: initSourceFileConnected,
  updateSourceFile: updateSourceFileConnected
} = bindActionCreators({ initSourceFile, updateSourceFile }, store.dispatch);

export {
  initSourceFileConnected as initSourceFile,
  updateSourceFileConnected as updateSourceFile
};
