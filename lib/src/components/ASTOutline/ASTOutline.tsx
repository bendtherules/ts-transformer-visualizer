import React from "react";
import * as ts from "typescript";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useTypedSelector } from "../../store";
import { forEachChild, syntaxKindNameMapping, ObjectHash } from "../../utils";

import styles from "./ASTOutline.css";

interface ASTOutlineProps {
  node?: ts.Node;
}

function ASTOutline(props: ASTOutlineProps) {
  const { node: nodeFromProps } = props;
  const {
    node: nodeFromRedux,
    sourceFile,
    highlightedNodes
  } = useTypedSelector(state => ({
    node: state.sourceFiles.currentSourceFile,
    sourceFile: state.sourceFiles.currentSourceFile,
    highlightedNodes: state.highlightedNodes.nodes
  }));
  const node = nodeFromProps || nodeFromRedux;

  if (node === undefined || sourceFile === undefined) {
    return null;
  }

  const output = (
    <>
      <li>
        <span
          className={
            `${styles.node} ${highlightedNodes.includes(node) ? styles.highlightNode : ""}`
          }
        >
          {syntaxKindNameMapping[node.kind]}
        </span>
        <ul>
          <TransitionGroup>
            {forEachChild(node).map(childNode => (
              <CSSTransition
                key={ObjectHash.getHash(childNode)}
                timeout={1000}
                classNames={styles}
              >
                <ASTOutline node={childNode} />
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

export default ASTOutline;
