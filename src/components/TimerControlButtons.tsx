import React from "react";
import img_play from "../img/play.svg";
import img_reset from "../img/reset.svg";
import img_pause from "../img/pause.svg";
interface TimerControlButtonsProps {
    setIsPaused: any;
    isPaused: any;
    isPausedRef: any;
    timerInit: any;
}
const TimerControlButtons: React.FC<TimerControlButtonsProps> = ({
    setIsPaused,
    isPaused,
    isPausedRef,
    timerInit,
}) => {
    return (
        <div className="timer__btns btns-timer">
            {isPaused ? (
                <button
                    onClick={() => {
                        setIsPaused(false);
                        isPausedRef.current = false;
                    }}
                    className="btns-timer__start btn control-btn"
                >
                    <img src={img_play} alt="" />
                </button>
            ) : (
                <button
                    onClick={() => {
                        setIsPaused(true);
                        isPausedRef.current = true;
                    }}
                    className="btns-timer__pause btn control-btn"
                >
                    <img src={img_pause} alt="" />
                </button>
            )}
            <button
                onClick={() => {
                    timerInit();
                    setIsPaused(true);
                    isPausedRef.current = true;
                }}
                className="btns-timer__reset btn control-btn"
            >
                <img src={img_reset} alt="" />
            </button>
        </div>
    );
};

export default TimerControlButtons;
