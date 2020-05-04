const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_FOOD_ENTRIES':
            return [...action.payload];
        default:
            return state;
    }
};
