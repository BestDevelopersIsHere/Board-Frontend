export interface IBoardList {
  boardList: IBoard[];
}

export interface IBoard {
  id: number;
  writer: string;
  title: string;
  createdDate: string;
}
