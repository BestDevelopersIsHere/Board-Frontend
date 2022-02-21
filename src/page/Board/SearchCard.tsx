import React, { useCallback } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchCard = () => {
  const handleSearchClick = useCallback(() => {
    console.log('hi');
  }, []);

  return (
    <Grid
      container
      border={1}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ padding: '10px' }}
    >
      <Grid item xs={2}>
        검색어
      </Grid>
      <Grid item xs={7}>
        <TextField
          fullWidth
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSearchClick();
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <Button onClick={() => handleSearchClick()}>
          <SearchIcon sx={{ fontSize: 40, width: '50px' }} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchCard;
