import './App.css';

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Login_User from './Login_User';
import Add_User from './Add_User';
import Add_Order from './Add_Order';


function App() {
  return (
    <div className="App">
     
      
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<Add_User/>} />
                <Route path = "/Login_User" element={<Login_User />} />
                <Route path = "/Add_Order" element={<Add_Order />} />
            </Routes>
        </BrowserRouter>

      
    </div>
  );
}

export default App;
