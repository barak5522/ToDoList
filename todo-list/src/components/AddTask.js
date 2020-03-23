import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddTask } from '../actions/taskActions.js'

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a new todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
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
        AddTask: (task) => dispatch(AddTask(task)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);