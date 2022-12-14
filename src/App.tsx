import React, { createContext, useContext, useReducer } from 'react';
import './App.css';
import Todo from './components/Todo';
import { todoReducer } from './reducer/Reducer';
import { todos } from './typescript/interfaces/interfaces';

const ToDoContext = createContext({})

function App() {
  const INITIAL_STATE: todos[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }
  ]

  const [taskState, dispatch] = useReducer<any>(todoReducer, INITIAL_STATE)

  return (
    <div className="App">
      <ToDoContext.Provider value={{ taskState, dispatch }}>
        <Todo />
      </ToDoContext.Provider>
    </div>
  );
}

export default App;

export const useToDos = () => {
  return useContext<any>(ToDoContext)
}
