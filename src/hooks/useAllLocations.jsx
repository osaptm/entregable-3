import { useState, useEffect } from 'react'
import axios from 'axios'

const useAllLocations = () => {
  const [ObjAllLocation, setObjAllLocation] = useState([])

  const init = async () => {
    if(ObjAllLocation.length===0){
      let arrLocations = await getQueryLocation("https://rickandmortyapi.com/api/location/?page=1");
      setObjAllLocation(arrLocations);
    }  
  }

  const getQueryLocation  = async (page, arr=[]) => {    
    let json = await axios.get(page);  
    let arrayLocations = [...arr];     
      for (const objLocationTotal of json.data.results) {
        let objLocation = {
          id: objLocationTotal.id,
          name: objLocationTotal.name,
          type: objLocationTotal.type,
          dimension: objLocationTotal.dimension
        };
        arrayLocations.push(objLocation);
     }     
    if (json.data.info.next !== null) return await getQueryLocation(json.data.info.next, arrayLocations);    
    return arrayLocations;   
}

  useEffect(() => {
     init(); 
  }, []); 

    return {ObjAllLocation};
};

export default useAllLocations;