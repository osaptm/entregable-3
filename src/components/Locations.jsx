import { useState, useEffect } from 'react'

function Locations({ObjLocation}) {
   
  const InfoLocation = () => {
   
      return(
        <>
          <h2>{ObjLocation.name}</h2>
          <div className='info-location'>
            <p>Type:{ObjLocation?.type}</p>
            <p>Dimension:{ObjLocation.dimension}</p>
            <p>Residents:{ObjLocation.residents?.length}</p>
          </div>
        </>  
      );
    
  }
  
  return (
    <>
      <div className="card">     
          <InfoLocation />
      </div>
    </>
  )
}

export default Locations
