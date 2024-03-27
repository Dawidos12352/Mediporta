import React from 'react';
import { Button, TextField } from '@mui/material';
import { tagCountStyles } from './TagCountStyles'; 

export const TagCount = ({ pageSize, setPageSize }) => {
  
  const changeHandle = (e) => {
    setPageSize(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPageSize(parseInt(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit} style={tagCountStyles.form}>
      <label htmlFor="pageSize" style={tagCountStyles.label}>Number of elements per page:</label>
      <TextField
        id="pageSize"
        type="number"
        name="count"
        value={pageSize}
        onChange={changeHandle}
        min={0}
        max={100}
        variant="outlined"
        style={tagCountStyles.textField}
      />
      <Button type="submit" variant="contained" style={tagCountStyles.button}>Submit</Button>
    </form>
  );
};


