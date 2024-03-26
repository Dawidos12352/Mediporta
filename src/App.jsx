// import { Route, Routes } from "react-router-dom";
import {TagList} from "./components/TagList/TagList"
import {TagCount} from "./components/TagCount/TagCount"
import React, { useState } from 'react';


export const App = () => {

  const [pageSize, setPageSize] = useState();

  return (
    <div>
      <h1>Example text</h1>
      <TagCount pageSize={pageSize} setPageSize={setPageSize} />
      <TagList />
     
    </div>
  );
};
