export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id
    }
}

export const AddTask = (id, task, confirm) => {
    return {
        type: 'DELETE_TASK',
        task: {id: id, task:task, confirm:false }

    }
}

export const editTask = (id, task, confirm) => {
    return {
        type: 'DELETE_TASK',
        task: {id: id, task:task, confirm:confirm }
    }
}