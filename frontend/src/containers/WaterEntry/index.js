import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createWaterEntry, getWaterEntries } from 'actions/waterEntry.js';
import { selectWaterLevel } from 'selectors/waterEntry';
import WaterEntryComponent from 'components/WaterEntry';

const WaterEntry = () => {
    const dispatch = useDispatch();
    const date = useSelector(state => state.currentDay);
    const waterValue = useSelector(selectWaterLevel);
    const addWater = quantity => dispatch(createWaterEntry({ quantity, date }));
    
    useEffect(() => {
        dispatch(getWaterEntries());
    }, [dispatch]);

    return (
        <WaterEntryComponent 
            addWater={addWater}
            value={waterValue}
        />
    );
};

export default WaterEntry;
