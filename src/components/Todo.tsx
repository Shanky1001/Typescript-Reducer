import React, { FC, useState } from 'react'
import { useToDos } from '../App'
import { todos } from '../typescript/interfaces/interfaces'
import Completed from './Completed'
import Incompleted from './Incompleted'

const Todo: FC = () => {

    const { taskState, dispatch } = useToDos()
    const [title, setTitle] = useState('')

    const addTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data: todos = {
            userId: 2,
            id: taskState.length + 1,
            title: title,
            completed: false
        }
        setTitle('')
        dispatch({ type: 'addToDo', payload: data })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>TODO LIST</h2>
            <form onSubmit={(e) => addTask(e)} className='row g-3'>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button className='btn btn-primary col-3' type='submit'>Add Task</button>
            </form>
            <Incompleted />
            <hr />
            <Completed />
        </div>
    )
}

export default Todo