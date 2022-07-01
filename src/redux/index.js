import {combineReducers} from 'redux';
import {
  womenCategoryReducer,
  menCategoryReducer,
  kidCategoryReducer,
} from '../redux/category/Reducer';
import {MenDataReducer, WomenDataReducer, KidDataReducer} from '../redux/home/Reducer'

/**
 * import export
 */
const rootReducer = combineReducers({
  womenCategoryReducer,
  MenDataReducer,
  WomenDataReducer,
  KidDataReducer,
  kidCategoryReducer,
  menCategoryReducer,
});

export default rootReducer;