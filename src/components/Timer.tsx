import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import settings from "../store/settings";
import ModalBtns from "./modal/ModalBtns";
import TimerControlButtons from "./TimerControlButtons";

const colors = {
    black: "#272727",
    yellow: "#FFE400",
    grey: "#747474",
    green: "#14A76C",
};
const Timer: React.FC = () => {
    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState<string>("work");
    const [secondsInteraval, setSecondsInteraval] = useState<number>(0);
    const [countPomodors, setCountPomodors] = useState<number>(0);

    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);
    const countPomodorsRef = useRef(countPomodors);
    const secondsInteravalRef = useRef(secondsInteraval);

    function timerInit() {
        modeRef.current = "work";
        setMode(modeRef.current);
        secondsInteravalRef.current = settings.settingsInfo.workMinutes * 60;
        setSecondsInteraval(secondsInteravalRef.current);
    }
    useEffect(() => {
        function switchMode() {
            let nextMode;
            let nextInterval;
            if (modeRef.current === "work") {
                nextMode = "break";
                nextInterval = settings.settingsInfo.breakMinutes * 60;
                countPomodorsRef.current++;
                setCountPomodors(countPomodorsRef.current);
                if (countPomodorsRef.current === 4) {
                    nextMode = "longBreak";
                    nextInterval = 30 * 60;
                    countPomodorsRef.current = 0;
                    setCountPomodors(countPomodorsRef.current);
                }
            } else if (
                modeRef.current === "break" ||
                modeRef.current === "longBreak"
            ) {
                nextMode = "work";
                nextInterval = settings.settingsInfo.workMinutes * 60;
            }
            if (nextMode !== undefined) {
                modeRef.current = nextMode;
                setMode(modeRef.current);
            }
            if (nextInterval !== undefined) {
                secondsInteravalRef.current = nextInterval;
                setSecondsInteraval(secondsInteravalRef.current);
            }
        }
        timerInit();
        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsInteravalRef.current === 0) {
                return switchMode();
            }
            secondsInteravalRef.current--;
            setSecondsInteraval(secondsInteravalRef.current);
        }, 1000);
        return () => clearInterval(interval);
    }, [settings.settingsInfo.breakMinutes, settings.settingsInfo.workMinutes]);
    let totalSeconds =
        mode === "work"
            ? settings.settingsInfo.workMinutes * 60
            : mode === "break"
            ? settings.settingsInfo.breakMinutes * 60
            : 30 * 60;
    const percentage = Math.round((secondsInteraval / totalSeconds) * 100);
    const minutes = Math.floor(secondsInteraval / 60);
    let seconds: number | string = secondsInteraval % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return (
        <div className="timer">
            <h1 className="timer__title">Pomodoro Timer</h1>
            <div className="timer__bar">
                <ModalBtns />
                <CircularProgressbar
                    value={percentage}
                    text={minutes + ":" + seconds}
                    styles={buildStyles({
                        rotation: 0,
                        strokeLinecap: "round",
                        textSize: "18px",
                        pathTransitionDuration: 0.5,
                        pathColor:
                            mode === "work" ? colors.yellow : colors.green,
                        textColor:
                            mode === "work" ? colors.yellow : colors.green,
                        trailColor: colors.grey,
                        backgroundColor: colors.black,
                    })}
                />
                <TimerControlButtons
                    setIsPaused={setIsPaused}
                    isPaused={isPaused}
                    isPausedRef={isPausedRef}
                    timerInit={timerInit}
                />
            </div>
        </div>
    );
};

export default Timer;
