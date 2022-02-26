import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IBoardForUpdate } from './BoardTypes';
import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form';
import { BoardBox, BoardPaper, Label } from './Board';

const data = {
  id: 1,
  writer: '재희',
  title: '제목1',
  content:
    '내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1' +
    '내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1' +
    '내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1' +
    '내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1' +
    '내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1' +
    '내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1' +
    '내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1' +
    '내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1내용1' +
    '',
  createdDate: '2020-02-10 10:00:00',
};
const BoardUpdate = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState<IBoardForUpdate>({} as IBoardForUpdate);
  const [loadLoading, setLoadLoading] = useState<boolean>(true);
  const [sendLoading, setSendLoading] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IBoardForUpdate>();

  const handleClickUpdate = useCallback((form: IBoardForUpdate) => {
    setSendLoading(true);
    setBoard({
      ...form,
    });
    console.info(form);
    return () => setSendLoading(false);
  }, []);

  const handleClickCancel = useCallback(() => {
    navigate('/board');
  }, [navigate]);

  useEffect(() => {
    reset(data);
    setLoadLoading(false);
  }, [reset]);

  return (
    <>
      <BoardPaper>
        {loadLoading ? (
          <CircularProgress size={100} sx={{ margin: '10vh 0 10vh' }} />
        ) : (
          <BoardBox>
            <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
              <Grid item xs={1}>
                <Label>제목</Label>
              </Grid>
              <Grid item xs={11}>
                <TextField
                  fullWidth
                  required
                  {...register('title', {
                    required: {
                      value: true,
                      message: '제목을 입력해주세요.',
                    },
                    maxLength: {
                      value: 50,
                      message: '글자수는 50자 이내로 입력해주세요.',
                    },
                  })}
                  error={!!errors?.title}
                  helperText={errors?.title?.message}
                  placeholder={'제목은 50자 이하로 입력해주세요.'}
                  inputProps={{ maxLength: 50 }}
                />
              </Grid>
              <Grid item xs={1}>
                <Label>내용</Label>
              </Grid>
              <Grid item xs={11}>
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={20}
                  {...register('content', {
                    required: {
                      value: true,
                      message: '내용을 입력해주세요.',
                    },
                    maxLength: {
                      value: 1000,
                      message: '글자수는 1000자 이내로 입력해주세요.',
                    },
                  })}
                  error={!!errors?.content}
                  helperText={errors?.content?.message}
                  placeholder={'내용은 1000자 이내로 입력해주세요.'}
                  inputProps={{ maxLength: 1000 }}
                />
              </Grid>
            </Grid>
          </BoardBox>
        )}
      </BoardPaper>
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid item>
          <Button color={'warning'} variant={'contained'} onClick={() => handleClickCancel()}>
            취소
          </Button>
        </Grid>
        <Grid item>
          <LoadingButton
            variant={'contained'}
            color={'secondary'}
            onClick={handleSubmit(handleClickUpdate)}
            loading={sendLoading}
            endIcon={<SendIcon />}
            loadingPosition={'end'}
          >
            수정
          </LoadingButton>
        </Grid>
      </Grid>
    </>
  );
};

export default BoardUpdate;
