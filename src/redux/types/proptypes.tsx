import { complete, incomplete } from './storeType';
import { deleteTodoActionCreator, markCompleteActionCreator, markIncompleteActionCreator } from './actionCreator';

interface AppPropType {
  complete: complete;
  incomplete: incomplete;
  deleteTodo: deleteTodoActionCreator;
  markComplete: markCompleteActionCreator;
  markIncomplete: markIncompleteActionCreator;
}

export default AppPropType;
