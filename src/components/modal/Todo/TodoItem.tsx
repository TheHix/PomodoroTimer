import React from "react";
import icon__trashCan from "../../../img/trashCan.svg";
import { ITodo } from "../../../types/todo";
interface todoItemProps {
    removeTask: any;
    changeCondition: any;
    task : ITodo;
}
const TodoItem:React.FC<todoItemProps> = ({ removeTask, task, changeCondition }) => {
    const {condition, text} = task;

    return (
        <div
            className={
                condition ? "todo__item item-todo active" : "todo__item item-todo"
            }
        >
            <div
                onClick={() => changeCondition(task)}
                className="item-todo__text"
            >
                {text}
            </div>
            <img
                onClick={() => removeTask(task)}
                className="item-todo__icon"
                src={icon__trashCan}
                alt="trash can"
            />
        </div>
    );
};

export default TodoItem;
