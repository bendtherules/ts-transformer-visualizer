import * as ts from "typescript";
import { TransformModuleExport } from "../types";

const sourceCodeString = `x = y; a = b + c`;

const transformer: ts.TransformerFactory<ts.SourceFile> = context => {
  return sourceFile => {
    const visitor = (node: ts.Node): ts.Node => {
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

const toExport: TransformModuleExport = {
  sourceCodeString,
  transformer
};

export default toExport;
