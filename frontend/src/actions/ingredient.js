import request from 'utils/request';
import { setFormError, clearFormError } from './form';

export const setIngredients = ingredients => ({
    type: 'SET_INGREDIENTS',
    payload: ingredients,
});

export const createIngredient = (data, postSubmit) => async dispatch => {
    const ingredient = await request('POST', '/ingredients', data);
    const { error } = ingredient;

    if (error) {
        return dispatch(setFormError('ingredient', error));
    }

    postSubmit();
    clearFormError('ingredient');
};

export const getIngredients = () => async dispatch => {
    const ingredients = await request('GET', '/ingredients');

    dispatch(setIngredients(ingredients));
};
