import { all } from 'redux-saga/effects';
import watchImagesRequest from './imagesSaga';
import watchStatsRequest from './statsSaga';

function* rootSaga() {
  yield all([
    watchImagesRequest(),
    watchStatsRequest()
  ]);
}

export default rootSaga;