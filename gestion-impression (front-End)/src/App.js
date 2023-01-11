import logo from './logo.svg';
import './App.css';
import AppBarLogin from './asset/AppBarLogin';
import Login from './pages/login';
import ResponsiveAppBar from './asset/AppBar';
import RoutesList from './Routes/routes';

function App() {
  const token = localStorage.getItem('access_token');
  console.log(token)
  if (!token) {
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
