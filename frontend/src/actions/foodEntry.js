import request from 'utils/request';

export const setFoodEntries = foodEntries => ({
    type: 'SET_FOOD_ENTRIES',
    payload: foodEntries,
});

export const getFoodEntries = () => async dispatch => {
    const res = await request('GET', '/entries/food');
    const foodEntries = await res.json();
    const { error } = foodEntries;

    if (!error) {
        dispatch(setFoodEntries(foodEntries));
    }
};
