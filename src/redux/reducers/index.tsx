import { combineReducers } from 'redux';

import complete from './complete';
import incomplete from './incomplete';

export default combineReducers({
  complete,
  incomplete,
});
