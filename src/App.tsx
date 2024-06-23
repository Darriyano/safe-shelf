import React, {useState} from 'react';
import MenuPage from "./pages/MenuPage";


// import './App.css';

function App() {
    return (
        <div>
            {/*If login, header will always be shown to the user, before it will be
            register page and checker for login
            */}
            <MenuPage/>
        </div>
    );
}

export default App;
