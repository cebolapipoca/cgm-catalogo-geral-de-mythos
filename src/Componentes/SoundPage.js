import react from "react";
import audio from "../../src/audio.mp3"
import { useEffect, useRef } from "react";


export default function SoundPage()
{

     const audioRef = useRef(null);

     useEffect(()=>{
        audioRef.current.volume = 0.2;
     })

    return (
        <audio ref={audioRef} id="audiobb" autoPlay loop>
            <source src={audio} type="audio/mpeg"/>
        </audio>
    )
} 
