import React from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';

import DayPickerComponent from 'components/DayPicker';
import { goBack, goForward } from 'actions/currentDay';

const DayPicker = () => {
    const dispatch = useDispatch();
    const currentDay = useSelector(state => state.currentDay);

    const handleLeft = () => dispatch(goBack());
    const handleRight = () => dispatch(goForward());

    const text = dayjs(currentDay).isSame(dayjs(), 'day') ? 
        'Today' : 
        dayjs(currentDay).format('DD/MM');

    return (
        <DayPickerComponent 
            {...{
                text,
                handleLeft,
                handleRight,
            }}
        />
    );
};

export default DayPicker;
