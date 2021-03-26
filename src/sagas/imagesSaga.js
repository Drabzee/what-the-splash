import { call, put, select, takeEvery } from 'redux-saga/effects';
import { setError, setImages } from '../actions';
import { fetchImages } from '../api';
import { IMAGES } from '../constants';

function* handleImagesLoad() {
  try {
    const page = yield select(state => state.page);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch(err) {
    yield put(setError(err.toString()));
  }
}

function* watchImagesRequest() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default watchImagesRequest;