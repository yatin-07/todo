import { combineReducers } from 'redux';

import complete from './complete';
import incomplete from './incomplete';
const rootReducer =  combineReducers({
  complete,
  incomplete,
});
export default rootReducer