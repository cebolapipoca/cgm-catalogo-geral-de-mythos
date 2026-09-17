import react from "react";
import WildMagics from "../database/WildMagics.json"
import SearchBar from "../Componentes/SearchBar";
import "../Styles/WildMagicPage.css"
import { useState } from "react";
import WindowEffect from "../Componentes/WindowEffect";


export default function WildMagicsPage()
{

    const [WildEffects, useWildEffects] = useState([])

    

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