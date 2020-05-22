import dayjs from 'dayjs';

export const selectWaterLevel = ({ waterEntry, currentDay }) => waterEntry
    .filter(({ date }) => dayjs(date).isSame(dayjs(currentDay), 'day'))
    .reduce((acc, { quantity }) => acc + quantity, 0);
