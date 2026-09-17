import react from "react";
import "../Styles/TalentPage.css"
import SearchBar from "../Componentes/SearchBar"
import Talent from "../Componentes/Talent";
import TalentsList from "../database/talentos.json"
import WindowEffect from "../Componentes/WindowEffect"

export default function TalentPage()
{
    return (
        <div className="TalentPage">
            <WindowEffect/>
            <div className="TalentPage_Header">
                <div className="TalentPage_HeaderInfo">
                    <label>Pesquisar talento</label>
                    <SearchBar width={"100%"}/>
                </div>
                <div className="TalentPage_HeaderInfo2">
                    <div className="LabelInput_Talent">
                        <label>Nivel</label>
                        <select>
                            <option>0</option>
                        </select>
                    </div>
                    <div  className="LabelInput_Talent">
                        <label>Arquétipo</label>
                        <select>
                            <option>Combatente</option>
                        </select>
                    </div>
                    <div  className="LabelInput_Talent">
                        <label>Origem</label>
                        <select>
                            <option>Palhaço</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="TalentPage_List">
                {
                    TalentsList.map((data)=>(
                        <Talent TalentName={data.nome} requisites={data.requisitos} description={data.descricao}/>
                    ))
                }
            </div>
        </div>
    )
}