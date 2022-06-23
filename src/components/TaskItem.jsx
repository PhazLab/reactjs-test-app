const TaskItem = ({task, changeStatus, i, deleteTask, editTask, editMode, editText, editSubmit, editChange, todoId}) => {
    return <li>
        
        {(i !== todoId) ? (
                <strong>{task.title}</strong>
        ) : (
            (editMode) ? (
                    <form onSubmit={editSubmit}>
                        <input type='text' value={editText} id={i} onChange={editChange} />
                        <button type="submit">Edit</button> 
                    </form>
            ) : (
                    <strong>{task.title}</strong>
            )
        )}

        <input type="checkbox" checked={task.status} id={i} onChange={changeStatus}/>
        <button onClick={() => editTask(task)}>✍</button> 
        <button onClick={() => deleteTask(task)}>❌</button> 
        
    </li>
}

export default TaskItem;