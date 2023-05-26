import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App cargo='Docente' edad={35} title='Hola mundo' />
    </React.StrictMode>
)