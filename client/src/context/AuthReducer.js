const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        token: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        token: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        token: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        token: null,
        isFetching: false,
        error: false,
      };
    case "FETCH_START":
      return {
        token: state.token,
        isFetching: true,
        error: false
      };
    case "FETCH_COMPLETE":
      return {
        token: state.token,
        isFetching: false,
        error: false
      };
    case "FETCH_ABORT":
      return {
        token: state.token,
        isFetching: false,
        error: true
      };
    case "FOLLOW":
      return {
        ...state,
        token: {
          ...state.token,
          followings: [...state.token.followings, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        token: {
          ...state.token,
          followings: state.token.followings.filter(
            (following) => following !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
