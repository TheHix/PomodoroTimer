import React, { useState } from "react";
import { storage } from "../../../tools/storage";
import { ITodo } from "../../../types/todo";
import TodoItem from "./TodoItem";
interface todoListProps {
    setOpenTodo: any;
}
const TodoList: React.FC<todoListProps> = ({ setOpenTodo }) => {
    const [value, setValue] = useState("");
    const [todoList, setTodoList] = useState(storage.getTodoList() || []);
    function addNewTask(e: React.FormEvent) {
        e.preventDefault();
        if (value === "") return;
        const task = {
            text: value,
            condition: false,
            id: Date.now(),
        };
        setTodoList([...todoList, task]);
        setValue("");
        storage.saveTodoList([...todoList, task]);
    }

    function removeTask(task: ITodo) {
        const newList = todoList.filter((item: ITodo) => item.id !== task.id);
        setTodoList(newList);
        storage.saveTodoList(newList);
    }

    function changeCondition(task: ITodo) {
        setTodoList(
            todoList.map((item: ITodo) => {
                if (item.id === task.id) {
                    task.condition = !task.condition;
                }
                return item;
            })
        );
        storage.saveTodoList(todoList);
    }

    return (
        <div className="timer__todo-block modal">
            <h2 className="timer__todo__title">Todo list</h2>
            <button
                className="timer__todo__exitBtn closeBtn"
                onClick={() => {
                    setOpenTodo(false);
                    storage.saveStateTodo(false);
                }}
            >
                &#10006;
            </button>
            <form className="timer__todo__form" onSubmit={addNewTask}>
                <input
                    className="timer__todo__form_input"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    type="text"
                    placeholder="need to do..."
                />
                <button className="timer__todo__form_btn">Add todo</button>
            </form>
            {todoList.map((item: ITodo) => (
                <TodoItem
                    changeCondition={changeCondition}
                    removeTask={removeTask}
                    key={item.id}
                    task={item}
                />
            ))}
        </div>
    );
};

export default TodoList;
