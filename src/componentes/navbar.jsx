import './navbar.css';

import { useState } from "react";
import { Link } from 'react-router-dom';
import { House } from "@phosphor-icons/react";
import { UserFocus } from '@phosphor-icons/react';
import { QuestionMark } from '@phosphor-icons/react';
import { DotsThreeOutline } from '@phosphor-icons/react';
import { X } from '@phosphor-icons/react';


export const Navbar = () => {
    const[barraVisible, setBarraVisible] = useState(false);
    const[boton, setBoton] = useState(true);

    const abrirBarra = () => {
        setBarraVisible(true);
    };
    
    const cerrarBarra = () => {
        setBarraVisible(false);
    };

    const ocultarboton = () =>{
        setBoton(false);
    };

    const mostrarboton = () => {
        setBoton(true);
    };


    return <div className={`navbar ${barraVisible ? "visible" : ""}`}>
        <Link to="/"   className="nosub"><House/></Link>
        <button className={`btnabrir ${boton ? "visible" : ""}`} onClick={() => {abrirBarra(); ocultarboton()}}><DotsThreeOutline size={30} color="#e8e8e8"/></button>
        <div className={`linkss ${barraVisible ? "visible" : ""}`}>
            <button className={`btncerrar ${barraVisible ? "visible" : ""}`} onClick={() => {cerrarBarra(); mostrarboton()}}><X size={30} color="#e8e8e8" /></button>
            <Link to="/" onClick={() => {cerrarBarra(); mostrarboton()}}  className={`nosub2 ${barraVisible ? "visible" : "" }`}>Inicio</Link>
            <Link to="/Por-Que-LoopStudio" onClick={() => {cerrarBarra(); mostrarboton()}} className={`nosub ${barraVisible ? "visible" : "" }`}><QuestionMark/></Link>
            <Link to="/Sobre-mi" onClick={() => {cerrarBarra(); mostrarboton()}} className={`nosub ${barraVisible ? "visible" : "" }`}><UserFocus/></Link>
        </div>
    </div>
}

