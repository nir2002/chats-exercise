// src/mocks/handlers.js
import { rest } from "msw";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    name: "Group 1"
  },
  {
    id: uuidv4(),
    name: "Group 2"
  }
];

export const handlers = [
  rest.get("/chats", (req, res, ctx) => {
    const query = req.url.searchParams.get("query");

    return res(
      ctx.status(200),
      ctx.json(
        data.filter((chat) => {
          return chat.name.toLowerCase().includes(query.toLowerCase());
        })
      )
    );
  })
];
