import dayjs from 'dayjs';

export const selectFoodEntries = ({ 
    foodEntry, 
    currentDay, 
    ingredient,
}) => foodEntry
    .filter(({ date }) => dayjs(date).isSame(dayjs(currentDay), 'day'))
    .map(entry => ({
        ...entry,
        ingredient: ingredient.find(ingredient => entry.ingredientId === ingredient.id),
    }))
    .map(entry => ({
        ...entry,
        ingredient: {
            ...entry.ingredient,
            calories: entry.ingredient.calories * entry.quantity,
            fat: entry.ingredient.fat * entry.quantity,
            carbohydrates: entry.ingredient.carbohydrates * entry.quantity,
            protein: entry.ingredient.protein * entry.quantity,
        },
    }));

