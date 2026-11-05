import React from "react";
import "../Styles/MagicPage.css"
import Magic from "../Componentes/Magic";
import { useEffect, useState } from "react";
import WindowEffect from "../Componentes/WindowEffect";



export default function MagicsPage()
{

    const [Circle, useCircle] = useState("")
    const [ListMagics, useListMagics] = useState([])

  async function ChamarBanco(databaseName) {
      let Request = await fetch(`${process.env.PUBLIC_URL}/database/${databaseName}.json`).then(ResponseType => ResponseType.json())
       useListMagics(Request)
       console.log("Chamando Dados novamente")
       return Request
  }

  useEffect(()=>{
    ChamarBanco("Magics")
  }, [])
    
    async function FiltrarMagia(event) {
         let database = await ChamarBanco("Magics")
        let newListMagics = []
        let FilterArchetype = []
        const SearchBar = document.getElementById("SearchBar_Magic")
       

        //verificação por circulo
        if(document.getElementById("SelectCircle").value === "all")
        {
           database.map((data)=>{
                 newListMagics.push(data)
            })
        }
        else {
            database.map((data)=>{
                if(data.Circle == document.getElementById("SelectCircle").value)
                {
                  
                    newListMagics.push(data)
                }
            })
        }

      
        newListMagics.map((data, indice)=>{

            if(document.getElementById("SelectArchetype").value == "all")
            {
                FilterArchetype = newListMagics
            }
            else
            {
                data.Archetypes.map((arche)=>{
                    if(document.getElementById("SelectArchetype").value == arche)
                    {
                        FilterArchetype.push(data)
                    }
                    
                })
            }
        })

       

        newListMagics = FilterArchetype
        

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
                        <select id="SelectArchetype" onChange={FiltrarMagia}>
                            <option value={"all"}>Todos</option>
                            <option value={"Suporte"}>Suporte</option>
                            <option value={"Conjurador"}>Conjurador</option>
                        </select>
                    </div>
                </div>
                </div>
            </div>

            <div className="MagicPage_Magics">
                 <WindowEffect/>
                {
                    ListMagics.map((data)=>(
                        <Magic circle={"Circulo " + data.Circle} description={data.Description} name={data.Name} action={data.Action} range={data.Range} duration={data.Duration}/>
                    ))
                }
            </div>
        </div>
    )
}