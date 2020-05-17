import React from 'react';

import PageLayout from 'components/PageLayout';
import FoodEntryForm from 'containers/form/FoodEntryForm';
import FoodEntries from 'containers/FoodEntries';

const Dashboard = () => (
    <PageLayout>
        <FoodEntryForm />
        <FoodEntries />
    </PageLayout>
);

export default Dashboard;
