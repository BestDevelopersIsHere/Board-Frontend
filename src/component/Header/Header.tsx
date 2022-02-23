import React from 'react';
import { AppBar, Box, Grid, styled, Toolbar, Typography } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

const pages = [{ title: '게시판', uri: '/board' }];

const BoardToolBar = styled(Toolbar)({
  backgroundColor: '#002171',
});

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <BoardToolBar>
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
                    {pathname === uri ? (
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ flexGrow: 1, color: 'white', fontWeight: 'bold' }}
                      >
                        {title}
                      </Typography>
                    ) : (
                      <Typography
                        variant="subtitle2"
                        component="div"
                        sx={{ flexGrow: 1, color: 'white' }}
                      >
                        {title}
                      </Typography>
                    )}
                  </NavLink>
                </Grid>
              );
            })}
          </Grid>
        </BoardToolBar>
      </AppBar>
    </Box>
  );
};

export default Header;
