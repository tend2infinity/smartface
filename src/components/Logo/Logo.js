import React from 'react';
import Tilt from 'react-tilt'
import smartface from './smartface.jpg';
import './Logo.css';
const Logo = () => {
    return (
        <div className='ma4 mt0 mb0'>
            <Tilt className="Tilt br5 shadow-1" options={{ max : 60 }} style={{ height: 200, width: 250 }} >
            <div className="Tilt-inner mw-100 "> 
            <img  alt='logo' src={smartface} /> 
            </div>
            </Tilt>
     </div>
    );


}

export default Logo;