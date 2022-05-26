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
                condition ? "timer__todo__item active" : "timer__todo__item"
            }
        >
            <div
                onClick={() => changeCondition(task)}
                className="timer__todo__item__text"
            >
                {text}
            </div>
            <img
                onClick={() => removeTask(task)}
                className="timer__todo__item__icon"
                src={icon__trashCan}
                alt="trash can"
            />
        </div>
    );
};

export default TodoItem;
