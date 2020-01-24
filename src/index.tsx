/**
 * @class ExampleComponent
 */

import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import { initSourceFile, updateSourceFile } from "./store/sourceFiles/actions";

import styles from "./styles.css";

export type Props = { text: string };

const store = configureStore();

export class ExampleComponent extends React.Component<Props> {
  render() {
    const { text } = this.props;

    return (
      <Provider store={store}>
        <div className={styles.test}>Example Component: {text}</div>
      </Provider>
    );
  }
}

export { initSourceFile, updateSourceFile };
