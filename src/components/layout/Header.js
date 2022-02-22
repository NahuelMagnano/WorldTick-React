import React from 'react';
import '../../App.css';
import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return(
        <header>
            <i class="fas fa-cubes"></i>
            <h1 className='worldtick'>WorldTick</h1>
        </header>
    );
}

export default Header