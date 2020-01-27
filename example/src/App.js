import React, { Component } from "react";

import {
  ASTVisualizer,
  initSourceFile,
  updateSourceFile
} from "ts-transformer-visualizer";
import * as ts from "typescript";

const source = "x = y;\nx=1;\nx=y=z;";

const mainFile = ts.createSourceFile("/test", source, ts.ScriptTarget.ES2015);

const transformer = context => {
  return sourceFile => {
    /**
     *
     * @param {ts.Node} node
     * @returns {ts.VisitResult<ts.Node>}
     */
    const visitor = node => {
      if (
        ts.isBinaryExpression(node) &&
        node.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
        ts.isIdentifier(node.left) &&
        ts.isIdentifier(node.right)
      ) {
        return ts.updateBinary(node, node.right, node.left);
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
