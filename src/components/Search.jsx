import React from 'react';
import { useState, useEffect } from 'react'
import useAllLocations from '../hooks/useAllLocations'

const Search = ({getLocation}) => {
    const [InputValue, setInputValue] = useState('')
    const [StateSearch, setStateSearch] = useState(false)
    const {ObjAllLocation} = useAllLocations();

    const ResultSearch = () => {
        if(InputValue!=='' && StateSearch === false){ 
          return(
            <div className='result-search'>
              {
                ObjAllLocation.map((ele)=>{
                    if(ele.name.toLowerCase().includes(InputValue.toLowerCase())){
                        return (<p key={ele.id} onClick={()=>searchLocation(ele.id,ele.name)}>{ele.name}</p>);
                    } 
                })
              }
            </div>
          );    
        }
      }
      
    const searchLocation = (value,description) =>{
        setInputValue(description);
        setStateSearch(true);
        getLocation(value);
      }
    
    return (
        <div className='search'>
              <input className='input-search' type="text" onChange={(e) =>{setStateSearch(false); setInputValue(e.target.value);}} value={InputValue}/>
              <ResultSearch />
        </div>
    );
};

export default Search;