import React, {Component} from 'react'
import { connect } from 'react-redux'
import Task from './Task.js'
import AddTask from './AddTask.js'
import Menu from './Menu.js'
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import './ToDoList.css'

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func
  };

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