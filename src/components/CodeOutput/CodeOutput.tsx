import React from "react";
import { connect } from "react-redux";
import * as ts from "typescript";

import { AppState } from "../../store";

interface CodeOutputProps {
  sourceFile?: ts.SourceFile;
}

function CodeOutput(props: CodeOutputProps) {
  const { sourceFile } = props;
  if (sourceFile === undefined) {
    return null;
  }

  const printer = ts.createPrinter();
  const codeString = printer.printFile(sourceFile);

  return <div>{codeString}</div>;
}

type CodeOutputStateProps = CodeOutputProps;

const mapStateToPropsForInitial = (state: AppState): CodeOutputStateProps => ({
  sourceFile: state.sourceFiles.inititalSourceFile
});
const mapStateToPropsForCurrent = (state: AppState): CodeOutputStateProps => ({
  sourceFile: state.sourceFiles.currentSourceFile
});

const CodeOutputForInitial = connect(mapStateToPropsForInitial)(CodeOutput);
const CodeOutputForCurrent = connect(mapStateToPropsForCurrent)(CodeOutput);

export {
  CodeOutputForInitial,
  CodeOutputForCurrent,
  CodeOutput as CodeOutputUnconnected,
  CodeOutputProps
};
