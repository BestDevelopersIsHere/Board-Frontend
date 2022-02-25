import React, { useCallback } from 'react';
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { IBoardList } from './BoardTypes';
import { useNavigate } from 'react-router-dom';

const BoardTableHead = styled(TableHead)({
  backgroundColor: '#0d47a1',
  color: 'white',
});

const BoardTableCell = styled(TableCell)({
  color: 'white',
});

const BoardTableRow = styled(TableRow)({
  '$:hover': {
    backgroundColor: 'red',
  },
});

const BoardList = ({ boardList }: IBoardList) => {
  const navigate = useNavigate();

  const handleClickTableDetail = useCallback(
    (id: number) => {
      navigate(`/board/${id}`);
    },
    [navigate],
  );

  return (
    <TableContainer>
      <Table>
        <BoardTableHead>
          <TableRow>
            <BoardTableCell align={'center'} width={'10%'}>
              id
            </BoardTableCell>
            <BoardTableCell align={'center'} width={'20%'}>
              작성자
            </BoardTableCell>
            <BoardTableCell align={'center'} width={'40%'}>
              제목
            </BoardTableCell>
            <BoardTableCell align={'center'} width={'30%'}>
              생성일
            </BoardTableCell>
          </TableRow>
        </BoardTableHead>
        <TableBody>
          {boardList.map((board) => {
            return (
              <BoardTableRow key={board.id} onClick={() => handleClickTableDetail(board.id)}>
                <TableCell align={'center'} width={'10%'}>
                  {board.id}
                </TableCell>
                <TableCell align={'center'} width={'20%'}>
                  {board.writer}
                </TableCell>
                <TableCell align={'left'} width={'40%'}>
                  {board.title}
                </TableCell>
                <TableCell align={'center'} width={'30%'}>
                  {board.createdDate}
                </TableCell>
              </BoardTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BoardList;
