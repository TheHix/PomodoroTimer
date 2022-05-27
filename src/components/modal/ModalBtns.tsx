import React from "react";
import SettingsBtn from "../SettingsBtn";
import TodoBtn from "../TodoBtn";

const ModalBtns = () => {
    return (
        <div className="timer__modal-btn modal-btn">
            <SettingsBtn />
            <TodoBtn />
        </div>
    );
};

export default ModalBtns;
