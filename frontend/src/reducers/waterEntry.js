const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_WATER_ENTRY':
            return [...state, action.payload];
        case 'SET_WATER_ENTRIES':
            return action.payload;
        default:
            return state;
    }
};
