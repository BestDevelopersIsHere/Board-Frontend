import React from 'react';
import './App.css';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Board from './page/Board';
import GlobalStyle from 'component/style/GlobalStyle';

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={'lg'}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/board'} element={<Board />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
