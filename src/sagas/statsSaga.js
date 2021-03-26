import { call, fork, put, take } from "@redux-saga/core/effects";
import { loadImageStats, setImageStats, setImageStatsError } from "../actions";
import { fetchImageStats } from "../api";
import { IMAGES } from "../constants";

function* handleStatsLoad(id) {
  try {
    yield put(loadImageStats(id));
    const stats = yield call(fetchImageStats, id);
    yield put(setImageStats(id, stats.downloads));
  } catch(err) {
    yield put(setImageStatsError(id));
  }
}

function* watchStatsRequest() {
  while(true) {
    const { images } = yield take(IMAGES.SUCCESS);
    
    for(let image of images) {
      yield fork(handleStatsLoad, image.id);
    }
  }
}

export default watchStatsRequest;