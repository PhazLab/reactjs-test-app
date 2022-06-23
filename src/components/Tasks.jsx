import { useState } from 'react'
import TaskForm from './TaskForm' 
import TaskItem from './TaskItem'

// On tente , on echoue , on repare 

function Tasks () {
    const [text, setText] = useState('')
    const [tasks, setTask] = useState([])
    const [editText, setEditText] = useState('')
    const [edit, setEdit] = useState(false)
    const [todoId, setTodoId] = useState(null)

    function handleChange(e){
        setText(e.target.value)
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        if(text === ''){
            return;
        }
        setTask(tasks.concat({title: text, status: false}))
        setText('')
    }

    function handleChangeStatus(e) {
        const id = e.currentTarget.id
        const tasks_c = [...tasks]

        let task = {...tasks_c[id]}
        task.status = !task.status
        tasks_c[id] = task
        setTask(tasks_c)
    }

    function handleDeleteClicked(todo) {
        const tasks_c = [...tasks]
        let index = tasks_c.indexOf(todo)
        tasks_c.splice(index, 1)
        setTask(tasks_c)
    }

    function handleEditTaskClick(todo) {
        const tasks_c = [...tasks]
        const index = tasks_c.indexOf(todo)
        
        let task = {...tasks_c[index]}
        setTodoId(index)
        setEdit(!edit)
        setEditText(task.title)
    }

    function handleEditChange(e) {
        setEditText(e.currentTarget.value)
    }
    function handleEditSubmit(e, todo) {
        e.preventDefault()
        setEdit(!edit)
        const tasks_c = [...tasks]
        const task = {...tasks_c[todoId]}
        task.title = editText
        console.log(task);
        tasks_c[todoId] = task
        setTask(tasks_c)
    }


    const allTasksItem = tasks.map((task, index) => {
        return task.status === false && 
            <TaskItem 
                task={task}
                i={index}
                key={index}
                editMode={edit}
                editText={editText}
                editSubmit={(e,todo) => handleEditSubmit(e,todo)}
                deleteTask={todo => handleDeleteClicked(todo)}
                editTask={todo => handleEditTaskClick(todo)}
                changeStatus={handleChangeStatus}
                editChange={handleEditChange}
                todoId={todoId}
            />
    })

    const allTasksDone = tasks.map((task, index) => {
        return task.status === true && 
            <TaskItem 
                task={task}
                i={index} 
                key={index}
                deleteTask={todo => handleDeleteClicked(todo)}
                changeStatus={handleChangeStatus}
            />
    })
    
return <>
        {tasks.length} Tasks
        <TaskForm 
            change={handleChange}
            submit={handleSubmit}
            text={text}
        />
        
        <h3>All Tasks</h3>
        <ul>
            {allTasksItem}
        </ul>

        <hr />
        <h3>All Tasks Done</h3>
        <ul>
            {allTasksDone}
        </ul>

    </>
}

export default Tasks