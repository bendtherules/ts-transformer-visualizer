import * as ts from "typescript";

export interface TransformModuleExport {
  sourceCodeString: string;
  transformer: ts.TransformerFactory<ts.SourceFile>;
}
