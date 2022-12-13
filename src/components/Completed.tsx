import React, { FC } from 'react'
import { useToDos } from '../App'
import { todos } from '../typescript/interfaces/interfaces'

const Completed:FC = () => {
  const { taskState, dispatch } = useToDos()
  return (
    <div>
      <h4>Completed Task</h4>
      <ul>
        {taskState.map((val: todos) => {
          if (!val.completed)
            return (<li key={val.id}>{val.title}</li>)
        }
        )}
      </ul>
    </div>
  )
}

export default Completed