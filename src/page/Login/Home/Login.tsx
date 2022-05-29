import React from 'react';
import { Grid } from '@mui/material';

const Login = () => {
  return (
    <Grid container alignItems={'center'} justifyContent={'center'} sx={{ minHeight: '80vh' }}>
      <Grid item>
        <a href={'http://localhost:8080/oauth2/authorize/google'}>로그인</a>
      </Grid>
    </Grid>
  );
};

export default Login;
