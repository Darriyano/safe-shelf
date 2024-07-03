import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {ResponseProvider} from "./pages/ResponseContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ResponseProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ResponseProvider>
    </React.StrictMode>
);