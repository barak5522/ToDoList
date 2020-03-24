import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTask, editTask } from '../actions/taskActions.js'
import './Task.css'
import { Card, CardContent, Checkbox } from '@material-ui/core';

class Task extends Component {
    render() {

        const tasks = this.props.tasks.map(task => {
            if (!task.hide) {
                return (
                    <Card key={task.id} className="task">    
                        <CardContent> 
                            <Checkbox
                                color="primary"
                                checked={task.confirm}
                                onChange={() => {
                                    this.props.editTask(task.id, task.task, !task.confirm);
                                }}
                            />   
                            <label>{task.task}</label>
                            <img className="action-icon" src="https://cdn2.iconfinder.com/data/icons/cleaning-19/30/30x30-10-512.png"
                            alt="" onClick={() => {this.props.deleteTask(task.id)}}></img>
                            <img className="action-icon" src="https://i.ya-webdesign.com/images/how-to-edit-a-png-file-4.png"
                            alt="" data-task={task.task} onClick={() => {
                                let editedTask = prompt("edit the task", task.task)
                                if (editedTask !== null || editedTask !== task.task) {
                                    this.props.editTask(task.id, editedTask, task.confirm)
                                }
                            }}></img>
                        </CardContent>
                    </Card>
                )
            }
            return null
        });
        return (
            <div className="tasks-collection">
                {tasks}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editTask: (id, task, confirm) => dispatch(editTask(id, task, confirm)),
        deleteTask: (id) => dispatch(deleteTask(id))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Task);
