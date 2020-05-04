import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFoodEntries } from 'actions/foodEntry';
import DashboardComponent from 'components/Dashboard';
import { selectFoodEntries } from 'selectors/foodEntry';

const Dashboard = () => {
    const dispatch = useDispatch();
    const entries = useSelector(selectFoodEntries);

    useEffect(() => {
        dispatch(getFoodEntries());
    }, [dispatch]);
    
    return (
        <DashboardComponent 
            entries={entries}
        />
    );
};

export default Dashboard;
