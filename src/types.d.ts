export interface Item {
  id: string;
  element?: JSX.Element;
}
export interface Column extends Item {
  title?: string;
  items: (Card | Button)[];
  icon?: string;
}

export interface Card extends Item {
  text: string;
  votes?: number;
  author?: string;
}

export interface Button extends Item {
  onClick: () => void;
}
