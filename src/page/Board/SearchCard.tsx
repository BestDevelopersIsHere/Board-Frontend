import React, { useCallback } from 'react';
import { Button, Grid, MenuItem, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { BoardType, boardTypeDivision } from './BoardTypes';
import { useForm } from 'react-hook-form';

interface ISearchCondition {
  boardType: BoardType;
  keyword: string;
}

const SearchCard = () => {
  const { register, handleSubmit } = useForm<ISearchCondition>();
  const handleSearchClick = useCallback((form: ISearchCondition) => {
    console.info(form);
  }, []);

  return (
    <Grid
      container
      border={1}
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{ padding: '10px' }}
    >
      <Grid item xs={9} sx={{ marginLeft: '1rem' }}>
        <Grid container justifyContent={'flex-start'} alignItems={'center'} spacing={1}>
          <Grid item>타입</Grid>
          <Grid item xs={2}>
            <TextField select defaultValue={BoardType.NOTICE} {...register('boardType')}>
              {boardTypeDivision.map((board) => (
                <MenuItem key={board.value} value={board.value}>
                  {board.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>검색어</Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              {...register('keyword')}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSubmit(handleSearchClick)();
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Button onClick={handleSubmit(handleSearchClick)}>
          <SearchIcon sx={{ fontSize: 40 }} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchCard;
