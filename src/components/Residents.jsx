import { useState, useEffect } from 'react'
import ResidentInfo from './ResidentInfo'
const Residents = ({ObjLocation}) => {
  const ItemsPage = 4;
  const [Page,setPage] = useState(1);

  const AllResidents = () => {
            let startIndex = ((Page-1)*ItemsPage) 
            let endIndex =  (ItemsPage*Page)
            return(
              <div className='all-residents'>
                {ObjLocation.residents?.map((ele,index)=>{
                    if(index>=startIndex && index<endIndex){
                        return (<ResidentInfo key={ele} url={ele} />);
                    }
                })}
              </div>
            );    
        
      }

  const Pagination = () => {         
        let total = Math.ceil(ObjLocation.residents?.length/ItemsPage) 
        let ButtonsJsx = []; 
        
        for(let i=1;i<=total;i++) {
            let classButton = (Page===i)?'btn-pagination-active':'btn-pagination';
            ButtonsJsx.push(<button onClick={()=>{setPage(i)}} key={i} className={classButton} type='button'>{i}</button>);
        }

        return (
             <div className='pagination'>
                 <b>Pag..</b>{ButtonsJsx}
             </div>
         );
     };

     useEffect(() => {
        setPage(1);
     }, [ObjLocation]); 

    return (
        <> 
            <Pagination />
           <AllResidents />
           <Pagination />
        </> 
    );
};

export default Residents;