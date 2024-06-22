import {FC} from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Grocery from "./Grocery";
import Diet from "./Diet";
import Profile from "./Profile";

const Menu: FC = () => {
    return (
        <>
            <Link to="/diet">DIET</Link>
            <Link to="/grocery">GR</Link>
            <Link to="/profile">PROF</Link>
            <Routes>
                <Route path="/diet" element={<Diet/>}></Route>
                <Route path="/grocery" element={<Grocery/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
            </Routes>
        </>
    );
}

export default Menu;