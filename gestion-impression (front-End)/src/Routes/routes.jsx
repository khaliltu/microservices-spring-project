import React from 'react'
import { PATHS } from "./path";
import { Routes, Route } from "react-router-dom";

import ResponsiveAppBar from '../asset/AppBar';
import Agent from '../pages/Agent';
import Administrateur from '../pages/Administrateur';
import Enseignant from '../pages/Enseignant';
import Home from '../pages/home';


export const RoutesList = () => {
  return (
    <Routes>
      <Route path={PATHS.Home} element={<Home />} />
      <Route path={PATHS.Agent} element={<Agent />} />  
      <Route path={PATHS.Administrateur} element={<Administrateur />} /> 
      <Route path={PATHS.Enseignant} element={<Enseignant />} />
    </Routes>
  );
};
export default RoutesList;
