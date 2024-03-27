import React, { useState, useEffect } from 'react';
import { fetchImagesFromAPI } from '../../data/api/api';
import { Container, Typography, List, ListItem, Button } from '@mui/material';
import { tagListStyles } from './TagListStyles'; 

export const TagList = ({ pageSize }) => {
  const [tags, setTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

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
    <Container maxWidth="md" sx={tagListStyles.container}> 
      <Typography variant="h4" align="center" sx={tagListStyles.title}>Tag List</Typography>
      <List>
        {tags.map((tag) => (
          <ListItem key={tag.name}>
            <Typography>{tag.name} - ({tag.count} posts)</Typography>
          </ListItem>
        ))}
      </List>
      <div style={tagListStyles.buttonContainer}> 
        <Button onClick={handlePreviousPage} disabled={currentPage === 1} sx={tagListStyles.button}>Previous Page</Button> 
        {hasNextPage ? 
        <Button onClick={handleNextPage}>Next Page</Button> 
        : <Typography sx={tagListStyles.infoText}>They were all tagged</Typography>} 
      </div>
    </Container>
  );
};