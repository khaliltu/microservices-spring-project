import './App.css';
import AppBarLogin from './asset/AppBarLogin';
import Login from './pages/login';
import ResponsiveAppBar from './asset/AppBar';
import RoutesList from './Routes/routes';
import React from "react"

function App() {
  const user = localStorage.getItem('user');
  console.log(user)
  if (!user) {
      return (<div><AppBarLogin /><Login/></div>);
  }
  return (
    <>
   
   <ResponsiveAppBar/>
            <div className="content">
                <RoutesList/>
            </div>
    </>
  );
}

export default App;
