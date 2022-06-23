const TaskForm = ({submit, change, text}) => {
    return <form onSubmit={submit}>
        <input type="text" value={text} onChange={change}/>
        <button type="submit">Add Task</button>
    </form>
}

export default TaskForm;