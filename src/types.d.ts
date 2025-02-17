export interface Item {
  id: string;
}
export interface Column extends Item {
  title: string;
  cards: Card[];
  icon?: string;
}

export interface Card extends Item {
  text: string;
  votes: number;
  author?: string;
}
