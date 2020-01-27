import SwapExpression from "./swap-expression";
import { TransformModuleExport } from "src/types";

export type ModuleNames = "swap-expression";

export const moduleMap: { [key in ModuleNames]: TransformModuleExport } = {
  "swap-expression": SwapExpression
};
