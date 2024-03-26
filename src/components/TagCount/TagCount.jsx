import React, { useState } from 'react';

export const TagCount = ({ pageSize, setPageSize }) => {

    const [newPageSize, setNewPageSize] = useState(pageSize);

   
    const changeHandle = (e) => {
        const {name, value} = e.target
        setNewPageSize({ 
          [name] : value
        })
      }
    const handleSubmit = () => {
        setPageSize(newPageSize);
    };

  return (
    <form>
      <label htmlFor="pageSize">Number of elements per page : </label>
      <input
        id="pageSize"
        type="number"
        name="count"
        value={pageSize}
        onChange={changeHandle}
        min={0} 
        max={100} 
      />
       <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};
