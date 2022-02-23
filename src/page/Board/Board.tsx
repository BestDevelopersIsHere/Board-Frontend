import React, { useCallback, useState } from 'react';
import { CircularProgress, Grid, styled } from '@mui/material';
import BoardList from './BoardList';
import { NormalButton } from '../../component/Button';
import SearchCard from './SearchCard';
import { useNavigate } from 'react-router-dom';

const BigCircularProgress = styled(CircularProgress)({
  marginTop: '20%',
  marginLeft: '40%',
});
const Board = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  const handleClickCreate = useCallback(() => {
    navigate('/board/create');
  }, [navigate]);

  return (
    <>
      <Grid
        container
        rowSpacing={2}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{ marginTop: '5vh' }}
      >
        <Grid item xs={10}>
          <SearchCard />
        </Grid>
        <Grid item container justifyContent={'flex-end'} xs={12}>
          <Grid item>
            <NormalButton variant={'contained'} onClick={handleClickCreate}>
              게시물 등록
            </NormalButton>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {loading ? <BigCircularProgress size={100} /> : <BoardList />}
        </Grid>
      </Grid>
    </>
  );
};

export default Board;
