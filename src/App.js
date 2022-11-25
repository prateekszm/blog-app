import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Privateroute from './Routes/PrivateRoutes';
import Profile from './Pages/Profile';
import DashBoard from './Pages/DashBoard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user' element={<Privateroute/>}>
              <Route path='home' element={<Home/>}/>  
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
