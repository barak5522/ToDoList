import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTask, editTask } from '../actions/taskActions.js'



class Task extends Component {

    render() {
        //  check(id, task, confirm) {
        //     this.props.editTask(id, task, !confirm)
        // }

        const tasks = this.props.tasks.map(task => {
            return (
                <div key={task.id}>
                    <input type="checkbox" checked={task.confirm} data-task={task} onChange={() => {
                        this.props.editTask(task.id, task.task, !task.confirm);
                        console.log(task);
                        }}></input>
                    <label>{task.task}</label>
                </div>
            )
        });
        return (
            <div className="tasks collection">
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