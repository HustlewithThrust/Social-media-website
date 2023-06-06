import Home from "./pages/home/Home";
import './App.css';
import Signup from './Signlogin/Signup';
import Login from './Signlogin/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element ={user? <Home/>: <Login/>} />  
          
          <Route  path ="/signup"   element = {user ? <Navigate to ="/"/> :<Signup />  }  />       
        <Route path="/login" element={user ? <Navigate to ="/" /> :<Login />  }/>
          <Route  path ="/login/signup"   element = {<Signup />  }  /> 
          <Route  path ="/signup/login/signup"   element = {<Login />  }  /> 
        <Route path="/profile/:username" element = { <Profile />}/>
       
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
