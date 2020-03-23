// import React, { useState } from 'react'
// import { connect } from 'react-redux'
// import { AddTask } from '../actions/taskActions.js'

// class AddNewTask extends React.Component {
//     state = {
//         newTask: ''
//     }
//     setNewTask = () => {
//         this.setState({
//             newTask: ''
//         })
//     }
//     // const [newTask, setNewTask] = useState('');
//     render(){
//         return (
//             <div className="add-task">
//                 <form onSubmit={()=> { if(this.state.newTask !=='') { 
//                     this.props.AddTask(this.state.newTask); 
//                     this.setNewTask('');
//                     }
//                     }}>
//                     <label>Add a new task:</label>
//                     <input type="text" onChange={(e) => this.setNewTask(e.target.value)} value={this.state.newTask} />
//                 </form>
//             </div>
//         )
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         AddTask: (task) => dispatch(AddTask(task)),
//     }
// }
  
// export default connect(mapDispatchToProps)(AddNewTask);



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