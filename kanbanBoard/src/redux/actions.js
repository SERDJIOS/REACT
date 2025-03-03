export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const MOVE_TASK = 'MOVE_TASK'

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task,
    }
}

export const updateTask = (id, newText) => {
    return {
        type: UPDATE_TASK,
        payload: {id, newText},
    }
}

export const moveTask = (id, status) => {
    return {
        type: MOVE_TASK,
        payload: {id, status},
    }
}