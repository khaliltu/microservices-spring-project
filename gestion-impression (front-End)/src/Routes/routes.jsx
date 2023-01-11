import React from 'react'
import { PATHS } from "./path";
import { Routes, Route } from "react-router-dom";

import ResponsiveAppBar from '../asset/AppBar';
import Agent from '../pages/Agent';
import Administrateur from '../pages/Administrateur';
import Enseignant from '../pages/Enseignant';


export const RoutesList = () => {
  return (
    <Routes>
      <Route path={PATHS.Home} element={<ResponsiveAppBar />} />
      <Route path={PATHS.Agent} element={<Agent />} />  
      <Route path={PATHS.Administrateur} element={<Administrateur />} /> 
      <Route path={PATHS.Enseignant} element={<Enseignant />} />
    </Routes>
  );
};
export default RoutesList;
