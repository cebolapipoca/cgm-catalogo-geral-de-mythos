import react from "react";
import "../Styles/SearchBar.css"

export default function SearchBar(props)
{
    return (
        <input placeholder={props.placeholder} style={{width: props.width}} className="SearchBar"></input>
    )
}