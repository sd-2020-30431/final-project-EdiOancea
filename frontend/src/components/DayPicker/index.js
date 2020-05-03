import React from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles, IconButton } from '@material-ui/core';

const useStyle = makeStyles(() => ({
    wrapper: {
        display: 'inline-flex',
    },
    text: {
        margin: 'auto 0',
    },
}));

const DayPicker = ({ text, handleLeft, handleRight }) => {
    const classes = useStyle();

    return (
        <div className={classes.wrapper}>
            <IconButton onClick={handleLeft} >
                <ArrowLeftIcon />
            </IconButton>
            <div className={classes.text}>{text}</div>
            <IconButton onClick={handleRight} >
                <ArrowRightIcon />
            </IconButton> 
        </div>
    );
};

export default DayPicker;
