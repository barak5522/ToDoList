import React, {Component} from 'react'
import Task from './Task.js'

class ToDoList extends Component { 
    render() {
        return(
            <div className = 'tasks'>
                <h1 className = 'title'>Tasks:</h1>
                <Task/>
            </div>
        )
    }
}

export default ToDoList;