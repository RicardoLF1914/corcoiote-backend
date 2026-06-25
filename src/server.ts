import express from "express";
import { users } from "./mocks/users.ts";

const app = express();

app.use(express.json());

app.get("/users", (_request, response) => {
	response.status(200).json(users);
});

app.use((_request, response) => {
	response.status(404).json({ message: "NOT FOUND" });
});
