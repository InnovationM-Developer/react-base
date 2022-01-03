import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/index.js";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "./sagas/index.js";
const sagaMiddleWare = createSagaMiddleWare();
const store = compose(applyMiddleware(sagaMiddleWare))(createStore)(
  rootReducer
);
sagaMiddleWare.run(rootSaga);
export default store;
