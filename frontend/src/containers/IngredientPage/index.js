import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import IngredientPageComponent from 'components/IngredientPage';
import getValidate from 'containers/form/getValidate';
import { createIngredient } from 'actions/ingredient';

const schema = Yup.object().shape({
    name: Yup.string().required('Ingredient name is required.'),
    protein: Yup.number().required('Protein value is required.').min(0).max(100),
    carbohydrates: Yup.number().required('Protein value is required.').min(0).max(100),
    fat: Yup.number().required('Protein value is required.').min(0).max(100),
    calories: Yup.number().required('Caloric value is a required.')
        .min(0)
        .max(900)
        .test({
            name: 'caloriesMatch', 
            message: 'The caloric value should match the macros.', 
            test: function(calories) {
                const { protein, carbohydrates, fat } = this.options.context.values;
        
                return parseInt(calories) === (
                    4 * parseInt(protein) + 
                    4 * parseInt(carbohydrates) + 
                    9 * parseInt(fat)
                );
            },
        }),
});

const IngredientPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const submitError = useSelector(state => state.formError.ingredient);
    const onSubmit = data => dispatch(createIngredient(data, () => history.push('/')));
    const validate = getValidate(schema);
    
    return (
        <IngredientPageComponent
            {...{
                onSubmit,
                validate,
                submitError,
            }}
        />   
    );
};

export default IngredientPage;
