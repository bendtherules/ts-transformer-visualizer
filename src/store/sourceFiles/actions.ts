import * as ts from "typescript";
import { INIT_SOURCEFILE, UPDATE_SOURCEFILE, CLEAR_SOURCEFILE } from "./types";

export function initSourceFile(sourceFile: ts.SourceFile) {
  return {
    type: INIT_SOURCEFILE,
    payload: { sourceFile }
  };
}

export function updateSourceFile(sourceFile: ts.SourceFile) {
  return {
    type: UPDATE_SOURCEFILE,
    payload: { sourceFile }
  };
}

export function clearSourceFile() {
  return {
    type: CLEAR_SOURCEFILE,
  };
}
