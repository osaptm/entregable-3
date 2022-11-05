import React from 'react';
import { useState, useEffect } from 'react'
import Header from './Header'
import Locations from './Locations'
import useApiRick from '../hooks/useApiRick'
import Residents from './Residents';
const App = () => {
    const {ObjLocation,getLocation} = useApiRick(); 
    
    return (
        <>
            <Header getLocation={getLocation}/>
            <Locations ObjLocation={ObjLocation} />
            <Residents  ObjLocation={ObjLocation}/>
            
        </>
    );
};

export default App;