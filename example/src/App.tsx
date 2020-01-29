import React, { useEffect } from "react";

import {
  ASTVisualizer,
  initSourceFile,
  updateSourceFile,
  clearSourceFile,
  clearHighlightedNodes
} from "ts-transformer-visualizer";
import * as ts from "typescript";

import { moduleMap, ModuleNames } from "./transforms";

// result.dispose();

export default function App({
  moduleName,
  timeDelayMs = 1000
}: {
  moduleName: ModuleNames;
  timeDelayMs?: number;
}) {
  const { sourceCodeString, transformer } = moduleMap[moduleName];

  // Create sourceFile and reset on route change
  useEffect(() => {
    // 1. Create sourceFile and pass it to visualizer
    const mainFile = ts.createSourceFile(
      "/test",
      sourceCodeString,
      ts.ScriptTarget.ES2015
    );
    initSourceFile(mainFile);

    // 2. Set timeout to run transformer and update visualizer
    const timeoutID = setTimeout(() => {
      const modifiedFile = ts.transform(mainFile, [transformer]).transformed[0];
      updateSourceFile(modifiedFile);
    }, timeDelayMs);

    return () => {
      // 3. Clean timeout and reset visualizer
      clearTimeout(timeoutID);
      clearSourceFile();
      clearHighlightedNodes();
    };
  });

  return (
    <div>
      <ASTVisualizer />
      <h2>{moduleName}</h2>
    </div>
  );
}
