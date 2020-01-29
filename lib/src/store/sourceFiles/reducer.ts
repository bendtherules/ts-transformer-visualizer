import {
  INIT_SOURCEFILE,
  UPDATE_SOURCEFILE,
  CLEAR_SOURCEFILE,
  HIGHLIGHT_NODE,
  CLEAR_HIGHLIGHTED_NODES,
  SourceFilesState,
  HighlightedNodesState,
  SourceFilesActionTypes,
  HighlightNodeActionTypes
} from "./types";

const initialSourceFileState: SourceFilesState = {
  inititalSourceFile: undefined,
  currentSourceFile: undefined
};
const initialHighlightedNodesState: HighlightedNodesState = {
  nodes: []
};

export function sourceFilesReducer(
  state = initialSourceFileState,
  action: SourceFilesActionTypes
): SourceFilesState {
  switch (action.type) {
    case INIT_SOURCEFILE:
      return {
        ...state,
        inititalSourceFile: action.payload.sourceFile,
        currentSourceFile: action.payload.sourceFile
      };
    case UPDATE_SOURCEFILE:
      return {
        ...state,
        currentSourceFile: action.payload.sourceFile
      };
    case CLEAR_SOURCEFILE:
      return initialSourceFileState;
    default:
      return state;
  }
}

export function highlightedNodesReducer(
  state = initialHighlightedNodesState,
  action: HighlightNodeActionTypes
): HighlightedNodesState {
  switch (action.type) {
    case HIGHLIGHT_NODE:
      return {
        ...state,
        nodes: [...state.nodes, action.payload.node]
      };
    case CLEAR_HIGHLIGHTED_NODES:
      return initialHighlightedNodesState;
    default:
      return state;
  }
}
