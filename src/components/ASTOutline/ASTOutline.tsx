import React from "react";
import { connect } from "react-redux";
import * as ts from "typescript";

import { AppState } from "../../store";
import { forEachChild, syntaxKindNameMapping, ObjectHash } from "../../utils";

interface ASTOutlineProps {
  node?: ts.Node;
  sourceFile?: ts.SourceFile;
}

function ASTOutline(props: ASTOutlineProps) {
  const { node, sourceFile } = props;
  if (node === undefined || sourceFile === undefined) {
    return null;
  }

  const output = (
    <>
      <li>{syntaxKindNameMapping[node.kind]}</li>
      <ul>
        {forEachChild(node).map(childNode => (
          <ASTOutlineConnected
            key={ObjectHash.getHash(childNode)}
            node={childNode}
          />
        ))}
      </ul>
    </>
  );

  if (ts.isSourceFile(node)) {
    return <ul>{output}</ul>;
  } else {
    return output;
  }
}

type ASTOutlineStateProps = ASTOutlineProps;

const mapStateToProps = (state: AppState) => ({
  node: state.sourceFiles.currentSourceFile,
  sourceFile: state.sourceFiles.currentSourceFile
});
// currentSourceFile from ownProps should take preceedence
const mergeProps = (
  stateProps: ASTOutlineStateProps,
  _dispatchProps: never,
  ownProps: ASTOutlineProps
) => {
  return {
    ...stateProps,
    ...ownProps
  };
};

export { ASTOutline as ASTOutlineUnconnected, ASTOutlineProps };
const ASTOutlineConnected = connect(
  mapStateToProps,
  null,
  mergeProps
)(ASTOutline);
export default ASTOutlineConnected;
