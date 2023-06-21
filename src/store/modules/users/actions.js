export function usersInRequest(skip, limit, search) {
  return {
    type: "@users/USERS_IN_REQUEST",
    payload: {
      skip,
      limit,
      search,
    },
  };
}

export function usersInSuccess(users) {
  return {
    type: "@users/USERS_IN_SUCCESS",
    payload: {
      users,
    },
  };
}
export function usersInError() {
  return {
    type: "@users/USERS_IN_ERROR",
  };
}
