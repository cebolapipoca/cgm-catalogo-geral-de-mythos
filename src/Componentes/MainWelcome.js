import react from "react";
import "../Styles/MainWelcome.css"

export default function MainWelcome()
{
    return (
        <div className="MainWelcome" id="MainWelcome" onClick={ShowMenu}>
            <h1>C.G.M</h1>
            <h2>Catálogo Geral de Mythos</h2>
            <h3>{">>> Clique para continuar <<<"}</h3>
        </div>
    )
}

function ShowMenu() {
    document.getElementById("MainWelcome").style.display = "none";
}