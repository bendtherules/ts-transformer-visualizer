import * as ts from "typescript";

// Copied from ts-ast-viewer
export function forEachChild(node: ts.Node) {
  const nodes: ts.Node[] = [];
  node.forEachChild(child => {
    nodes.push(child);
    return undefined;
  });
  return nodes;
}

// Copied from ts-ast-viewer
function getSyntaxKindNameMapping() {
  // some SyntaxKinds are repeated, so only use the first one
  const kindNames: { [kind: number]: string } = {};
  for (const name of Object.keys(ts.SyntaxKind).filter(k =>
    isNaN(parseInt(k, 10))
  )) {
    const value = (ts.SyntaxKind as any)[name] as number;
    if (kindNames[value] == null) kindNames[value] = name;
  }
  return kindNames;
}

export const syntaxKindNameMapping = getSyntaxKindNameMapping();

export class ObjectHash {
  static ObjectIDMap = new WeakMap<Object, number>();
  static maxID = 0;

  static getHash(obj: Object) {
    let returnID = ObjectHash.ObjectIDMap.get(obj);
    if (returnID === undefined) {
      this.maxID++;
      returnID = this.maxID;

      this.ObjectIDMap.set(obj, returnID);
    }

    return returnID;
  }
}

export function getCodeString(sourceFile?: ts.SourceFile) {
  if (sourceFile === undefined) {
    return undefined;
  }

  const printer = ts.createPrinter();
  const codeString = printer.printFile(sourceFile);

  return codeString;
}

