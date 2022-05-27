import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import Settings from "./components/modal/Settings/Settings";
import TodoList from "./components/modal/Todo/TodoList";
import Timer from "./components/Timer";
import modal from "./store/modal";

import "./styles/App.scss";
const App = observer(() => {
    return (
        <div className="wrapper">
            <div
                style={
                    modal.modals.settings || modal.modals.todo
                        ? { display: "none" }
                        : { display: "flex" }
                }
                className="container"
            >
                <Timer />
            </div>
            <div
                className="container"
                style={
                    modal.modals.settings || modal.modals.todo
                        ? { display: "flex" }
                        : { display: "none" }
                }
            >
                {modal.modals.settings ? (
                    <Settings />
                ) : modal.modals.todo ? (
                    <TodoList />
                ) : null}
            </div>
        </div>
    );
});

export default App;
