import React, {useState} from 'react';
import LoginPage from "./pages/LoginPage";
import {Link, Navigate, Route, Router, Routes} from "react-router-dom";
import Diet from "./pages/Diet";
import Grocery from "./pages/Grocery";
import Profile from "./pages/Profile";
import DietDetails from "./pages/DietDetails";
import GroceryDetails from "./pages/GroceryDetails";
import QRScanPage from "./pages/QRScanPage";
import Menu from "./pages/menu";
import SignPage from "./pages/SignPage";


const App: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState('');

    const handleLogin = (loggedIn: string) => {
        setIsLoggedIn(loggedIn);
    };

    return (
        <div>
            <Routes>
                {/* Default route handling */}
                <Route path="/" element={
                    isLoggedIn ? <Navigate to="/menu"/> : <LoginPage onChange={handleLogin}/>
                }/>

                {/* Route to menu */}
                <Route path="/sign" element={<SignPage/>}></Route>
                <Route path="/menu" element={<Menu setMenuVisible={setMenuVisible}/>}/>
                <Route path="/diet/*" element={<Diet setMenuVisible={setMenuVisible}/>}></Route>
                <Route path="/grocery/*" element={<Grocery setMenuVisible={setMenuVisible}/>}></Route>
                <Route path="/profile" element={<Profile setMenuVisible={setMenuVisible}/>}></Route>
                <Route path="/details" element={<DietDetails setMenuVisible={setMenuVisible}/>}/>
                <Route path="/grocery-details" element={<GroceryDetails setMenuVisible={setMenuVisible}/>}/>
                <Route path="/grocery-scanner" element={<QRScanPage setMenuVisible={setMenuVisible}/>}/>
            </Routes>
        </div>
    )
        ;
}

export default App;
