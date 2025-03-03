import { ADD_TASK, UPDATE_TASK, MOVE_TASK } from './actions'
const initialState = {
    tasks: [
        {
            id: 1,
            text: 'Разобраться с Redux',
            status: 'toDo',
        },
        {
            id: 2,
            text: 'Изучить MUI',
            status: 'inProgress',
        },
        {
            id: 3,
            text: 'Опитимизировать приложение',
            status: 'done',
        },
    ],
}

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, text: action.payload.newText } : task,
                ),
            };
        case MOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, status: action.payload.status } : task,
                ),
            };
        default:
            return state
    }
}

export default taskReducer