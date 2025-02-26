import { BoardAction, BoardState } from 'state/types';
import { Column } from 'types';

export const reducer = (state: BoardState, action: BoardAction) => {
  switch (action.type) {
    case 'ADD_CARD': {
      const { columnId, item: card } = action.payload;
      // add a card to the column with id columnId in an immutable way
      const newColumns = state.board.columns.map((column: Column) => {
        if (column.id === columnId) {
          return {
            ...column,
            items: [...column.items, card],
          };
        }
        return column;
      });
      return {
        board: {
          ...state.board,
          columns: newColumns,
        },
      };
    }

    default:
      return state;
  }
};
