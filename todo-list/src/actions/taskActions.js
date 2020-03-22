export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id
    }
}

export const AddTask = (task) => {
    return {
        type: 'ADD_TASK',
        task: {id: 5, task:task, confirm:false }

    }
}

export const editTask = (id, task, confirm) => {
    return {
        type: 'EDIT_TASK',
        task: {id: id, task:task, confirm:confirm }
    }
}