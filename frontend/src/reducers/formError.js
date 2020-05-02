const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORM_ERROR':
      return {
        ...state,
        [action.path]: action.error,
      };
    case 'CLEAR_FORM_ERROR':
      return {
        ...state,
        [action.path]: null,
      };
    default:
      return state;
  }
};
