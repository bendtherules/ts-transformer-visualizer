import * as React from "react";
import { bindActionCreators } from "redux";
import { Provider } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";

import ASTOutline from "./components/ASTOutline";
import CodeOutputDiff from "./components/CodeOutput";

import configureStore from "./store";
import {
  initSourceFile,
  updateSourceFile,
  clearSourceFile
} from "./store/sourceFiles/actions";

import styles from "./styles.css";

const store = configureStore();

export function ASTVisualizer() {
  return (
    <Provider store={store}>
      <Grid fluid className={styles.wrapperWhole}>
        <Row>
          <Col xs={12}>
            <h1 className={styles.title}>AST Transformation visualizer</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className={styles.hideOverflow}>
            <Row>
              <h2 className={styles.titleLight}>AST Inline Diff</h2>
            </Row>
            <ASTOutline />
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <h2 className={styles.titleLight}>Code output Diff</h2>
            </Row>
            <Row>
              <Col xs={6} className={styles.titleLight}>
                Input
              </Col>
              <Col xs={6} className={styles.titleLight}>
                Output
              </Col>
            </Row>
            <CodeOutputDiff />
          </Col>
        </Row>
      </Grid>
    </Provider>
  );
}

const {
  initSourceFile: initSourceFileConnected,
  updateSourceFile: updateSourceFileConnected,
  clearSourceFile: clearSourceFileConnected
} = bindActionCreators(
  { initSourceFile, updateSourceFile, clearSourceFile },
  store.dispatch
);

export {
  initSourceFileConnected as initSourceFile,
  updateSourceFileConnected as updateSourceFile,
  clearSourceFileConnected as clearSourceFile
};
