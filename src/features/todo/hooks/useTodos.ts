import {useEffect, useState} from "react";
import type {Todo} from "../types.ts";

const getInitialTodos = () => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
}

export const useTodos = () => {

    const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        //localStorage.getItem("todos");
    }, [todos])

    const addTodo = (text: string) => {
        setTodos(prevState => [
            ...prevState,
            {id: Date.now(), text: text, completed: false}
        ])
    }

    const deleteTodo = (id: number) => {
        setTodos(
            prevState => prevState.filter(todo => todo.id !== id)
        )
    }

    const editTodo = (id: number, newText: string) => {
        setTodos(prevState =>
          prevState.map( todo =>
            todo.id === id ? {...todo, text: newText} : todo
          )
        )
    }

    const toggleTodo = (id: number) => {
        setTodos(prevState =>
            prevState.map( todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        )
    }

    const clearAll = () => {
        setTodos([]);
    }

    return {
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        toggleTodo,
        clearAll
    }
 }