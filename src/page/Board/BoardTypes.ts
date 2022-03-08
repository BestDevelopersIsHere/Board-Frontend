export enum BoardType {
  NOTICE = 'NOTICE', // 공지사항
  NORMAL = 'NORMAL', // 게시글
}

export interface IBoardList {
  boardList: IBoardSimple[];
}

export interface IBoardSimple {
  id: number;
  writer: string;
  title: string;
  createdDate: string;
  boardType: BoardType;
}

export interface IBoardDetail extends IBoardSimple {
  content: string;
}

export interface IBoardForUpdate {
  id: number;
  title: string;
  content: string;
}

export const boardTypeDivision = [
  {
    value: BoardType.NOTICE,
    label: '공지사항',
  },
  {
    value: BoardType.NORMAL,
    label: '게시글',
  },
];

export const boardTypeDict = {
  [BoardType.NOTICE]: '공지사항',
  [BoardType.NORMAL]: '게시글',
};
