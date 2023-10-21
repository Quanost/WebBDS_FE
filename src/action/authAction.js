import { LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_SUCCESS, REGISTER_ERROR, LOGOUT, SET_MESSAGE } from '../constants/userConstants';
import authService from '../services/authService';

export const submitRegister = (user) => (dispatch) => {
  return authService.register(user).then((reponse) => {
    dispatch({ type: REGISTER_SUCCESS, payload: { user: reponse } });

    dispatch({
      type: SET_MESSAGE,
      payload: reponse,
    });
    return Promise.resolve();

  }, (error) => {
    // const message =
    //   (error.response &&
    //     error.response.data &&
    //     error.response.data.message) ||
    //   error.message ||
    //   error.toString();

    dispatch({
      type: REGISTER_ERROR,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: error.response.data,
    });
    return Promise.reject();
  })
}

export const login = (username, password) => (dispatch) => {
  return authService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.status >= 400 &&
          error.response.status <= 500 &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_ERROR,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};


export const logout = () => (dispatch) => {
  authService.logout();

  dispatch({
    type: LOGOUT,
  });
};