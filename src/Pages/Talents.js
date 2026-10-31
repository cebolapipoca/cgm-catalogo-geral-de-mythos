import react from "react";
import "../Styles/TalentPage.css"
import SearchBar from "../Componentes/SearchBar"
import Talent from "../Componentes/Talent";
import TalentsList from "../database/talentos.json"
import WindowEffect from "../Componentes/WindowEffect"
import { useState } from "react";

export default function TalentPage() {

    const [NewList, useNewList] = useState(Array.from(TalentsList))

    function FiltrarTalento() {
        const SearchBar = document.getElementById("SearchBar")
        const InputFilterLevel = document.getElementById("InputNivel")
        const InputFilterArchetype = document.getElementById("InputArquetipo")
        const InputFilterOrigin = document.getElementById("InputOrigem")



        const NewTalentList = TalentsList.filter((talent) => {

            return talent.Nome.toLowerCase().includes(SearchBar.value.toLowerCase()) &&
                InputFilterLevel.value >= talent.Nivel &&
                talent.Requisitos.toLowerCase().includes(InputFilterArchetype.value.toLowerCase()) &&
                talent.Requisitos.toLowerCase().includes(InputFilterOrigin.value.toLowerCase())
        })

        useNewList(NewTalentList)
    }

    return (
        <div className="TalentPage">
            <WindowEffect />
            <div className="TalentPage_Header">
                <div className="TalentPage_HeaderInfo">
                    <label>Pesquisar talento</label>
                    <SearchBar changeEvent={FiltrarTalento} width={"100%"} />
                </div>
                <div className="TalentPage_HeaderInfo2">
                    <div className="LabelInput_Talent">
                        <label>Nivel</label>
                        <select id="InputNivel" onChange={() => FiltrarTalento()}>
                            <option value={"10"}>Todos</option>
                            <option value={""}>0</option>
                            <option value={"1"}>até 1</option>
                            <option value={"2"}>até 2</option>
                            <option value={"3"}>até 3</option>
                            <option value={"4"}>até 4</option>
                            <option value={"5"}>até 5</option>
                            <option value={"6"}>até 6</option>
                            <option value={"7"}>até 7</option>
                            <option value={"8"}>até 8</option>
                            <option value={"9"}>até 9</option>
                            <option value={"10"}>até 10</option>
                        </select>
                    </div>
                    <div className="LabelInput_Talent">
                        <label>Arquétipo</label>
                        <select id="InputArquetipo" onChange={() => FiltrarTalento()}>
                            <option value={""}>Todos</option>
                            <option value={"Combatente"}>Combatente</option>
                            <option value={"Conjurador"}>Conjurador</option>
                            <option value={"Suporte"}>Suporte</option>
                            <option value={"Defensor"}>Defensor</option>
                            <option value={"Atirador"} >Atirador</option>
                        </select>
                    </div>
                    <div className="LabelInput_Talent">
                        <label>Origem</label>
                        <select id="InputOrigem" onChange={() => FiltrarTalento()}>
                            <option value={""}>Todos</option>
                            <option value={"Médico"}>Médico</option>
                            <option value={"Enfermeiro"}>Enfermeiro</option>
                            <option value={"Criminoso"}>Criminoso</option>
                            <option value={"Assassino"}>Assassino</option>
                            <option value={"Xerife/Policial"}>Xerife/Policial</option>
                            <option value={"Detetive"}>Detetive</option>
                            <option value={"Apresentador"}>Apresentador</option>
                            <option value={"Bartender"}>Bartender</option>
                            <option value={"Cozinheiro"}>Cozinheiro</option>
                            <option value={"Comerciante/Lojista"}>Comerciante/Lojista</option>
                            <option value={"Acrobata"}>Acrobata</option>
                            <option value={"Palhaço"}>Palhaço</option>
                            <option value={"Motorista"}>Motorista</option>
                            <option value={"Domador de Feras"}>Domador de Feras</option>
                            <option value={"Mágico de Circo"}>Mágico de Circo</option>
                            <option value={"Guarda"}>Guarda</option>
                            <option value={"Espião"}>Espião</option>
                            <option value={"Alquimista"}>Alquimista</option>
                            <option value={"Espadachim"}>Espadachim</option>
                            <option value={"Ferreiro/Engenheiro"}>Ferreiro/Engenheiro</option>
                            <option value={"Caçador de Recompensas"}>Caçador de Recompensas</option>
                            <option value={"Vagabundo"}>Vagabundo</option>
                            <option value={"Robô"}>Robô</option>
                            <option value={"Nobre"}>Nobre</option>
                            <option value={"Ator"}>Ator</option>
                            <option value={"Hacker"}>Hacker</option>
                            <option value={"Boy Kisser"}>Boy Kisser</option>
                            <option value={"Paizão"}>Paizão</option>
                            <option value={"Anime Girl"}>Anime Girl</option>
                            <option value={"Gamer"}>Gamer</option>
                            <option value={"Discord Mod"}>Discord Mod</option>
                            <option value={"Megalovania"}>Megalovania</option>
                            <option value={"Meta Gamer"}>Meta Gamer</option>
                            <option value={"Mary Sue"}>Mary Sue</option>
                            <option value={"Shitposter"}>Shitposter</option>
                            <option value={"Sacerdotisa"}>Sacerdotisa</option>
                            <option value={"Sanguinário"}>Sanguinário</option>
                            <option value={"Sobrevivente"}>Sobrevivente</option>
                            <option value={"Prodígio"}>Prodígio</option>
                            <option value={"Marionetista"}>Marionetista</option>

                        </select>
                    </div>
                </div>
            </div>

            <div className="TalentPage_List">
                {
                    NewList.map((data) => (
                        <Talent TalentName={data.Nome} requisites={"Requisitos: " + data.Requisitos} description={data.Descricao} />
                    ))
                }
            </div>
        </div>
    )
}