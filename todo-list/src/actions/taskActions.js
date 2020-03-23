export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id
    }
}

export const AddTask = (task) => {
    return {
        type: 'ADD_TASK',
        task: {id: Math.random(), task:task, confirm:false, hide:false }

    }
}

export const editTask = (id, task, confirm) => {
    return {
        type: 'EDIT_TASK',
        task: {id: id, task:task, confirm:confirm, hide:false }
    }
}

export const showAll = () => {
    return {
        type: 'SHOW_ALL',
    }
}

export const hideDone = () => {
    return {
        type: 'HIDE_DONE',
    }
}