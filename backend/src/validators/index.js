export default ({ ErrorService: { throwValidationError } }) => ({
    validateIngredient: ({ calories, protein, carbohydrates, fat}) => {
        const [cal, pro, carb, fats] = [calories, protein, carbohydrates, fat].map(e => parseInt(e));

        if (pro + carb + fats > 100) {
            throwValidationError('Too much macros.');
        }
        
        if (cal > 900) {
            throwValidationError('Too many calories.');
        }

        if (pro * 4 + carb * 4 + fats * 9 !== cal) {
            throwValidationError('Calories and macros don\'t match.');
        }
    },
});
