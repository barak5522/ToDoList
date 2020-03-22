import React, {Component} from 'react'
import Task from './Task.js'
import AddTask from './AddTask.js'

class ToDoList extends Component { 
    render() {
        return(
            <div className = 'tasks'>
                <h1 className = 'title'>Tasks:</h1>
                <Task/>
                <AddTask/>
            </div>
        )
    }
}

export default ToDoList;