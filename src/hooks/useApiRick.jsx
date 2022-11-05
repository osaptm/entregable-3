import { useState, useEffect } from 'react'
import axios from 'axios'

const useApiRick = () => {
    const [ObjLocation, setObjLocation] = useState({})
  
    const getLocation =  (id) => {      
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(json => { 
          setObjLocation(json.data);
        }).catch((err)=>{
        })   
    }  
     
  useEffect(() => {
    let idRandom = Math.floor((Math.random()*125)+1);
    getLocation(idRandom);
  }, []); 

    return {ObjLocation,getLocation};
};

export default useApiRick;