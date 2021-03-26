import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import imagesReducer from './imagesReducer';
import loadingReducer from './loadingReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
  images: imagesReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  page: pageReducer,
  imageStats: statsReducer
});

export default rootReducer;