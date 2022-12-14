import { todos } from "../typescript/interfaces/interfaces";
import { todoAction } from "../typescript/types/Types";

export const todoReducer = (state: todos[], action: todoAction) => {
    switch (action.type) {
        case 'addToDo':
            return [...state, action.payload]

        case 'deleteToDo':
            return [...state.filter((p) => p.id !== action.payload.id)]

        case 'completed':
            return state.map((p) => p.id === action.payload.id ? { ...p, completed: true } : p)

        case 'incomplete':
            return state.map((p) => p.id === action.payload.id ? { ...p, completed: false } : p)
    }
}