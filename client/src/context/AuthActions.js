export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (token) => ({
  type: "LOGIN_SUCCESS",
  payload: token,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const LogOut = () => ({
  type: "LOGOUT",
});