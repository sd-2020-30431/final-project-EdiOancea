export default ({ ErrorService: { throwValidationError } }) => ({
    validateIngredient: ({ calories, protein, carbohydrates, fat}) => {
        if (protein + carbohydrates + fat > 100) {
            throwValidationError('Too much macros.');
        }
        
        if (calories > 900) {
            throwValidationError('Too many calories.');
        }

        if (protein * 4 + carbohydrates * 4 + fat * 9 !== calories) {
            throwValidationError('Calories and macros don\'t match.');
        }
    },
});
