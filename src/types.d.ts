export interface Item {
  id: string;
}

export interface Column extends Item {
  items: Map<string, Card | Button>;
  title?: string;
  icon?: string;
}

export interface Card extends Item {
  text: string;
  votes?: number;
  author?: string;
}

export interface Button extends Item, Pick<Card, 'text'> {
  onClick: () => void;
}

export interface Board extends Item {
  title: string;
  date: Date;
  columns: Column[];
}

/**
 * Column = {
 * colId: 123
 * title : to-do
 * icon: 'ok'
 * items: {
 *    '1234': {
 *      title: 'this sucks}
 *       ...
 *    },
 *    'buttonId': {
 *     ....
 *    }
 *   }
 *  }
 * }
 */
