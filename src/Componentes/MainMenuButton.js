import React from "react";
import "../Styles/MainMenuButton.css"
import "animate.css"
import { Link } from "react-router";

export default function MainMenuButton(props) {
    return (
            <div className="MainMenuButton animate__animated animate__fadeInUp">
                <Link to={props.href}/>
                <img src={props.image}></img>
                <h1>{props.namebutton}</h1>
            </div>
    )
}