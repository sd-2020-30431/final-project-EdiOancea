import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    container: {
        margin: '50px auto',
        display: 'flex',
        width: 650,
    },
    table: {
        width: 650,
        padding: 1,
    },
});

const FoodEntries = ({ entries }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Food</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {entries.map(({ ingredient: { name, calories, fat, carbohydrates, protein } }) => (
                        <TableRow key={name}>
                        <TableCell component="th" scope="row">
                            {name}
                        </TableCell>
                            <TableCell align="right">{calories}</TableCell>
                            <TableCell align="right">{fat}</TableCell>
                            <TableCell align="right">{carbohydrates}</TableCell>
                            <TableCell align="right">{protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FoodEntries;
