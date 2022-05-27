import { makeAutoObservable } from "mobx";
import { storage } from "../tools/storage";

class Settings {
    settingsInfo = {
        breakMinutes: storage.getInfoBreakMinutes() ?? 5,
        workMinutes: storage.getInfoWorkMinutes() ?? 25,
    };
    constructor() {
        makeAutoObservable(this);
    }
    setWorkMinutes(value: number): void {
        this.settingsInfo.workMinutes = value;
    }
    setBreakMinutes(value: number): void {
        this.settingsInfo.breakMinutes = value;
    }
}
export default new Settings();
