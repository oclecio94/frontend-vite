import { all, takeLatest, put, call } from "redux-saga/effects";
import jwt from "jwt-decode";
import api from "../../../services/api";
import { authInSuccess, authInFailure, exitIn } from "./actions";
import { toast } from "react-hot-toast";

function* authIn({ payload }) {
  const { email, password } = payload;
  try {
    const response = yield call(api.post, "/login", { email, password });

    try {
      const validate = yield call(api.post, "/validate", {
        token: response.data.token,
      });
      const user = validate.data;
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      yield put(authInSuccess(response.data.token, user));
    } catch (e) {
      toast.error("Usuário e/ou senha incorretos!");
      yield put(authInFailure(e));
    }
  } catch (e) {
    toast.error("Usuário e/ou senha incorretos!");
    yield put(authInFailure(e));
  }
}

function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    const { exp: tokenExpiration } = jwt(token);
    if (tokenExpiration <= Math.floor(Date.now() / 1000)) {
      //yield depois do return
      return put(exitIn());
    }
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("@auth/AUTH_IN_REQUEST", authIn),
  takeLatest("persist/REHYDRATE", setToken),
]);
