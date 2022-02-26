import React from 'react';
import './App.css';
import { Container, createTheme, Grid, ThemeProvider } from '@mui/material';
import Header from './component/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Board from './page/Board/Board';
import GlobalStyle from 'component/style/GlobalStyle';
import BoardCreate from './page/Board/BoardCreate';
import BoardDetail from './page/Board/BoardDetail';
import BoardUpdate from './page/Board/BoardUpdate';

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={'lg'}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Grid container justifyContent={'center'}>
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/board'} element={<Board />} />
              <Route path={'/board/create'} element={<BoardCreate />} />
              <Route path={'/board/:id'} element={<BoardDetail />} />
              <Route path={'/board/:id/update'} element={<BoardUpdate />} />
            </Routes>
          </Grid>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
