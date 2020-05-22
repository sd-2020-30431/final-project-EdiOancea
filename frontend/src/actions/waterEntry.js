import request from "utils/request"

export const addWaterEntry = waterEntry => ({
    type: 'ADD_WATER_ENTRY',
    payload: waterEntry,
});

export const setWaterEntries = waterEntries => ({
    type: 'SET_WATER_ENTRIES',
    payload: waterEntries,
});

export const createWaterEntry = data => async dispatch => {
    dispatch(addWaterEntry(await request('POST', '/entries/water', data)));
};

export const getWaterEntries = () => async dispatch => {
    const waterEntries = await request('GET', '/entries/water');
    const { error } = waterEntries;

    if (!error) {
        dispatch(setWaterEntries(waterEntries));
    }
};
