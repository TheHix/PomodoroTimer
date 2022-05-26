import React, { useState } from "react";
import Settings from "./components/modal/Settings/Settings";
import TodoList from "./components/modal/Todo/TodoList";
import Timer from "./components/Timer";

import "./styles/App.scss";
import { storage } from "./tools/storage";

function App() {
    const [openSettings, setOpenSettings] = useState(
        storage.getStateSettings() ?? false
    );
    const [openTodo, setOpenTodo] = useState(storage.getStateTodo() ?? false);
    return (
        <div className="wrapper">
            <div
                style={
                    openSettings || openTodo
                        ? { display: "none" }
                        : { display: "flex" }
                }
                className="container"
            >
                <Timer
                    setOpenSettings={setOpenSettings}
                    setOpenTodo={setOpenTodo}
                />
            </div>
            <div
                className="container"
                style={
                    openSettings || openTodo
                        ? { display: "flex" }
                        : { display: "none" }
                }
            >
                {openSettings ? (
                    <Settings setOpenSettings={setOpenSettings} />
                ) : openTodo ? (
                    <TodoList setOpenTodo={setOpenTodo} />
                ) : null}
            </div>
        </div>
    );
}

export default App;
