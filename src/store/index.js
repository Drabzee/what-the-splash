import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

store.dispatch({type: 'TEMP', payload: 1});
store.dispatch({type: 'TEMP', payload: 2});
store.dispatch({type: 'TEMP', payload: 3});

export default store;