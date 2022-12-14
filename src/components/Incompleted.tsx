import React, { FC } from 'react'
import { useToDos } from '../App'
import { todos } from '../typescript/interfaces/interfaces'

const Incompleted: FC = () => {
    const { taskState, dispatch } = useToDos()

    return (
        <div className='mt-3'>
            <h3>Incomplete Task</h3>
            <ul>
                {taskState.map((val: todos) => {
                    if (!val.completed)
                        return (<li key={val.id} className="d-flex justify-content-between">
                            <form className='form-check' onChange={() => dispatch({ type: 'completed', payload: { id: val.id } })}>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheck" /><label className="form-check-label" htmlFor="flexCheck">{val.title}</label>
                            </form>
                            <span><i className="fa-solid fa-trash" onClick={() => dispatch({ type: 'deleteToDo', payload: { id: val.id } })}></i></span>
                        </li>)
                }
                )}
            </ul>
        </div>
    )
}

export default Incompleted