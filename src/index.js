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
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

