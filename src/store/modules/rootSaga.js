import { all } from "redux-saga/effects";
import auth from "./auth/saga";
import user from "./user/saga";
import users from "./users/saga";
import clients from "./clients/saga";

export default function* rootSaga() {
  return yield all([auth, user, users, clients]);
}
