import * as ts from "typescript";

// Describing the shape of the sourceFile's slice of state
export interface SourceFilesState {
  inititalSourceFile?: ts.SourceFile;
  currentSourceFile?: ts.SourceFile;
}

// Describing the different ACTION NAMES available
export const INIT_SOURCEFILE = "INIT_SOURCEFILE";
export const UPDATE_SOURCEFILE = "UPDATE_SOURCEFILE";

interface InitSourceFileAction {
  type: typeof INIT_SOURCEFILE;
  payload: { sourceFile: ts.SourceFile };
}

interface UpdateSourceFileAction {
  type: typeof UPDATE_SOURCEFILE;
  payload: { sourceFile: ts.SourceFile };
}

export type SourceFilesActionTypes =
  | InitSourceFileAction
  | UpdateSourceFileAction;
