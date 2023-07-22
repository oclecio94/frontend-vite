import produce from "immer";

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

export default function clients(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case "@client/CLIENT_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@client/CLIENT_IN_SUCCESS": {
        draft.error = false;
        draft.data = payload.clients;
        draft.loading = false;
        break;
      }
      case "@client/CLIENT_IN_ERROR": {
        draft.error = true;
        draft.loading = false;
      }
    }
  });
}
