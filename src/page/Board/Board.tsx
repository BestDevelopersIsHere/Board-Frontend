import React from 'react';
import { Grid } from '@mui/material';
import BoardList from './BoardList';
import { NormalButton } from '../../component/Button';
import SearchCard from './SearchCard';

const Board = () => {
  return (
    <Grid
      container
      rowSpacing={2}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ paddingTop: '5vh' }}
    >
      <Grid item xs={10}>
        <SearchCard />
      </Grid>
      <Grid item container justifyContent={'flex-end'} xs={12}>
        <Grid item>
          <NormalButton variant={'contained'}>게시물 등록</NormalButton>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <BoardList />
      </Grid>
    </Grid>
  );
};

export default Board;
