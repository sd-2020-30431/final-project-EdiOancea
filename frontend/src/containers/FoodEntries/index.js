import React, { useEffect } from 'react';

import FoodEntriesComponent from 'components/FoodEntries';
import { useDispatch, useSelector } from 'react-redux';
import { selectFoodEntries } from 'selectors/foodEntry';
import { getFoodEntries } from 'actions/foodEntry';

const FoodEntries = () => {
    const dispatch = useDispatch();
    const entries = useSelector(selectFoodEntries);

    useEffect(() => {
        dispatch(getFoodEntries());
    }, [dispatch]);

    return (
        <FoodEntriesComponent 
            entries={entries}
        />
    );
};

export default FoodEntries;
