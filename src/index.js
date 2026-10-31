import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import Main from './Pages/Main';
import MagicsPage from './Pages/Magics';
import WildMagicsPage from './Pages/WildMagics';
import TalentPage from './Pages/Talents';
import ArchetypesPage from './Pages/Archetypes';
import ItemPage from './Pages/Itens';
import SoundPage from './Componentes/SoundPage';
import RulesPage from './Pages/Rules';
import CharacterRules from './Pages/RulesPages/Characters';
import WindowEffect from './Componentes/WindowEffect';
import MarchSystem from './Pages/RulesPages/MarchSystem';
import StressLevel from './Pages/RulesPages/Stress';
import ClickSound from './Componentes/TechClick';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/> 
  },
  {
    path: "/Magics",
    element: <MagicsPage/>
  },
  {
    path: "WildMagics",
    element: <WildMagicsPage/>
  },
  {
    path: "Talents",
    element: <TalentPage/>
  },
  {
    path: "Archetypes",
    element: <ArchetypesPage/>
  },
  {
    path: "Item",
    element: <ItemPage/>
  },
  {
    path: "Rules",
    element: <RulesPage/>
  },
   {
    path: "/Rules/Characters",
    element: <CharacterRules/>
  },
  {
    path: "/Rules/Marchs",
    element: <MarchSystem/>
  },
  {
    path: "/Rules/Stress",
    element: <StressLevel/>
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <RouterProvider router={router}/>
    <SoundPage/>
    <WindowEffect/>
    <ClickSound/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

