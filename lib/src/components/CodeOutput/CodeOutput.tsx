import React from "react";
import { connect } from "react-redux";
import * as ts from "typescript";
import ReactDiffViewer from "react-diff-viewer";

import { AppState } from "../../store";
import { getCodeString } from "../../utils";

interface CodeOutputProps {
  inititalSourceFile?: ts.SourceFile;
  currentSourceFile?: ts.SourceFile;
}

function CodeOutputDiff(props: CodeOutputProps) {
  const { inititalSourceFile, currentSourceFile } = props;

  if (inititalSourceFile === undefined || currentSourceFile === undefined) {
    return null;
  }

  const initialCodeString = getCodeString(inititalSourceFile);
  const currentCodeString = getCodeString(currentSourceFile);

  return (
    <ReactDiffViewer
      oldValue={initialCodeString}
      newValue={currentCodeString}
      splitView={true}
      showDiffOnly={false}
    />
  );
}

type CodeOutputStateProps = CodeOutputProps;

const mapStateToProps = (state: AppState): CodeOutputStateProps => ({
  ...state.sourceFiles
});

const CodeOutputDiffConnected = connect(mapStateToProps)(CodeOutputDiff);
export default CodeOutputDiffConnected;

export { CodeOutputDiff as CodeOutputUnconnected, CodeOutputProps };
