export const storage = {
    getTodoList() {
        const todoListJson = localStorage.getItem("todoList");
        if (todoListJson !== null) {
            return JSON.parse(todoListJson);
        }
    },
    saveTodoList(item: any[]) {
        localStorage.setItem("todoList", JSON.stringify(item));
    },

    getStateSettings() {
        const settingsWindowStateJson = localStorage.getItem(
            "settingsWindowState"
        );
        if (settingsWindowStateJson !== null) {
            return JSON.parse(settingsWindowStateJson);
        }
    },
    saveStateSettings(item: boolean) {
        localStorage.setItem("settingsWindowState", JSON.stringify(item));
    },
    getStateTodo() {
        const todoWindowStateJson = localStorage.getItem("todoWindowState");
        if (todoWindowStateJson !== null) {
            return JSON.parse(todoWindowStateJson);
        }
    },
    saveStateTodo(item: boolean) {
        localStorage.setItem("todoWindowState", JSON.stringify(item));
    },
    getInfoWorkMinutes() {
        const workMinuteJson = localStorage.getItem("workMinute");
        if (workMinuteJson !== null) {
            return JSON.parse(workMinuteJson);
        }
    },
    saveInfoWorkMinutes(item: number) {
        localStorage.setItem("workMinute", JSON.stringify(item));
    },
    getInfoBreakMinutes() {
        const breackMinutesJson = localStorage.getItem("breackMinutes");
        if (breackMinutesJson !== null) {
            return JSON.parse(breackMinutesJson);
        }
    },
    saveInfoBreakMinutes(item: number) {
        localStorage.setItem("breackMinutes", JSON.stringify(item));
    },
    getElapsedTime() {
        const elapsedTimeJson = localStorage.getItem("elapsedTime");
        if (elapsedTimeJson !== null) {
            return JSON.parse(elapsedTimeJson);
        }
    },
    saveElapsedTime(item: number) {
        localStorage.setItem("elapsedTime", JSON.stringify(item));
    },
};
