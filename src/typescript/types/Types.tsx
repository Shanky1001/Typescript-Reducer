import { todos } from "../interfaces/interfaces";

export type todoAction = { type: "addToDo", payload: todos } | { type: "deleteToDo", payload: { id: number } } | { type: 'completed', payload: { id: number } } | { type: 'incomplete', payload: { id: number } }
