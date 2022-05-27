import { makeAutoObservable } from "mobx";
import { storage } from "../tools/storage";

class Modal {
    modals = {
        todo: storage.getStateTodo() ?? false,
        settings: storage.getStateSettings() ?? false,
    };
    constructor() {
        makeAutoObservable(this);
    }
    setOpenSettings(value: boolean) {
        this.modals.settings = value;
    }
    setOpenTodo(value: boolean) {
        this.modals.todo = value;
    }
}
export default new Modal;