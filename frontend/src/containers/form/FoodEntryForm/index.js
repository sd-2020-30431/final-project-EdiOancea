import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { createFoodEntry } from 'actions/foodEntry';
import getValidate from 'containers/form/getValidate';
import FoodEntryFormComponent from 'components/form/FoodEntryForm';
import { getIngredients } from 'actions/ingredient';

const schema = Yup.object().shape({
    ingredientId: Yup.number('This must be a numeric value').required('This field is required'),
    quantity: Yup
        .number('This must be a numeric value')
        .required('Quantity is a required field')
        .min(0.01, 'You need to add at least 1 gram'),
});

const FoodEntryForm = () => {
    const dispatch = useDispatch();
    const currentDay = useSelector(state => state.currentDay);
    const submitError = useSelector(state => state.formError.ingredient);
    const ingredients = useSelector(state => state.ingredient.map(({ id, name }) => ({ id, text: name  })));

    const handleSubmit = data => dispatch(createFoodEntry({ ...data, date: currentDay }));
    const validate = getValidate(schema);

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <FoodEntryFormComponent
            {...{
                onSubmit: handleSubmit,
                validate,
                submitError,
                ingredients,
            }}
        />
    );
};

export default FoodEntryForm;
