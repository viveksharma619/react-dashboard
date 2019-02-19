export function login(userName) {
  return dispatch => {
    dispatch({
      type: 'SET_USER',
      payload: {
        user: {
          name: userName,
        },
      },
    });
    dispatch({
      type: 'SET_AUTH_KEY',
      payload: {
        authorizationKey: 'some-auth-key',
      },
    });
  };
}

export function logout() {
  return dispatch => {
    dispatch({ type: 'RESET_USER' });
  };
}
