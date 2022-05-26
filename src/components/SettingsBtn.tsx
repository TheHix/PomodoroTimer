import React from "react";
import imgage from "../img/settings.svg";
import { storage } from "../tools/storage";
interface settingsBtnProps {
    setOpenSettings: any;
}
const SettingsBtn: React.FC<settingsBtnProps> = ({ setOpenSettings }) => {
    return (
        <div
            onClick={() => {
                setOpenSettings(true);
                storage.saveStateSettings(true);
            }}
            className="timer__settings__btn btn"
        >
            <img src={imgage} alt="settings" />
        </div>
    );
};

export default SettingsBtn;