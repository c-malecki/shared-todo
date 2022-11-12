export type Error = {
  errorMessage: string;
};

export type User = {
  id: number;
  name: string;
  createdDate: string;
  allowNotifications: boolean;
};

export type Todo = {
  id: number;
  listId: number;
  title: string;
  createdDate: string;
  dueDate: number;
  complete: boolean;
  description: string;
};

export type List = {
  id: number;
  name: string;
  allComplete: boolean;
  totalItems: number;
  completedItems: number;
  incompleteItems: number;
  creatorId: number;
  ownerIds: number[];
  createdDate: string;
  archived: boolean;
  items: Todo[];
};
