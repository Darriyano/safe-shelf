import React, {FC, useState} from "react";
import Menu from "./menu";
import {Route, Routes} from "react-router-dom";
import Diet from "./Diet";
import Grocery from "./Grocery";
import Profile from "./Profile";

const MenuPage: FC = () => {
    const [menuVisible, setMenuVisible] = useState(true);

    return (
        <div className={menuVisible ? 'menuVisible' : ''}>
            {menuVisible ? (
                <Menu setMenuVisible={setMenuVisible}/>
            ) : (
                <Routes>
                    <Route path="/diet" element={<Diet setMenuVisible={setMenuVisible}/>}></Route>
                    <Route path="/grocery" element={<Grocery setMenuVisible={setMenuVisible}/>}></Route>
                    <Route path="/profile" element={<Profile setMenuVisible={setMenuVisible}/>}></Route>
                </Routes>
            )}
        </div>
    )
}

export default MenuPage;