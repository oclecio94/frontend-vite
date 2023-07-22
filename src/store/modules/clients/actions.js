export function clientInRequest(skip, limit, search) {
  return {
    type: "@client/CLIENT_IN_REQUEST",
    payload: {
      skip,
      limit,
      search,
    },
  };
}

export function clientInSuccess(clients) {
  return {
    type: "@client/CLIENT_IN_SUCCESS",
    payload: {
      clients,
    },
  };
}
export function clientInError() {
  return {
    type: "@client/CLIENT_IN_ERROR",
  };
}
