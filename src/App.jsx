import { TagList } from "./components/TagList/TagList";
import { TagCount } from "./components/TagCount/TagCount";
import React, { useState } from 'react';

export const App = () => {
  const [pageSize, setPageSize] = useState(10); 

  return (
    <div>
      <TagCount pageSize={pageSize} setPageSize={setPageSize} /> 
      <TagList pageSize={pageSize} /> 
    </div>
  );
};