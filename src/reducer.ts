import { BoardAction, BoardState } from 'state/types';
import { Column } from 'types';

export const reducer = (state: BoardState, action: BoardAction) => {
  switch (action.type) {
    case 'ADD_CARD': {
      const { columnId, item: card } = action.payload;
      const newColumns = state.board.columns.map((column: Column) => {
        if (column.id === columnId && column.items.size > 0) {
          const newItemMap = new Map(column.items);
          newItemMap.set(`${card.id}`, card);
          return {
            ...column,
            items: newItemMap,
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
    case 'UPVOTE_CARD': {
      const { columnId, item: card } = action.payload;
      const newColumns = state.board.columns.map((column: Column) => {
        if (column.id === columnId) {
          const newItemMap = new Map(column.items);
          newItemMap.set(`${card.id}`, {
            ...card,
            votes: card.votes + 1,
          });
          return {
            ...column,
            items: newItemMap,
          };
        } else {
          return column;
        }
      });
      return {
        board: {
          ...state.board,
          columns: newColumns,
        },
      };
    }
    case 'DOWNVOTE_CARD': {
      const { columnId, item: card } = action.payload;
      const newColumns = state.board.columns.map((column: Column) => {
        if (column.id === columnId) {
          const newItemMap = new Map(column.items);
          newItemMap.set(`${card.id}`, {
            ...card,
            votes: card.votes - 1,
          });
          return {
            ...column,
            items: newItemMap,
          };
        } else {
          return column;
        }
      });
      return {
        board: {
          ...state.board,
          columns: newColumns,
        },
      };
    }
    case 'DELETE_CARD': {
      const { columnId, item: card } = action.payload;
      const newColumns = state.board.columns.map((column: Column) => {
        if (column.id === columnId) {
          const newItemMap = new Map(column.items);
          newItemMap.delete(`${card.id}`);
          return {
            ...column,
            items: newItemMap,
          };
        } else {
          return column;
        }
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
