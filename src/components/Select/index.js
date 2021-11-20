import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { alpha, styled } from '@mui/material/styles';

const CustomMUISelect = styled(Select)(({ theme }) => ({

  '.MuiSelect-select': {
    padding: '10px 14px',
    
  },
  '&:hover': {
    borderColor: 'gray'
  },
   '&:focus':{
      backgroundColor:'yellow',
    }
}));

const CustomMUIMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
}));


const CustomSelect = ({ value, onChange, options = [] }) => {

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <CustomMUISelect
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <CustomMUIMenuItem value="">
          <em>None</em>
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
