import * as ts from "typescript";
import { highlightNode } from "ts-transformer-visualizer";

import { TransformModuleExport } from "../types";

const sourceCodeString = `\
let foo = 1, bar = 2;
foo = bar;
{
  bar++;
  "bar"
  function() {console.log(bar)}
}
`;

const transformer: ts.TransformerFactory<ts.SourceFile> = context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.Node => {
      if (ts.isIdentifier(node)) {
        highlightNode(node);
        console.log(node.text);
      }
      return ts.visitEachChild(node, visitor, context);
    };

    return ts.visitNode(sourceFile, visitor);
  };
};

const toExport: TransformModuleExport = {
  sourceCodeString,
  transformer,
};

export default toExport;
