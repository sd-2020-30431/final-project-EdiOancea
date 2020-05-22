import React from 'react';
import { Grid } from '@material-ui/core';

import TextField from 'components/form/TextField';
import SelectField from 'components/form/SelectField';
import FormWrapper from 'components/form/FormWrapper';

const FoodEntryForm = ({ 
    onSubmit, 
    validate, 
    submitError,
    ingredients,
}) => (
    <FormWrapper
        {...{
            onSubmit,
            validate,
            submitButton: {
                text: 'Log',
            },
            submitError,
        }}
    >
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <SelectField name="ingredientId" label="Ingredient" options={ingredients} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField name="quantity" label="Quantity" />
            </Grid>
        </Grid>
    </FormWrapper>
);

export default FoodEntryForm;
