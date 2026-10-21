import react from "react";
import MainMenuButton from "../Componentes/MainMenuButton";

export default function RulesPage()
{
    return (
        <div className="RulesMenu" style={{width: "100%", display: "flex", justifyContent:"center", alignItems: "center", height: "100vh", gap: "20px"}}>
            <MainMenuButton namebutton="Criando Personagem" href="/Rules/Characters"/>
            <MainMenuButton namebutton="Sistema de Marchas" href="/Rules/Marchs"/>
            <MainMenuButton namebutton="Morte & Estresse" href="/Rules/Stress"/>
        </div>
    )
}
