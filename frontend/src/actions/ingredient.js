import request from 'utils/request';
import { setFormError, clearFormError } from './form';

export const createIngredient = (data, postSubmit) => async dispatch => {
    const ingredient = await request('POST', '/ingredients', data);
    const { error } = ingredient;

    if (error) {
        return dispatch(setFormError('ingredient', error));
    }

    postSubmit();
    clearFormError('ingredient');
};
