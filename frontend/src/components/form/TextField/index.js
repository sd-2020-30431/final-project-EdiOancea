import React from 'react';
import { Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(1),
  },
}));

const CustomTextField = ({
  variant = 'outlined',
  fullWidth = true,
  name,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Field 
      name={name}
      render={({ input, meta: { error, touched } }) => (
        <>
          <TextField 
            {...{
              variant,
              fullWidth,
              ...rest,
              ...input,
            }} 
          />
          {touched && (
            <FormHelperText className={classes.root}>{error}</FormHelperText>
          )}
        </>
      )}
    />
  );
};

export default CustomTextField;
