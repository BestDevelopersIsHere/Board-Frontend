import React, { useState } from 'react';
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

interface IBoardSimple {
  id: number;
  writer: string;
  title: string;
  createdDate: string;
}

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

const BoardTableHead = styled(TableHead)({
  backgroundColor: '#0d47a1',
  color: 'white',
});

const BoardTableCell = styled(TableCell)({
  color: 'white',
});

const BoardList = () => {
  const [boardList, setBoardList] = useState<IBoardSimple[]>(BoardData);

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
              <TableRow key={board.id}>
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
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BoardList;
