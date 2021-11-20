import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { alpha, styled } from '@mui/material/styles';

const CustomMUISelect = styled(Select)(({ theme }) => ({
  '&:focus': {
    backgroundColor: 'red',
  },
  '.MuiSelect-select': {
    padding: '10px 14px',
  },
  '&:hover': {
    borderColor: '#F5F5F5'
  },
 
  '.MuiSelect-icon': {
    // backgroundColor: '#F5F5F5',
    backgroundColor: '#F5F5F5'
  }
}));

const CustomMUIMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
  '&.Mui-selected': {
    backgroundColor: '#D3D3D3',
    '&:hover': {
      backgroundColor: '#D3D3D3',
    },
  },
  '&.Mui-focused': {
    backgroundColor: 'red'
  },
}));


const CustomSelect = ({ value, onChange, options = [] }) => {

  return (
    <FormControl sx={{ width: '60%' }}>
      <CustomMUISelect
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <CustomMUIMenuItem value="">
          <em>None</em>
        </CustomMUIMenuItem>
        <CustomMUIMenuItem value="disabled" disabled>
          <em>Disabled</em>
        </CustomMUIMenuItem>
        {
          options.map(option => {
            return (
              <CustomMUIMenuItem value={option?.value}>
                {option?.text}
              </CustomMUIMenuItem>
            )
          })
        }
      </CustomMUISelect>
    </FormControl>
  );
};

export default CustomSelect;
