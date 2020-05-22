import React, { useEffect } from 'react';

import FoodEntriesComponent from 'components/FoodEntries';
import { useDispatch, useSelector } from 'react-redux';
import { selectFoodEntries } from 'selectors/foodEntry';
import { getFoodEntries, deleteFoodEntry } from 'actions/foodEntry';

const FoodEntries = () => {
    const dispatch = useDispatch();
    const entries = useSelector(selectFoodEntries);
    const deleteEntry = id => dispatch(deleteFoodEntry(id));

    useEffect(() => {
        dispatch(getFoodEntries());
    }, [dispatch]);

    return (
        <FoodEntriesComponent 
            entries={entries}
            deleteFoodEntry={deleteEntry}
        />
    );
};

export default FoodEntries;
