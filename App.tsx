import React, {useState} from 'react';
import LoginPage from "./src/pages/LoginPage";
import {Navigate, Route, Routes} from "react-router-dom";
import Diet from "./src/pages/Diet";
import Grocery from "./src/pages/Grocery";
import Profile from "./src/pages/Profile";
import DietDetails from "./src/pages/DietDetails";
import GroceryDetails from "./src/pages/GroceryDetails";
import QRScanPage from "./src/pages/QRScanPage";
import Menu from "./src/pages/menu";
import SignPage from "./src/pages/SignPage";
import {useResponse} from "./src/pages/ResponseContext";


const App: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState(true);
    const {response, setResponse} = useResponse();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (loggedIn: boolean) => {
        setIsLoggedIn(loggedIn);
    };

    return (
        <div>
            <Routes>
                {/* Default route handling */}
                <Route path="/" element={
                    isLoggedIn ? <Navigate to="/menu"/> : <LoginPage onChange={handleLogin} setResponse={setResponse}/>
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
