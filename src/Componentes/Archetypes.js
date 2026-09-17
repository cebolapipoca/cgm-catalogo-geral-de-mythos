import react from "react";
import "animate.css"

export default function Archetype(props)
{
    return (
        <div className="ArchetypeContainer " id={props.name} style={props.style}>
            <div>
                 <img className="animate__animated animate__fadeIn" src={props.img}></img>
                <h1 className="animate__animated animate__fadeIn">{props.name}</h1>
            </div>

            <p className="animate__animated animate__fadeIn">{props.description}</p>

            <table className="animate__animated animate__fadeIn"  style={{color: "white"}}>
                {
                    props.archetypelist.map((data)=>(
                       <tr>
                            <td className="tdnivel">{"Nivel " + data.nivel}</td>

                            {
                                data.reward.map((reward)=>(
                                    <td className="tdreward">{reward}</td>
                                ))
                            }
                       </tr> 
                    ))
                }
            </table>
        </div>
    )
}