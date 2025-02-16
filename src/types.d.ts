export interface Card {
  id: string;
  text: string;
  votes: number;
  author?: string;
}

export interface Column {
  id: string;
  title: string;
  cards: Card[];
}
