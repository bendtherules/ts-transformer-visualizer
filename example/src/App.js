import React, { Component } from "react";

import {
  ASTVisualizer,
  initSourceFile,
  updateSourceFile
} from "ts-transformer-visualizer";
import * as ts from "typescript";

const source = "x = 1;";

const mainFile = ts.createSourceFile("/test", source, ts.ScriptTarget.ES2015);

const transformer = context => {
  return sourceFile => {
    /**
     *
     * @param {ts.Node} node
     * @returns {ts.VisitResult<ts.Node>}
     */
    const visitor = node => {
      // If it is a expression statement,
      if (ts.isExpressionStatement(node)) {
        // Return it twice.
        // Effectively duplicating the statement
        return [node, ts.getMutableClone(node)];
      }

      return ts.visitEachChild(node, visitor, context);
    };
    return ts.visitNode(sourceFile, visitor);
  };
};

// const printer = ts.createPrinter();
// const result = ts.transform(mainFile, [transformer]);
// const transformedSourceFile = result.transformed[0];
// const newContent = printer.printFile(transformedSourceFile);
// result.dispose();

// console.log(newContent);

export default class App extends Component {
  componentDidMount() {
    initSourceFile(mainFile);

    setTimeout(() => {
      const modifiedFile = ts.transform(mainFile, [transformer]).transformed[0];
      updateSourceFile(modifiedFile);
    }, 5000);
  }
  render() {
    return (
      <div>
        <ASTVisualizer />
      </div>
    );
  }
}
