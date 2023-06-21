import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { usersInSuccess, usersInError } from "./actions";
import { toast } from "react-hot-toast";

function* getUsers({ payload }) {
  const { skip, limit, search } = payload;

  try {
    const response = yield call(
      api.get,
      `/user?skip=${skip}&limit=${limit}$search=${search}`
    );
    const users = response.data;
    yield put(usersInSuccess(users));
  } catch (e) {
    yield put(usersInError(e));
    toast.error(
      "Não foi possível carregar os usuários, tente novamente mais tarde!"
    );
  }
}

export default all([takeLatest("@users/USERS_IN_REQUEST", getUsers)]);
