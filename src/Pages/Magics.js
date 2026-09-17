import React from "react";
import "../Styles/MagicPage.css"
import Magic from "../Componentes/Magic";
import { useEffect, useState } from "react";
import Magics from "../database/Magics.json"
import WindowEffect from "../Componentes/WindowEffect";



export default function MagicsPage()
{

    const [Circle, useCircle] = useState("")
    const [ListMagics, useListMagics] = useState(Magics)

    
    function FiltrarMagia(event) {

        let newListMagics = []
        const SearchBar = document.getElementById("SearchBar_Magic")

        //verificação por circulo
        if(document.getElementById("SelectCircle").value === "all")
        {
           Magics.map((data)=>{
                 newListMagics.push(data)
            })
        }
        else {
            Magics.map((data)=>{
                if(data.Circle == document.getElementById("SelectCircle").value)
                {
                    newListMagics.push(data)
                }
            })
        }

        //verificação por nome da magia
        newListMagics = newListMagics.filter((data) => {
            return data.Name.toLowerCase().includes(SearchBar.value.toLowerCase()) === true
        })

        useListMagics(newListMagics)
    }

    return (
        <div className="MagicPage">
            <WindowEffect/>
            <div className="MagicPage_Header">
                <div>
                        <div className="input_label">
                            <label>Persquisar Magia</label>
                            <input id="SearchBar_Magic" onChange={FiltrarMagia} placeholder="Buscar"></input>
                        </div>
                <div style={{display: "flex", width: "99%"}}>
                        <div className="input_label" style={{width: "100%"}}>
                            <label>Circulo:</label>
                            <select id="SelectCircle" onChange={FiltrarMagia}>
                                <option value={"all"}>todas</option>
                                <option value={0}>truque</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                            </select>
                        </div>
                    <div className="input_label" style={{width: "100%"}}>
                        <label>Arquétipo:</label>
                        <select>
                            <option>Suporte</option>
                            <option>Conjurador</option>
                            <option>Combatente</option>
                            <option>Atirador</option>
                            <option>Hemomancia</option>
                        </select>
                    </div>
                </div>
                </div>
            </div>

            <div className="MagicPage_Magics">
                 <WindowEffect/>
                {
                    ListMagics.map((data)=>(

                        <Magic circle={data.Circle} description={data.Description} name={data.Name} action={data.Action} range={data.Range} duration={data.Duration}/>
                    ))
                }
            </div>
        </div>
    )
}