import { todos } from "../interfaces/interfaces";

export type todoAction = { type: "addToDo", payload: todos } | { type: "deleteToDo", payload: { id: string } }
