import React from 'react';
import '../styles/Banner.css'
//import logo from '../assets/leaf+1.png'
//import Recommendation from './Recommendation'


const Banner = ({children}) => {
    //const title="La maison jungle"

    return (
        <div className='lmj-banner'>
            {children}
       
        </div>
        
    );
};

export default Banner;