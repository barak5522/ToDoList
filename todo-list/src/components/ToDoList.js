import React, {Component} from 'react'
import { connect } from 'react-redux'
import Task from './Task.js'
import AddTask from './AddTask.js'
import Menu from './Menu.js'
import './ToDoList.css'

class ToDoList extends Component { 
    render() {
        let tasksNumber = 0  
        let doneTasksNumber = 0
        this.props.tasks.map(task => {
            tasksNumber++;
            if (task.confirm) {
                doneTasksNumber++;
            }
            return null;
        })
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
                <Task/>
                <AddTask/>
                <Menu/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }
}

export default connect(mapStateToProps)(ToDoList);