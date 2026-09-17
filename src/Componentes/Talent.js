import react from "react";
import '../Styles/Talent.css'

export default function Talent(props)
{
    return (
        <div className="TalentItem">
            <h1>{props.TalentName}</h1>
            <h2>{props.requisites}</h2>
            <p>{props.description}</p>
        </div>
    )
}