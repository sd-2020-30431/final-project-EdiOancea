const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_FOOD_ENTRIES':
            return [...action.payload];
        case 'ADD_FOOD_ENTRY':
            return [...state, action.payload];
        case 'REMOVE_FOOD_ENTRY':
            return state.filter(({ id }) => id !== action.payload);
        default:
            return state;
    }
};
