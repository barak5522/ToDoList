const initState = {
  tasks: [
    {id: '1', task: 'Squirtle Laid an Egg', confirm: false, hide: false},
    {id: '2', task: 'Charmander Laid an Egg', confirm: true, hide: false},
    {id: '3', task: 'a Helix Fossil was Found', confirm: false, hide: false}
  ],
//   filters: [
//       {buttonText: "hide all done tasks", field: confirm, active: false},
//       {buttonText: "delete all done tasks", field: confirm, active: false}
//   ]
}



const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_TASK'){
        let newTasks = state.tasks.filter(task => {
            return task.id !== action.id
        });
        return {
            ...state,
            tasks: newTasks
    }
    } else if (action.type === 'ADD_TASK'){
        console.log(action)
        return {
            ...state,
            tasks: [...state.tasks, action.task]
        }
    } else if (action.type === 'EDIT_TASK'){
        return {
            ...state, 
            tasks: state.tasks.map(
                (task) => task.id === action.task.id ? {...task, task: action.task.task, confirm: action.task.confirm}
                                        : task
            )
        }
    } else if (action.type === 'SHOW_ALL'){
        return {
            ...state, 
            tasks: state.tasks.map(
                (task) => task.hide === true ? {...task, hide:false}
                                        : task
            )
        }
    } else if (action.type === 'HIDE_DONE'){
        return {
            ...state, 
            tasks: state.tasks.map(
                (task) => task.confirm === true ? {...task, hide:true}
                                        : task
            )
        }
    }
    return state;
}

export default rootReducer