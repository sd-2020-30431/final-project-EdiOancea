import dayjs from 'dayjs';

const initialState = new Date();

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GO_BACK':
        return dayjs(state).subtract(1, 'day').toDate();
    case 'GO_FORWARD':
        return dayjs(state).add(1, 'day').toDate();
    default:
      return state;
  }
};
