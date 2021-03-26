import { IMAGES } from '../constants';

const errorReducer = (state = '', action) => {
  switch(action.type) {
    case IMAGES.LOAD:
    case IMAGES.SUCCESS:
      return '';
    case IMAGES.FAIL:
      return action.error
    default: return state;
  }
}

export default errorReducer;