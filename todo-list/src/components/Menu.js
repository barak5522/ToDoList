import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, showAll, hideDone } from '../actions/taskActions.js'
import { Button } from '@material-ui/core'
import './Menu.css'

function Menu() {    
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const deleteDoneTasks = () => {
        tasks.map(task => {
            if (task.confirm) {
                dispatch(deleteTask(task.id));
            }
            return null
        })
    }

    const showAllTasks = () => {
        dispatch(showAll())
    }

    const hideDoneTasks = () => {
        dispatch(hideDone())
    }

    return (
        <div className="menu">
            <Button className="button" variant="outlined" color="primary" onClick={hideDoneTasks}>
            hide all done tasks</Button>
            <Button className="button" variant="outlined" color="primary" onClick={deleteDoneTasks}>
            delete all done tasks</Button>
            <Button className="button" variant="outlined" color="primary" onClick={showAllTasks}>
            show all</Button>
        </div>
    )
}
  
export default Menu;
