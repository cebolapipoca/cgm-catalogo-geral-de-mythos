import React from "react";
import "../Styles/MainMenu.css"
import MainMenuButton from "../Componentes/MainMenuButton";
import MagicIcon from "../Images/Icons/MagicIcon.svg"

export default function MainMenu()
{
    return (
        <div className="MainMenu" id="MainMenu">
            <div className="MainMenu_Content">
                <MainMenuButton namebutton="Magias" href="/Magics" image={MagicIcon}/>
                <MainMenuButton namebutton="Magias Selvagens" href="/wildmagics" image={MagicIcon}/>
                <MainMenuButton namebutton="Talentos" image={MagicIcon}/>
                <MainMenuButton namebutton="Arquétipos" image={MagicIcon}/>
                <MainMenuButton namebutton="Itens" image={MagicIcon}/>
                <MainMenuButton namebutton="Regras" image={MagicIcon}/>
            </div>
        </div>
    )
}