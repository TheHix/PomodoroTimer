import React from "react";
import imgage from "../img/todo.svg";
import modal from "../store/modal";
import { storage } from "../tools/storage";

const TodoBtn: React.FC = () => {
    return (
        <div
            onClick={() => {
                modal.setOpenTodo(true);
                storage.saveStateTodo(true);
            }}
            className="modal-btn__todo-btn btn"
        >
            <img src={imgage} alt="" />
        </div>
    );
};

export default TodoBtn;
