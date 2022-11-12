import { rest } from "msw";
import { listsData } from "../data/listsData";
import { todosData } from "../data/todosData";

export const todosHandler = [
  // GET todos filtered by due today
  rest.get("/user/:userId/todos", (req, res, ctx) => {
    const userId = parseInt(req.params.userId);
    const dueToday = req.url.searchParams.get("dueToday") ? true : false;
    const listId = req.url.searchParams.get("listId");

    let todos = [];

    const userLists = listsData.filter((list) => list.ownerIds.includes(userId));
    if (dueToday) {
      todos = todosData.filter((todo) => {
        const todoIsInOwnedList = userLists.find((list) => list.id === todo.listId);
        if (todoIsInOwnedList !== undefined && todo.dueDate <= 1) {
          return todo;
        }
      });
    }

    if (listId) {
      todos = todosData.filter((todo) => {
        const todoIsInOwnedList = userLists.find((list) => list.id === todo.listId);
        if (todoIsInOwnedList !== undefined) {
          return todo;
        }
      });
    }

    return res(ctx.status(200), ctx.json({ todos }));
  })
];
