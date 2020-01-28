import {
  INIT_SOURCEFILE,
  UPDATE_SOURCEFILE,
  CLEAR_SOURCEFILE,
  SourceFilesState,
  SourceFilesActionTypes
} from "./types";

const initialState: SourceFilesState = {
  inititalSourceFile: undefined,
  currentSourceFile: undefined
};

export function sourceFilesReducer(
  state = initialState,
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
      return initialState;
    default:
      return state;
  }
}