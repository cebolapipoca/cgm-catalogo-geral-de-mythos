import React from "react";
import "../Styles/MainMenu.css"
import MainMenuButton from "../Componentes/MainMenuButton";
import MagicIcon from "../Images/Icons/MagicIcon.svg"
import d20 from "../Images/Icons/d20.svg"
import cerebro from "../Images/Icons/cerebro.svg"
import fire from "../Images/Icons/Fire.svg"
import mask from "../Images/Icons/Mask.svg"
import dolar from "../Images/Icons/Dolar.svg"
import book from "../Images/Icons/livro.svg"
import SoundPage from "./SoundPage";

export default function MainMenu()
{
    return (
        <div className="MainMenu" id="MainMenu">
            
            <div className="MainMenu_Content">
                <MainMenuButton namebutton="Magias" href="/Magics" image={MagicIcon}/>
                <MainMenuButton namebutton="Magias Selvagens" href="/wildmagics" image={d20}/>
                <MainMenuButton namebutton="Talentos" href="/talents" image={cerebro}/>
                <MainMenuButton namebutton="Arquétipos" href="/archetypes" image={mask}/>
                <MainMenuButton namebutton="Itens" href="/Item" image={dolar}/>
                <MainMenuButton namebutton="Regras" href="/Rules" image={book}/>
            </div>
        </div>
    )
}