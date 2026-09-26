import react from "react";
import "../Styles/SearchBar.css"

export default function SearchBar(props)
{
    return (
        <input onChange={props.changeEvent} placeholder={props.placeholder} style={{width: props.width}} id="SearchBar" className="SearchBar"></input>
    )
}