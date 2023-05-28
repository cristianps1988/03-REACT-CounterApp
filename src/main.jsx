import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App'
import Counterapp from './Counterapp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App cargo='Docente' edad={35} />
        <Counterapp />
    </React.StrictMode>
)