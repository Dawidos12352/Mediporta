import React, { useState, useEffect } from 'react';
import { fetchImagesFromAPI } from '../../data/api/api'; 

export const TagList = () => {
  const [tags, setTags] = useState([]); 

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const data = await fetchImagesFromAPI(); 
        setTags(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 


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
    </div>
  );
};
