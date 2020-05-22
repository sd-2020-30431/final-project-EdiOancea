import React from 'react';

import PageLayout from 'components/PageLayout';
import FoodEntryForm from 'containers/form/FoodEntryForm';
import FoodEntries from 'containers/FoodEntries';
import WaterEntry from 'containers/WaterEntry';

const Dashboard = () => (
    <PageLayout>
        <WaterEntry />
        <FoodEntryForm />
        <FoodEntries />
    </PageLayout>
);

export default Dashboard;
