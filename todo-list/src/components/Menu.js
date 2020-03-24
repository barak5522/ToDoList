import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTask, showAll, hideDone } from '../actions/taskActions.js'
import { Button } from '@material-ui/core'
import './Menu.css'


class Menu extends Component {
    
    deleteDoneTasks = () => {
        this.props.tasks.map(task => {
            if (task.confirm) {
                this.props.deleteTask(task.id)
            }
            return null
        })
    }

    showAllTasks = () => {
        this.props.showAll()
    }

    hideDoneTasks = () => {
        this.props.hideDone()
    }


    render() {
        return (
            <div className="menu">
                <Button className="button" variant="outlined" color="primary" onClick={this.hideDoneTasks}>
                hide all done tasks</Button>
                <Button className="button" variant="outlined" color="primary" onClick={this.deleteDoneTasks}>
                delete all done tasks</Button>
                <Button className="button" variant="outlined" color="primary" onClick={this.showAllTasks}>
                show all</Button>
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
        deleteTask: (id) => dispatch(deleteTask(id)),
        showAll: () => dispatch(showAll()),
        hideDone: () => dispatch(hideDone())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
