import { observer } from "mobx-react-lite";
import React from "react";
import ReactSlider from "react-slider";
import settings from "../../../store/settings";
import { storage } from "../../../tools/storage";
interface settingsPrpos {
    setOpenSettings: any;
}
const Settings: React.FC<settingsPrpos> = observer(({ setOpenSettings }) => {
    return (
        <div className="settings modal">
            <h1 className="settings__title">Setting</h1>
            <button
                className="settings__exit-btn close-btn"
                onClick={() => {
                    setOpenSettings(false);
                    storage.saveStateSettings(false);
                }}
            >
                &#10006;
            </button>
            <div className="settings__subtitle-work subtitle">
                Work minutes: {settings.settingsInfo.workMinutes} min
            </div>
            <ReactSlider
                className="settings__slider-work"
                thumbClassName="thumb"
                trackClassName="track"
                min={5}
                max={120}
                onChange={value => {
                    settings.setWorkMinutes(value);
                    storage.saveInfoWorkMinutes(value);
                }}
                value={settings.settingsInfo.workMinutes}
            />
            <div className="settings__subtitle-break subtitle">
                Break minutes: {settings.settingsInfo.breakMinutes} min
            </div>
            <ReactSlider
                className="settings__slider-break"
                thumbClassName="thumb"
                trackClassName="track"
                onChange={value => {
                    settings.setBreakMinutes(value);
                    storage.saveInfoBreakMinutes(value);
                }}
                min={1}
                max={25}
                value={settings.settingsInfo.breakMinutes}
            />
        </div>
    );
});

export default Settings;
