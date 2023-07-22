import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { clientInSuccess, clientInError } from "./actions";
import { toast } from "react-hot-toast";

function* getClients({ payload }) {
  const { skip, limit, search } = payload;

  try {
    const response = yield call(
      api.get,
      `/client?skip=${skip}&take=${limit}$search=${search}`
    );
    const clients = response.data;
    yield put(clientInSuccess(clients));
  } catch (e) {
    yield put(clientInError(e));
    toast.error(
      "Não foi possível carregar os clientes, tente novamente mais tarde!"
    );
  }
}

export default all([takeLatest("@client/CLIENT_IN_REQUEST", getClients)]);
