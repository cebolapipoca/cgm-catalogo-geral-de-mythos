import react from "react";
import '../Styles/Magic.css'

export default function Magic(props)
{
    return (
        <div className="Magic_Content">
            <div className="Magic_Info1">
                <h2>{props.circle}</h2>
                <h1>{props.name}</h1>
            </div>
            <div className="Magic_Info2">
                <h2>Tempo de Conjuração: <p>{props.action}</p></h2>
                <h2>Alcance: <p>{props.range}</p></h2>
                <h2>Duração: <p>{props.duration}</p></h2>
            </div>
            <div className="Magic_Info3">
                <p>{props.description}</p>
            </div>
        </div>
    )
}