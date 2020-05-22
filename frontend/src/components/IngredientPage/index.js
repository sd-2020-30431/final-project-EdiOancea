import React from 'react';
import Grid from '@material-ui/core/Grid';

import PageLayout from 'components/PageLayout';
import TextField from 'components/form/TextField';
import FormWrapper from 'components/form/FormWrapper';
import LockAvatar from 'components/avatars/Lock';

const IngredientPage = ({ onSubmit, validate, submitError }) => (
    <PageLayout>
        <FormWrapper 
            {...{
                onSubmit,
                validate,
                title: 'Add a new ingredient',
                    submitButton: {
                    text: 'Submit',
                },
                secondaryButton: {
                    text: 'Is the ingredient already here? Add a food entry!',
                    link: '/',
                },
                submitError,
            }}
        >
        <LockAvatar />
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField label="Ingredient Name" name="name" />
            </Grid>
            <Grid item xs={12}>
                <TextField name="calories" label="Calories" />
            </Grid>
            <Grid item xs={12}>
                <TextField name="protein" label="Protein" />
            </Grid>
            <Grid item xs={12}>
                <TextField name="carbohydrates" label="Carbohydrates" />
            </Grid>
            <Grid item xs={12}>
                <TextField name="fat" label="Fat" />
            </Grid>
        </Grid>
        </FormWrapper>
    </PageLayout>
);

export default IngredientPage;
