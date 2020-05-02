export default (state = {}, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      localStorage.setItem('token', action.payload);

      return {
        ...state,
        token: action.payload,
      };
    case 'SET_USER':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
};
