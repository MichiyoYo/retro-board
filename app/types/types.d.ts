import { User } from './users';

export interface Board {
  id: string;
  title?: string;
  createdAt: Date;
  updatedAt: Date;
  author?: User;
  lists?: List[];
}

export interface List {
  id: string;
  title?: string;
  createdAt: Date;
  updatedAt: Date;
  boardId: string;
  cards?: Card[];
}

export interface Card {
  id: string;
  title?: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  listId: string;
  author?: User;
  reactions?: Reaction[];
  comments?: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  cardId: string;
  author?: User;
}

export interface Reaction {
  id: string;
  emoji: string;
  createdAt: Date;
  updatedAt: Date;
  cardId: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
}
