import React from 'react';
import { Field } from 'react-final-form';
import { 
    Select, 
    InputLabel,
    MenuItem,
    FormControl,
    makeStyles,
} from '@material-ui/core';

import Error from 'components/form/Error';

const useStyles = makeStyles(() => ({
    formControl: {
        width: '100%',
    },
    label: {
        marginLeft: 15,
    },
  }));

const SelectField = ({ 
    options = [],
    variant = 'outlined',
    label,
    name,
    ...rest
}) => {
    const classes = useStyles();

    return !!options.length && (
        <Field 
            name={name}
            render={({ input, meta: { error, touched } }) => (
                <>
                     <FormControl className={classes.formControl}>
                        <InputLabel className={classes.label}>{label}</InputLabel>
                        <Select
                            {...{
                                variant,
                                ...rest,
                                ...input,
                            }}
                        >
                            {options.map(({ id, text }) => (
                                <MenuItem key={id} value={id}>{text}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Error error={error} touched={touched} />
                </>
            )}
        />  
    );
};

export default SelectField;
