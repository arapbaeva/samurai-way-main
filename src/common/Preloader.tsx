import React from 'react';
import Loading from '../assets/images/Spinning arrows.gif'

export const Preloader = () => {
    return (
        <div>
             <img src={Loading} alt={'loading'}/>
        </div>
    );
};

