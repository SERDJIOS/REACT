import { useContext } from "react";
import TodoItem from "./TodoItem";
import  TodoContext  from "..context/TodoContext";

export default function TodoList() { 
    const { todos } = useContext(TodoContext);
}