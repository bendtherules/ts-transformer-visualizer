import LogIdentifiers from "./log-identifiers";
import ReturnMultipleNode from "./return-multiple-node";
import SwapExpression from "./swap-expression";
// import RenameSymbol from "./rename-symbol";
import { TransformModuleExport } from "src/types";

export type ModuleNames =
  | "swap-expression"
  | "return-multiple-node"
  | "log-identifiers";
  // | "rename-symbol"

export const moduleMap: { [key in ModuleNames]: TransformModuleExport } = {
  "swap-expression": SwapExpression,
  "return-multiple-node": ReturnMultipleNode,
  "log-identifiers": LogIdentifiers,
  // "rename-symbol": RenameSymbol
};
