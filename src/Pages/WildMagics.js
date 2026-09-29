import react from "react";
import WildMagics from "../database/WildMagics.json"
import SearchBar from "../Componentes/SearchBar";
import "../Styles/WildMagicPage.css"
import { useState } from "react";
import WindowEffect from "../Componentes/WindowEffect";


export default function WildMagicsPage()
{

    const [WildEffects, useWildEffects] = useState([])

    function RandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function SendEffect(event)
    {

        let itemSelected = event.target.getAttribute("itemID")
        let WildMagicEffect = []
        const button_ResultNumber = Array.from(document.getElementsByClassName("button_ResultNumber"))

        button_ResultNumber.map((element)=>{
            element.style.backgroundColor = "transparent"
            element.style.color = "white"
        })

        WildMagics.map((data)=>{
            if(itemSelected == data.resultado)
            {
                event.target.style.backgroundColor = "cyan"
                event.target.style.color = "rgb(2, 150, 150)"
                WildMagicEffect.push(data)
            }
        })

        

        useWildEffects(WildMagicEffect)       
    }

    function RandomizeEffect()
    {
        let NumberRandom = RandomNumber(1, 100)
        let WildMagicEffect = []
        const EffectList = Array.from(document.getElementsByClassName("button_ResultNumber"))


        EffectList.map((result)=>{
            result.style.backgroundColor = "transparent"
            result.style.color = "white"
        })

        EffectList.map((result)=>{
            
            if(result.getAttribute("itemID") == NumberRandom)
            {
                result.style.backgroundColor = "cyan"
                result.style.color = "rgb(2, 150, 150)"
                result.focus()
            }
        })

        WildMagics.map((data)=>{
            if(NumberRandom == data.resultado)
            {
                WildMagicEffect.push(data)
            }
        })

      
        useWildEffects(WildMagicEffect)

    }

    return (
        <div className="WildMagicPage">
            <WindowEffect/>
            <div className="WildMagic_Header">
                <SearchBar placeholder="" width="30%"/>
                <div className="Color-guide">
                    <ul>
                        <li>🔴 Extremo</li>
                        <li>🟡 Moderado</li>
                        <li>🟢 Incômodo </li>
                        <button onClick={RandomizeEffect}>Randomizar</button>
                    </ul>
                </div>
            </div>

            <div className="WildMagicList">
                <div className="ResultNumber">
                    {
                        WildMagics.map((data)=>(
                            <button className="button_ResultNumber" onClick={SendEffect} itemID={data.resultado}>{data.resultado}</button>
                        ))
                    }
                </div>
                <div className="ResultEffects">
                   {
                    
                    WildEffects.map((data)=>(
                        <div className="EffectList" key={data.resultado}>
                            <div className="WildMagicEffect animate__animated animate__fadeInUp" id="EfeitoExtremo">
                                <h1>Extremo</h1>
                                <p>{data.extremo}</p>
                            </div>
                            <div className="WildMagicEffect animate__animated animate__fadeInUp"  id="EfeitoModerado">
                                <h1>Moderado</h1>
                                <p>{data.moderado}</p>
                            </div>
                            <div className="WildMagicEffect animate__animated  animate__fadeInUp"  id="EfeitoIncomodo">
                                <h1>Incomodo</h1>
                                <p>{data.incomodo}</p>
                            </div>
                        </div>
                    ))
                   }
                </div>
            </div>
        </div>
    )
}