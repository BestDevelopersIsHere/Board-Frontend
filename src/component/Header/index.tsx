import React from 'react';
import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const pages = [{ title: '게시판', uri: '/board' }];

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={2} alignItems={'center'}>
            <Grid item>
              <NavLink to={'/'}>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                  React-Board
                </Typography>
              </NavLink>
            </Grid>
            {pages.map(({ title, uri }, idx) => {
              return (
                <Grid item key={idx}>
                  <NavLink to={uri}>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{ flexGrow: 1, color: 'white' }}
                    >
                      {title}
                    </Typography>
                  </NavLink>
                </Grid>
              );
            })}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
