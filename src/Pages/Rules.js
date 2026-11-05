import react from "react";
import MainMenuButton from "../Componentes/MainMenuButton";
import Characters from "../Images/Icons/characters.svg"
import Death from "../Images/Icons/death.svg"
import foot from "../Images/Icons/foot.svg"

export default function RulesPage()
{
    return (
        <div className="RulesMenu" style={{width: "100%", display: "flex", justifyContent:"center", alignItems: "center", height: "100vh", gap: "20px"}}>
            <MainMenuButton namebutton="Criando Personagem" href="/Rules/Characters" image={Characters}/>
            <MainMenuButton namebutton="Sistema de Marchas" href="/Rules/Marchs" image={foot}/>
            <MainMenuButton namebutton="Morte & Estresse" href="/Rules/Stress" image={Death}/>
        </div>
    )
}
