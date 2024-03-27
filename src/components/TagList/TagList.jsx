import React, { useState, useEffect } from 'react';
import { fetchImagesFromAPI } from '../../data/api/api';

export const TagList = ({ pageSize }) => {
  const [tags, setTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchImagesFromAPI(pageSize, currentPage);
        setTags(data); 
        setHasNextPage(data.length === pageSize); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [pageSize, currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <h2>Tag List</h2>
      <ul>
        {tags.map((tag) => (
          <li key={tag.name}>
            {tag.name} - ({tag.count} posts)
          </li>
        ))}
      </ul>
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous Page</button>
      {hasNextPage ? <button onClick={handleNextPage}>Next Page</button> : <p>They were all tagged</p>}
    </div>
  );
};