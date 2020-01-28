import * as ts from "typescript";
import { TransformModuleExport } from "../types";

const sourceCodeString = `\
let a = 1;
a = 2;
a++;
`;

const transformer: ts.TransformerFactory<ts.SourceFile> = context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // If it is a expression statement,
      if (ts.isExpressionStatement(node)) {
        // Return it twice.
        // Effectively duplicating the statement
        return [node, node];
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
