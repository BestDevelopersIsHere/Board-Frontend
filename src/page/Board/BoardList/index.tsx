import React, { useCallback, useEffect, useState } from 'react';
import { Box, CircularProgress, Grid, Pagination, Paper, styled } from '@mui/material';
import BoardList from './component/BoardList';
import { NormalButton } from '../../../component/Button';
import SearchCard from './component/SearchCard';
import { useNavigate } from 'react-router-dom';
import { IBoardSimple } from '../BoardTypes';
import { getPostList } from '../../../api';

const BigCircularProgress = styled(CircularProgress)({
  marginTop: '20%',
  marginLeft: '40%',
});

export const BoardPaper = styled(Paper)(
  () => `
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 10% 0 2vh;
`,
);

export const BoardBox = styled(Box)(
  () => `
  width: 95%;
  margin: 2vh 0 2vh;
`,
);

export const Label = styled(Box)({ textAlign: 'center' });

const Board = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [boardList, setBoardList] = useState<IBoardSimple[]>([]);
  const [page, setPage] = useState<number>(0);
  const [keyword, setKeyword] = useState<string>('');
  const [total, setTotal] = useState<number>(0);

  const fetchPostList = useCallback((_keyword, page) => {
    getPostList(_keyword, page).then((res) => {
      setBoardList(res.data.data.content);
      setTotal(res.data.data.totalPages);
      setKeyword(_keyword);
      console.info(res.data);
    });
  }, []);

  const handleChangePage = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchPostList(keyword, page);
    setLoading(false);
  }, [keyword, page, fetchPostList]);

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
          <SearchCard fetchPostList={fetchPostList} />
        </Grid>
        <Grid item container justifyContent={'flex-end'} xs={12}>
          <Grid item>
            <NormalButton variant={'contained'} onClick={handleClickCreate}>
              게시물 등록
            </NormalButton>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {loading ? (
            <BigCircularProgress size={100} />
          ) : boardList.length === 0 ? (
            <Box sx={{ textAlign: 'center' }}>검색 결과가 없습니다.</Box>
          ) : (
            <BoardList boardList={boardList} />
          )}
        </Grid>
        <Grid item>
          {boardList.length !== 0 && (
            <Pagination
              count={total}
              page={page + 1}
              color={'primary'}
              onChange={handleChangePage}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Board;
