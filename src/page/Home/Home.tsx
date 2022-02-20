import React from 'react';
import { Grid, Typography } from '@mui/material';
import './Home.css';

const Home = () => {
  return (
    <Grid container alignItems={'center'} justifyContent={'center'} sx={{ minHeight: '80vh' }}>
      <Grid item>
        <Typography className={'main-title'} variant={'h1'} sx={{ flexGrow: 1 }}>
          Board
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
