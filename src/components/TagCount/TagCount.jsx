import React from 'react';

export const TagCount = ({ pageSize, setPageSize }) => {
  
  const changeHandle = (e) => {
    setPageSize(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPageSize(parseInt(e.target.value));
  };

  return (
    <form>
      <label htmlFor="pageSize">Number of elements per page: </label>
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