import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useState } from 'react';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Auth from './Component/Auth';
import Dashboard from './Component/Dashboard'

function App() {
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Auth />}/>
         <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
