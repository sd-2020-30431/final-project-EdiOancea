import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    container: {
        boxShadow: '0px 0px 12px 5px rgba(196,196,196,0.75)',
        margin: '50px auto',
        display: 'flex',
        width: 650,
    },
    table: {
        width: 650,
        padding: 1,
    },
});

const FoodEntries = ({ entries, deleteFoodEntry }) => {
    const classes = useStyles();
    
    return !!entries.length && (
        <TableContainer component={Paper} className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Food</TableCell>
                        <TableCell align="right">Quantity(g)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {entries.map(({ id, quantity, ingredient: { name, calories, fat, carbohydrates, protein } = {} }) => (
                        <TableRow key={id}>
                            <TableCell component="th" scope="row">
                                {name}
                            </TableCell>
                            <TableCell align="right">{`${Math.floor(quantity * 100)}`}</TableCell>
                            <TableCell align="right">{calories}</TableCell>
                            <TableCell align="right">{fat}</TableCell>
                            <TableCell align="right">{carbohydrates}</TableCell>
                            <TableCell align="right">{protein}</TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteFoodEntry(id)}>
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FoodEntries;
