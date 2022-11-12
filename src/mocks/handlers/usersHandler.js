import { rest } from "msw";
import { usersData } from "../data/usersData";
import { listsData } from "../data/listsData";

export const usersHandler = [
  rest.post("/login", (req, res, ctx) => {
    const { email, password } = req.body;

    const user = usersData.find((obj) => email === obj.email && password === obj.password);

    if (user !== undefined) {
      const { id, name, createdDate, allowNotifications } = user;
      return res(
        ctx.status(200),
        ctx.json({ user: { id, name, createdDate, allowNotifications } })
      );
    } else {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Username or password is invalid."
        })
      );
    }
  }),
  rest.delete("/logout", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ user: null }));
  }),
  rest.get("/user/:userId/lists", (req, res, ctx) => {
    const userId = parseInt(req.params.userId);
    const userLists = listsData.filter((list) => list.ownerIds.includes(userId));
    return res(ctx.status(200), ctx.json({ userLists }));
  })
];
