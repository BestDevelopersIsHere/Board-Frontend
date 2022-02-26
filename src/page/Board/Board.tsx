import React, { useCallback, useEffect, useState } from 'react';
import { CircularProgress, Grid, styled } from '@mui/material';
import BoardList from './BoardList';
import { NormalButton } from '../../component/Button';
import SearchCard from './SearchCard';
import { useNavigate } from 'react-router-dom';
import { IBoardSimple } from './BoardTypes';

const BoardData: IBoardSimple[] = [
  {
    id: 1,
    writer: 'jaehee',
    title: 'title1',
    createdDate: new Date().toDateString(),
  },
  {
    id: 2,
    writer: 'jaehee2',
    title: 'title2',
    createdDate: new Date().toDateString(),
  },
  {
    id: 3,
    writer: 'jaehee3',
    title: 'title3',
    createdDate: new Date().toDateString(),
  },
  {
    id: 4,
    writer: 'jaehee4',
    title: 'title4',
    createdDate: new Date().toDateString(),
  },
  {
    id: 5,
    writer: 'jaehee5',
    title: 'title5',
    createdDate: new Date().toDateString(),
  },
  {
    id: 6,
    writer: 'jaehee6',
    title: 'title6',
    createdDate: new Date().toDateString(),
  },
  {
    id: 7,
    writer: 'jaehee7',
    title: 'title17',
    createdDate: new Date().toDateString(),
  },
  {
    id: 8,
    writer: 'jaehee8',
    title: 'title18',
    createdDate: new Date().toDateString(),
  },
];

const BigCircularProgress = styled(CircularProgress)({
  marginTop: '20%',
  marginLeft: '40%',
});

const Board = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [boardList, setBoardList] = useState<IBoardSimple[]>([]);

  useEffect(() => {
    setLoading(true);
    setBoardList(BoardData);
    setLoading(false);
  }, []);

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
          {loading ? <BigCircularProgress size={100} /> : <BoardList boardList={boardList} />}
        </Grid>
      </Grid>
    </>
  );
};

export default Board;
