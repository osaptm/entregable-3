import React from 'react';
import banner from '../assets/banner.jpg'
import Search from './Search'
const Header = ({getLocation}) => { 
    return (
        <div className='header'>
            <img src={banner} alt="" className='img-theme' />
            <h1 className='title-header'>Rick and Morty Wiki</h1> 
            <Search getLocation = {getLocation} />  
        </div>
    );
};

export default Header;