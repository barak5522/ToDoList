import React, {Component} from 'react'
import { useSelector } from 'react-redux'
import Tasks from './Tasks.js'
import AddTask from './AddTask.js'
import Menu from './Menu.js'
import './ToDoList.css'

function ToDoList() { 
    const tasks = useSelector(state => state.tasks)
    let tasksNumber = tasks.length
    let doneTasksNumber = tasks.filter(task => task.confirm).length
    return(
        <div className = 'tasks'>
            <h1 className = 'title'>Todo list</h1>
            <div className="tasks-info">
                <a className="createdTask">{tasksNumber}</a>
                <a className="complitedTask">{doneTasksNumber}</a>
            </div>
            <div className="tasks-about">
                <a className="createdTask">tasks created</a>
                <a className="complitedTask">tasks complited</a>
            </div>
            <Tasks/>
            <AddTask/>
            <Menu/>
        </div>
    )
}

export default ToDoList;