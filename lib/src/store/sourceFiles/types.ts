import * as ts from "typescript";

// Describing the shape of the sourceFile's slice of state
export interface SourceFilesState {
  inititalSourceFile?: ts.SourceFile;
  currentSourceFile?: ts.SourceFile;
}

// slice for highlighted nodes
export interface HighlightedNodesState {
  nodes: ts.Node[];
}

// Describing the different ACTION NAMES available
export const INIT_SOURCEFILE = "INIT_SOURCEFILE";
export const UPDATE_SOURCEFILE = "UPDATE_SOURCEFILE";
export const CLEAR_SOURCEFILE = "CLEAR_SOURCEFILE";
export const HIGHLIGHT_NODE = "HIGHLIGHT_NODE";
export const CLEAR_HIGHLIGHTED_NODES = "CLEAR_HIGHLIGHTED_NODES";

export interface InitSourceFileAction {
  type: typeof INIT_SOURCEFILE;
  payload: { sourceFile: ts.SourceFile };
}

export interface UpdateSourceFileAction {
  type: typeof UPDATE_SOURCEFILE;
  payload: { sourceFile: ts.SourceFile };
}

export interface ClearSourceFileAction {
  type: typeof CLEAR_SOURCEFILE;
}

export interface HighlightNodeAction {
  type: typeof HIGHLIGHT_NODE;
  payload: { node: ts.Node };
}

export interface ClearHighlightedNodesAction {
  type: typeof CLEAR_HIGHLIGHTED_NODES;
}

export type SourceFilesActionTypes =
  | InitSourceFileAction
  | UpdateSourceFileAction
  | ClearSourceFileAction;

export type HighlightNodeActionTypes =
  | HighlightNodeAction
  | ClearHighlightedNodesAction;
