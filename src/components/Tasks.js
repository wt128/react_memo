import React from 'react'

export const Tasks = () => {
    return (
        <>
          {Tasks.map((task) => (<h3>{task.text}</h3>))}  
        </>
    )
}

export default Tasks
