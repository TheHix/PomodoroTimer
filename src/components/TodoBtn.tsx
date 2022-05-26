import React from "react";
import imgage from "../img/todo.svg";
import { storage } from "../tools/storage";
interface todoBtnProps {
  setOpenTodo: any
}
const TodoBtn:React.FC<todoBtnProps> = ({ setOpenTodo }) => {
    return (
        <div
            onClick={() => {
                setOpenTodo(true);
                storage.saveStateTodo(true);
            }}
            className="timer__todo__btn btn"
        >
            <img src={imgage} alt="" />
        </div>
    );
};

export default TodoBtn;
