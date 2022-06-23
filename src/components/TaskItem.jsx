const TaskItem = ({task, changeStatus, i, deleteTask, editTask, editMode, editText, editSubmit, editChange}) => {
    return <li>
        
        {editMode === false ? (
            <>
                <strong>{task.title}</strong>
                <input type="checkbox" checked={task.status} id={i} onChange={changeStatus}/>
                <button onClick={() => editTask(task)}>✍</button> 
                <button onClick={() => deleteTask(task)}>❌</button> 
            </>
        ) : (
            <form onSubmit={editSubmit}>
                <input type='text' value={editText} id={i} onChange={editChange} />
                <button type="submit">✍</button> 
            </form>
        )}
        
    </li>
}

export default TaskItem;