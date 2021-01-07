type UndoStackEntry = {
  description: string,
};

/**
 * An IdeaGraphController provides operations for updating an IdeaGraph.
 */
export class IdeaGraphController {
  #undoStack: Array<UndoStackEntry>;
}
