import react from "react";
import WildMagics from "../database/WildMagics.json"
import SearchBar from "../Componentes/SearchBar";
import "../Styles/WildMagicPage.css"
import { useState, useRef } from "react";
import WindowEffect from "../Componentes/WindowEffect";
import d20 from "../Images/Icons/d20.svg"


export default function WildMagicsPage() {

    const [WildEffects, useWildEffects] = useState([])
    const [Roll, useRoll] = useState([])
    const [RollEffect, useRollEffectLevel] = useState([])
    const TimerEffectBox = useRef(null)

    function RandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function SendEffect(event) {

        let itemSelected = event.target.getAttribute("itemID")
        let WildMagicEffect = []
        const button_ResultNumber = Array.from(document.getElementsByClassName("button_ResultNumber"))

        button_ResultNumber.map((element) => {
            element.style.backgroundColor = "transparent"
            element.style.color = "white"
        })

        WildMagics.map((data) => {
            if (itemSelected == data.resultado) {
                event.target.style.backgroundColor = "cyan"
                event.target.style.color = "rgb(2, 150, 150)"
                WildMagicEffect.push(data)
            }
        })


        console.log(WildEffects)
        useWildEffects(WildMagicEffect)
    }

    function RollEffectLevel() {
        let d20 = RandomNumber(1, 20)
        let EffectLevelResult = false

        if (d20 >= 1 && d20 <= 3) {
            EffectLevelResult = "Extremo"
        }
        else if (d20 >= 4 && d20 <= 9) {
            EffectLevelResult = "Moderado"
        }
        else {
            EffectLevelResult = "Incômodo"
        }

        useRollEffectLevel(EffectLevelResult)
    }

    function HideEffectBox() {
        const EffectBox = document.getElementById("rollEffectBox")


        clearTimeout(TimerEffectBox.current)
        TimerEffectBox.current = setTimeout(() => {
            EffectBox.style.display = "none"
        }, 5000)
    }

    function RandomizeEffect() {
        let NumberRandom = RandomNumber(1, 100)
        let WildMagicEffect = []
        const EffectList = Array.from(document.getElementsByClassName("button_ResultNumber"))
        const EffectBox = document.getElementById("rollEffectBox")


        EffectList.map((result) => {
            result.style.backgroundColor = "transparent"
            result.style.color = "white"
        })

        EffectList.map((result) => {

            if (result.getAttribute("itemID") == NumberRandom) {
                result.style.backgroundColor = "cyan"
                result.style.color = "rgb(2, 150, 150)"
                result.focus()
            }
        })

        WildMagics.map((data) => {
            if (NumberRandom == data.resultado) {
                WildMagicEffect.push(data)
            }
        })

        EffectBox.style.display = "none"
        EffectBox.style.display = "flex"
        HideEffectBox()

        useRoll(NumberRandom)
        RollEffectLevel()
        useWildEffects(WildMagicEffect)

    }

    return (
        <div className="WildMagicPage">
            <WindowEffect />
            <button className="rollEffectButton" onClick={RandomizeEffect}>
                <img src={d20} />
                <h2>Roll</h2>
            </button>
            <div className="rollEffectBox animate__animated animate__bounceInDown " id="rollEffectBox">
                <h2>{Roll}</h2>
                <h1>{RollEffect}</h1>
            </div>
            <div className="WildMagic_Header">

                <div className="Color-guide">
                    <ul>
                        <li>🔴 Extremo</li>
                        <li>🟡 Moderado</li>
                        <li>🟢 Incômodo </li>
                    </ul>
                </div>
            </div>

            <div className="WildMagicList">
                <div className="ResultNumber">
                    <h1>Resultados</h1>
                    {
                        WildMagics.map((data) => (
                            <button className="button_ResultNumber" onClick={SendEffect} itemID={data.resultado}>{data.resultado}</button>
                        ))
                    }
                </div>
                <div className="ResultEffects">
                    <h1 style={{ color: "white", width: "100%", textAlign: "center", "fontSize": "32px" }}>Efeitos Selvagens</h1>
                    <div className="EffectList" >
                        {WildEffects.length != 0 ? (
                           <div style={{display: "flex", flexDirection: "column", gap: "20px"}} key={WildEffects[0].resultado}>
                                <div className="WildMagicEffect animate__animated animate__fadeInUp" id="EfeitoExtremo">
                                    <h1>Extremo</h1>
                                    <p>{WildEffects[0].extremo}</p>
                                </div>
                                <div className="WildMagicEffect animate__animated animate__fadeInUp" id="EfeitoModerado">
                                    <h1>Moderado</h1>
                                    <p>{WildEffects[0].moderado}</p>
                                </div>
                                <div className="WildMagicEffect animate__animated  animate__fadeInUp" id="EfeitoIncomodo">
                                    <h1>Incomodo</h1>
                                    <p>{WildEffects[0].incomodo}</p>
                                </div>
                            </div>
                        ) : (
                            <div style={{width: "100%", height: "70vh", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid cyan"}}>
                                <h1 style={{fontSize: "40px", color: "cyan"}}>[SELECIONE UM RESULTADO]</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}