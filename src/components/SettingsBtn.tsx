import React from "react";
import imgage from "../img/settings.svg";
import modal from "../store/modal";
import { storage } from "../tools/storage";

const SettingsBtn: React.FC = () => {
    return (
        <div
            onClick={() => {
                modal.setOpenSettings(true);
                storage.saveStateSettings(true);
            }}
            className="modal-btn__settings-btn btn"
        >
            <img src={imgage} alt="settings" />
        </div>
    );
};

export default SettingsBtn;
