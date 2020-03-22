import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AddTask } from '../actions/taskActions.js'

function AddNewTask() {

    const [newTask, setNewTask] = useState('');

        return (
            <div className="add-task">
                <form onSubmit={()=> { if(newTask !=='') { 
                    this.props.AddTask(newTask); 
                    setNewTask('');
                    }
                    }}>
                    <label>Add a new task:</label>
                    <input type="text" onChange={(e) => setNewTask(e.target.value)} value={newTask} />
                </form>
            </div>
        )
    }

const mapDispatchToProps = (dispatch) => {
    return {
        AddTask: (task) => dispatch(AddTask(task)),
    }
}
  
export default connect(mapDispatchToProps)(AddNewTask);


// import React, { Component, useState } from 'react'
// import { connect } from 'react-redux'
// import { AddTask } from '../actions/taskActions.js'

// class AddNewTask extends Component{

//     state = {
//         newTask: ''
//     }
//     // const [newTask, setNewTask] = useState(0);
//     render() {
//         return (
//             <div className="add-task">
//                 <form onSubmit={(e)=> { if(e.target.value !=='') { 
//                     this.props.AddTask(e.target.value); 
//                     }
//                     }}>
//                     <label>Add a new task:</label>
//                     <input type="text" onChange={(e) => {this.setState({newTask: e.target.value});}} value={this.state.newTask}/>
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

