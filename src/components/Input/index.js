import TextField from '@mui/material/TextField';
import React from 'react';

const Input = ({ value, setValue }) => {
  return (
    <TextField
      id="outlined-name"
      label="Name"
      value={value}
      onChange={(e) => setValue(e?.target?.value)}
    />
  )
}

export default Input;
