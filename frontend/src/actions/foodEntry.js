import request from 'utils/request';
import { setFormError, clearFormError } from './form';

export const setFoodEntries = foodEntries => ({
    type: 'SET_FOOD_ENTRIES',
    payload: foodEntries,
});

export const addFoodEntry = foodEntry => ({
    type: 'ADD_FOOD_ENTRY',
    payload: foodEntry,
});

export const getFoodEntries = () => async dispatch => {
    const foodEntries = await request('GET', '/entries/food');
    const { error } = foodEntries;

    if (!error) {
        dispatch(setFoodEntries(foodEntries));
    }
};

export const createFoodEntry = data => async dispatch => {
    const foodEntry = await request('POST', '/entries/food', data);
    const { error } = foodEntry;

    if (error) {
        return dispatch(setFormError('foodEntry', error));
    }

    dispatch(addFoodEntry(foodEntry));
    dispatch(clearFormError('foodEntry'));
};
