import react from "react";
import "../Styles/Item.css"
import Coin from '../Images/Icons/Coin.svg'
import Category from "../Images/Icons/Category.svg"


export default function Item(props)
{
    return (
        <div className="Item" id={props.Nome} onClick={props.click} key={props.Nome}>
            <h1>{props.Nome}</h1>
             <div className="ItemInfo1">
                <h2><img src={Category}/>{"Categoria: " + props.Categoria}</h2>
                <h2><img src={Coin}/>{props.Valor}</h2>
             </div>
        </div>
    )
}