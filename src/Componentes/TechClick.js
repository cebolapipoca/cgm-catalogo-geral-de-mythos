
import React, { useRef, useEffect } from "react";
import TechClick from "../Sounds/TechSoundClick.mp3";
import TechKeyboardClick from "../Sounds/KeyboardClickSound.mp3";

export default function ClickSound() {

    const ClickRef = useRef(null);
    const ClickKeyboardRef = useRef(null);

    useEffect(() => {

        const HandleKeyboard = (event) => {
           
           
            const audio = new Audio(TechKeyboardClick);
            audio.volume = 0.3;
            audio.play();

        };

        const HandleClick = () => {
            ClickRef.current.currentTime = 0;
            ClickRef.current.volume = 0.3;
            ClickRef.current.play();
        };

        document.addEventListener("keydown", HandleKeyboard);
        document.addEventListener("click", HandleClick);

        return () => {
            document.removeEventListener("keydown", HandleKeyboard);
            document.removeEventListener("click", HandleClick);
        };

    }, []);

    return (
        <>
            <audio ref={ClickRef}>
                <source src={TechClick} />
            </audio>

            <audio ref={ClickKeyboardRef}>
                <source src={TechKeyboardClick} />
            </audio>
        </>
    );
}
