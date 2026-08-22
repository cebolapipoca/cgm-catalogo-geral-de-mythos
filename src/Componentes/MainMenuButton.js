import React from "react";
import "../Styles/MainMenuButton.css"

export default function MainMenuButton(props) {
    return (
        <div className="MainMenuButton">
            <img src={props.image}></img>
            <h1>{props.namebutton}</h1>
        </div>
    )
}