import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    filled: {
        height: '100%',
        width: ({ value, goal }) => `${Math.min(Math.floor(value * 100 / goal), 100)}%`,
        backgroundColor: '#3F51B4',
        borderRadius: 12,
        transitionDuration: '1s',
    },
    progressBar: {
        height: 50,
        width: '100%',
        border: '1px solid #3F51B4',
        borderRadius: 15,
    },
    container: {
        boxShadow: '0px 0px 12px 5px rgba(196,196,196,0.75)',
        margin: '50px auto',
        padding: 10,
        maxWidth: 650,
    },
    label: {
        marginTop: 10,
    },
    button: {
        margin: 10,
    },
}));

const WaterEntry = ({ value = 0, goal = 2000, addWater }) => {
    const { 
        filled, 
        progressBar, 
        container, 
        label,
        button,
    } = useStyles({ value, goal });

    return (
        <div className={container}>
            <div className={progressBar}>
                <div className={filled} />
            </div>
            <div className={label}>
                {`${value} / ${goal}(ml) of water consumed today`}
            </div>
            {[100, 200, 500].map(value => (
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={button} 
                    onClick={() => addWater(value)}
                    key={value}
                >
                    {`+${value}`}
                </Button>
            ))}
        </div>  
    );
};

export default WaterEntry;
