import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, editTask } from '../actions/taskActions.js'
import './Tasks.css'
import { Card, CardContent, Checkbox } from '@material-ui/core';

function Tasks() {
    const AllTasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    const tasks = AllTasks.map(task => {
        if (!task.hide) {
            return (
                <Card key={task.id} className="task">    
                    <CardContent> 
                        <Checkbox
                            color="primary"
                            checked={task.confirm}
                            onChange={() => {
                                dispatch(editTask(task.id, task.task, !task.confirm));
                            }}
                        />   
                        <label>{task.task}</label>
                        <img className="action-icon" src="https://cdn2.iconfinder.com/data/icons/cleaning-19/30/30x30-10-512.png"
                        alt="" onClick={() => {dispatch(deleteTask(task.id))}}></img>
                        <img className="action-icon" src="https://i.ya-webdesign.com/images/how-to-edit-a-png-file-4.png"
                        alt="" data-task={task.task} onClick={() => {
                            let editedTask = prompt("edit the task", task.task)
                            if (editedTask !== null && editedTask !== task.task) {
                                dispatch(editTask(task.id, editedTask, task.confirm))
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
  
export default Tasks;
