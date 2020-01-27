import React from "react";
import { connect } from "react-redux";
import * as ts from "typescript";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { AppState } from "../../store";
import { forEachChild, syntaxKindNameMapping, ObjectHash } from "../../utils";

import styles from "./ASTOutline.css";

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
      <li>
        {syntaxKindNameMapping[node.kind]}
        <ul>
          <TransitionGroup>
            {forEachChild(node).map(childNode => (
              <CSSTransition
                key={ObjectHash.getHash(childNode)}
                timeout={1000}
                classNames={styles}
              >
                <ASTOutlineConnected node={childNode} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      </li>
    </>
  );

  if (ts.isSourceFile(node)) {
    return (
      <ul>
        <TransitionGroup>{output}</TransitionGroup>
      </ul>
    );
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
