export default ({ ErrorService: { throwValdiationError } }) => ({
    validateIngredient: ({ calories, protein, carbohydrates, fat}) => {
        if (protein + carbohydrates + fat > 100) {
            throwValdiationError('Too much macros.');
        }
        
        if (calories > 900) {
            throwValdiationError('Too many calories.');
        }

        if (protein * 4 + carbohydrates * 4 + fat * 9 !== calories) {
            throwValdiationError('Calories and macros don\'t match.');
        }
    },
});