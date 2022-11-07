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
          items: [
            {
              id: 3,
              listId: 1,
              name: "Todo 1 List 1",
              createdDate: "2022-06-11",
              dueDate: 0,
              complete: false,
              description: "This is an example todo."
            },
            {
              id: 4,
              listId: 1,
              name: "Todo 2 List 2",
              createdDate: "2022-06-11",
              dueDate: 0,
              complete: false,
              description: "This is another example todo."
            }
          ]
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
          items: [
            {
              id: 5,
              listId: 2,
              name: "Todo 1 List 2",
              createdDate: "2022-06-11",
              dueDate: 2,
              complete: false,
              description: "This is on List 2."
            }
          ]
        }
      ]
    };
  },
  getters: {
    allTodoItems: (state): Todo[] => {
      const allTodoItems: Todo[][] = [];
      state.lists.forEach((list) => allTodoItems.push(list.items));
      return allTodoItems.flat();
    },
    todosDueToday(): Todo[] {
      return this.allTodoItems.filter((todo) => todo.dueDate <= 1);
    }
    // todosDueToday: (state) => {
    //   this?.allTodoItems.forEach((list) => {
    //     list.items.filter((todo) => todo.dueDate <= 1);
    //   });
    // }
  }
});
