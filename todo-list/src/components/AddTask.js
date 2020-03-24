import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddTask } from '../actions/taskActions.js'
import { Card, CardContent, TextField } from '@material-ui/core';
import './AddTask.css'

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo
    this.props.AddTask(this.state.content); 
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <Card className="add-task">
        <CardContent className="new-task-content">
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="standard-full-width"
              style={{ margin: 8 }}
              placeholder="Add a new task:"
              onChange={this.handleChange} 
              value={this.state.content}
            />
          </form>
        </CardContent>
      </Card>
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
        AddTask: (task) => dispatch(AddTask(task)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);