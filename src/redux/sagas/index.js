import { all } from "redux-saga/effects";
import userSaga from "./UserSaga";
export default function* rootSaga() {
  yield all([userSaga()]);
}
