// src/mocks/handlers.js
import { rest } from "msw";
import { v4 as uuidv4 } from "uuid";

export const handlers = [
  rest.get("/chats", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: uuidv4(),
          name: "Group 1"
        },
        {
          id: uuidv4(),
          name: "Group 2"
        }
      ])
    );
  })
];
