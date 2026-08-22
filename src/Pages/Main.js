import react from 'react';
import MainWelcome from '../Componentes/MainWelcome';
import "../Styles/Main.css"
import MainMenu from '../Componentes/MainMenu';

export default function Main() {
  return (
    <div className="main">
       <img src='https://i.pinimg.com/originals/91/20/cb/9120cbcbb9b8f14f5c5448fe3929469a.gif' id='static_image'></img>
        <MainWelcome/>
        <MainMenu/>
    </div>
  );
}