export interface IBoardList {
  boardList: IBoardSimple[];
}

export interface IBoardSimple {
  id: number;
  writer: string;
  title: string;
  createdDate: string;
}

export interface IBoardDetail extends IBoardSimple {
  content: string;
}

export interface IBoardForUpdate {
  id: number;
  title: string;
  content: string;
}
