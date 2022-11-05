import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'

const ResidentInfo = ({url}) => {
    const [ObjResident, setObjResident] = useState({})
    const [ObjResidentState, setObjResidentState] = useState(false)

    const getResident = (url) => {      
        axios.get(url)
        .then(json => {
          setObjResident(json.data);
          setObjResidentState(true);
        }).catch((err)=>{
            setObjResidentState(false);
        })    
    }

    useEffect(() => { 
        getResident(url);
      }, []); 

    return (
        ObjResidentState && 
        (<div className='resident-info'>
            <h3>{ObjResident.name}</h3>
            <img src={ObjResident.image} className="img-resident"/>
            <p><b>Status:</b>{ObjResident.status}</p>
            <p><b>Origin:</b>{ObjResident.origin.name}</p>
            <p><b>Espisodes:</b>{ObjResident.episode.length}</p>
        </div>)
    );
};

export default ResidentInfo;