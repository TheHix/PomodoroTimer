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
        <div className="timer__settings-block modal">
            <h1 className="timer__settings__title">Setting</h1>
            <button
                className="timer__settings__exitBtn closeBtn"
                onClick={() => {
                    setOpenSettings(false);
                    storage.saveStateSettings(false);
                }}
            >
                &#10006;
            </button>
            <div className="timer__settings__subTitleWork subTitle">
                Work minutes: {settings.settingsInfo.workMinutes} min
            </div>
            <ReactSlider
                className="timer__settings__sliderWork"
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
            <div className="timer__settings__subTitleBreak subTitle">
                Break minutes: {settings.settingsInfo.breakMinutes} min
            </div>
            <ReactSlider
                className="timer__settings__sliderBreak"
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
