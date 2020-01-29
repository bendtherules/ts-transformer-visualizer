import * as ts from "typescript";
import {
  INIT_SOURCEFILE,
  UPDATE_SOURCEFILE,
  CLEAR_SOURCEFILE,
  HIGHLIGHT_NODE,
  CLEAR_HIGHLIGHTED_NODES,
  InitSourceFileAction,
  UpdateSourceFileAction,
  ClearSourceFileAction,
  HighlightNodeAction,
  ClearHighlightedNodesAction
} from "./types";

export function initSourceFile(
  sourceFile: ts.SourceFile
): InitSourceFileAction {
  return {
    type: INIT_SOURCEFILE,
    payload: { sourceFile }
  };
}

export function updateSourceFile(
  sourceFile: ts.SourceFile
): UpdateSourceFileAction {
  return {
    type: UPDATE_SOURCEFILE,
    payload: { sourceFile }
  };
}

export function clearSourceFile(): ClearSourceFileAction {
  return {
    type: CLEAR_SOURCEFILE
  };
}

export function highlightNode(node: ts.Node): HighlightNodeAction {
  return {
    type: HIGHLIGHT_NODE,
    payload: { node }
  };
}

export function clearHighlightedNodes(): ClearHighlightedNodesAction {
  return {
    type: CLEAR_HIGHLIGHTED_NODES
  };
}
