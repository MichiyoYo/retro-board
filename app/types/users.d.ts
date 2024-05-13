export interface User {
  username: string;
  userId: number;
  userEmail: string;
}

export interface Comment {
  content: string;
  author: User;
  item: Item;
}

export interface Item {
  id: string;
  description: string;
  author: User;
  likes: number;
  dislikes: number;
  comments: Comment[];
}

export interface ActionItem extends Item {
  assignee: User;
}

export interface Board {
  id: string;
  image: string;
  title: string;
  actionItems: ActionItem[];
  createdAt: Date;
  negativeItems: Items[];
  positiveItems: Items[];
  author: User;
}
