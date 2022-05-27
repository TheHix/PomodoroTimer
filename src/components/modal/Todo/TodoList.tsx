import React, { useState } from "react";
import modal from "../../../store/modal";
import { storage } from "../../../tools/storage";
import { ITodo } from "../../../types/todo";
import TodoItem from "./TodoItem";
const TodoList: React.FC = () => {
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
        <div className="todo modal">
            <h2 className="todo__title">Todo list</h2>
            <button
                className="todo__exit-btn close-btn"
                onClick={() => {
                    modal.setOpenTodo(false);
                    storage.saveStateTodo(false);
                }}
            >
                &#10006;
            </button>
            <form className="todo__form form-todo" onSubmit={addNewTask}>
                <input
                    className="form-todo__input"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    type="text"
                    placeholder="need to do..."
                />
                <button className="form-todo__btn">Add todo</button>
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
