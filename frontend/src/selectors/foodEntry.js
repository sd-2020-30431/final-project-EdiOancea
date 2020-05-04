import dayjs from 'dayjs';

export const selectFoodEntries = ({ foodEntry, currentDay }) => (
    foodEntry.filter(({ date }) => (
        dayjs(date).isSame(dayjs(currentDay), 'day'))
    )
);
