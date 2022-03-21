import React,{useContext} from 'react';
import "../ComponentCss/Fitness.css";
import DataContext from '../Context/DataContext';
import { Link } from 'react-router-dom';

export default function Fitness() {
  const [data]= useContext(DataContext);
  console.log({data});
 
  return (
    <>
     
     <div className='main-container'>
      <div className='main'>
        <div className='main-heading'>Fitness</div>

      {data.filter(data => data.category==="Fitness").map((row)=>

      <Link to={'/article/'+row.id} style={{color:'black' }}  >

          <div className='grid-container'>

            <div className='img' style={{ backgroundImage: "url(  `${row.img}` )"}}></div>
            
            <div className='article'>                    
              <div style={{ fontSize: '35px', fontWeight: '900' }}>{row.title}</div>
              <div style={{ fontSize: '15px' }}>{row.about}</div>
              <div className='name'>
                  Fitness | {row.name}
              </div>
            </div>
          </div>
        
      </Link>
      )}
       </div>
       <div style={{border:'2px black solid', height:'600px', marginTop:'25px'}}> Advertisement</div>

       </div>
    
   </>
  )
}
