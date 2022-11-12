import { rest } from "msw";
import { listsData } from "../data/listsData";
import { todosData } from "../data/todosData";

export const listsHandler = [
  // GET all user lists
  rest.get("/user/:userId/lists", (req, res, ctx) => {
    const userId = parseInt(req.params.userId);

    const userLists = listsData.filter((list) => list.ownerIds.includes(userId));

    return res(ctx.status(200), ctx.json({ userLists }));
  }),
  // GET single list of user
  rest.get("/user/:userId/lists/:listId", (req, res, ctx) => {
    const userId = parseInt(req.params.userId);
    const listId = parseInt(req.params.listId);

    const userLists = listsData.filter((list) => list.ownerIds.includes(userId));
    const selectedList = userLists.find((list) => list.id === listId);

    return res(ctx.status(200), ctx.json({ selectedList }));
  })
];
