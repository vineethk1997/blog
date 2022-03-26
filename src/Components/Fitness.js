import React,{useContext} from 'react';
import "../ComponentCss/Common.css";
import DataContext from '../Context/DataContext';
import { Link } from 'react-router-dom';

export default function Fitness() {
  const [data]= useContext(DataContext);
 
  return (
    <>
    <div className='main-container'>
       <div className='main'>
        <div className='main-heading'><h1>Fitness</h1></div>

         {data.filter(data => data.category==="Fitness").map((row)=>
            
               <div className='flex'>
                 <div className='img-container'><img className="image" src={row.img}/></div>
                 <div className='article'>   
                   <div className='title'>                 
                     <div>{row.name}</div>
                   </div>
                   <div className='about'>
                     <div>{row.about}</div>
                   </div>
                   <Link to={'/article/'+row.id} style={{color:'black' }}  >
                   <div className='name'>
                     Fitness | {row.name}
                   </div>
                   </Link>
                 </div>
               </div>
             
          )}
     </div>
     <div className='advertisement'> Advertisement</div>
    </div>
 
 
</>
  )
}