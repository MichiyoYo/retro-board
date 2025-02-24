import { BoardAction, BoardState } from 'state/types';
import { Column } from 'types';

export const reducer = (state: BoardState, action: BoardAction) => {
  switch (action.type) {
    case 'ADD_CARD': {
      const { id: columnId, item: card } = action.payload;
      return {
        ...state,
        board: {
          ...state.board,
          columns: state.board.columns?.map((column: Column) => {
            if (column.id === columnId) {
              return {
                ...column,
                items: [...column.items, card],
              };
            }
            return column;
          }),
        },
      };
    }
    default:
      return state;
  }
};
