import React from 'react';
import '../../styles/components/layout/Nav.css';
import {NavLink} from 'react-router-dom';
import '../../App.css';

const Nav = (props) => {
    return(
        <nav>
            <NavLink to = "/" style={({ isActive }) => ({ borderBottom: isActive ? '0.5px solid #dc0404' : '' })}><div className="elem activo">Inicio</div></NavLink>
            <NavLink to="/noticias" style={({ isActive }) => ({ borderBottom: isActive ? '0.5px solid #dc0404' : '' })}><div className="elem">Noticias</div></NavLink>
            <NavLink to="/grandespremios" style={({ isActive }) => ({ borderBottom: isActive ? '0.5px solid #dc0404' : '' })}><div className="elem">Grandes Premios</div></NavLink>
            <NavLink to="/contacto" style={({ isActive }) => ({ borderBottom: isActive ? '0.5px solid #dc0404' : '' })}><div className="elem">Contacto</div></NavLink>
        </nav>
    );
}

export default Nav


