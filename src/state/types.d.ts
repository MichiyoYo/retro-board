export interface BoardState {
  board: Board;
}

export interface BoardAction {
  type: string;
  payload: {
    id: string;
    item: Card | Button;
  };
}

export interface BoardContextType {
  board: Board;
  dispatch: React.Dispatch<React.SetStateAction<Board>>;
}
