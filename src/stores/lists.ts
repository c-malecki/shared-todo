import { defineStore } from "pinia";

type Todo = {
  id: number;
  listId: number;
  name: string;
  createdDate: string;
  dueDate: number;
  complete: boolean;
  description: string;
};

type List = {
  id: number;
  name: string;
  allComplete: boolean;
  totalItems: number;
  completedItems: number;
  incompleteItems: number;
  creatorId: number;
  createdDate: string;
  archived: boolean;
  items: Todo[];
};

interface State {
  lists: List[];
}

export const useListsStore = defineStore("lists", {
  state: (): State => {
    return {
      lists: [
        <List>{
          id: 1,
          name: "Demo List 1",
          allComplete: false,
          totalItems: 0,
          completedItems: 0,
          incompleteItems: 0,
          creatorId: 1,
          createdDate: "2022-06-11",
          archived: false,
          items: []
        },
        <List>{
          id: 2,
          name: "Demo List 2",
          allComplete: false,
          totalItems: 0,
          completedItems: 0,
          incompleteItems: 0,
          creatorId: 1,
          createdDate: "2022-06-11",
          archived: false,
          items: []
        }
      ]
    };
  },
  getters: {
    allTodoItems: (state) => {
      const allTodoItems: Todo[][] = [];
      state.lists.forEach((list) => allTodoItems.push(list.items));
      return allTodoItems.flat();
    }
    // todosDueToday: (state) => {
    //   const dueToday = [];
    //   state.lists.forEach((list) => {
    //     list.items.filter((todo) => todo.dueDate <= 1);
    //   })
    // }
  }
});
