import React, { FC } from 'react'
import { useToDos } from '../App'
import { todos } from '../typescript/interfaces/interfaces'

const Incompleted: FC = () => {
    const { taskState, dispatch } = useToDos()

    return (
        <>
            <h4>Incomplete Task</h4>
            <ul>
                {taskState.map((val: todos) => {
                    if (val.completed)
                        return (<li key={val.id}>{val.title}</li>)
                }
                )}
            </ul>
        </>
    )
}

export default Incompleted