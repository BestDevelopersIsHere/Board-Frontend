import React, { useCallback } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from 'react-hook-form';

interface ISearchCondition {
  keyword: string;
}

interface ISearchCard {
  fetchPostList: (keyword: string, page: number) => void;
}

const SearchCard = ({ fetchPostList }: ISearchCard) => {
  const { register, handleSubmit } = useForm<ISearchCondition>();
  const handleSearchClick = useCallback(
    (form: ISearchCondition) => {
      fetchPostList(form.keyword, 0);
    },
    [fetchPostList],
  );

  return (
    <Grid
      container
      border={1}
      justifyContent="space-between"
      alignItems={'center'}
      sx={{ padding: '10px' }}
    >
      <Grid item xs={10}>
        <Grid container alignItems={'center'} justifyContent={'center'} spacing={1}>
          <Grid item>검색어</Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              {...register('keyword')}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSubmit(handleSearchClick)();
              }}
            />
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit(handleSearchClick)}>
              <SearchIcon sx={{ fontSize: 40 }} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchCard;
