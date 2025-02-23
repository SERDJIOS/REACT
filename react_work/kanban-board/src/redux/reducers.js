import { ADD_TASK, MOVE_TASK, UPDATE_TASK } from "./action";

const initialState = {
    tasks: [
        { id: 1, text: "Разобраться с Redux", status: "todo" },
        { id: 2, text: "Изучить MUI", status: "inProgress" },
        { id: 3, text: "Оптимизировать App", status: "done" },
    ]
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case MOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, status: action.payload.status }
            : task
        ),
      };

    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, text: action.payload.text }
            : task
        ),
      };

    default:
      return state; // Возвращаем текущее состояние, если нет совпадений
  }
}
