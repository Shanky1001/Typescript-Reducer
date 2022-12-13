import React, { FC, useState } from 'react'
import { useToDos } from '../App'
import Completed from './Completed'
import Incompleted from './Incompleted'

const Todo: FC = () => {

    const { taskState, dispatch } = useToDos()
    const [title, setTitle] = useState('')

    const addTask = () => {
        const data = {
            userId: 2,
            id: taskState.length,
            title: title,
            completed: false
        }

        dispatch({ type: 'addToDo', payload: data })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>TODO LIST</h2>
            <form action="addTask" className='row g-3'>
                <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} />
                <button className='btn btn-primary col-3' type='submit'>Add Task</button>
            </form>
            <Incompleted />
            <hr />
            <Completed />
            <hr />
        </div>
    )
}

export default Todo