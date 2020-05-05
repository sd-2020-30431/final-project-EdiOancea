import request from 'utils/request';

export const setFoodEntries = foodEntries => ({
    type: 'SET_FOOD_ENTRIES',
    payload: foodEntries,
});

export const getFoodEntries = () => async dispatch => {
    const foodEntries = await request('GET', '/entries/food');
    const { error } = foodEntries;

    if (!error) {
        dispatch(setFoodEntries(foodEntries));
    }
};
