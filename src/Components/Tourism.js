import React,{useContext} from 'react';
import DataContext from '../Context/DataContext';
import { Link } from 'react-router-dom';
import "../ComponentCss/Tourism.css";


export default function Tourism() {
  const [data]= useContext(DataContext);
  console.log({data});
  
  return (
    <>
       <div className='main-container'>
      <div className='main'>
        <div className='main-heading'>Tourism</div>

      {data.filter(data => data.category==="Tourism").map((row)=>

      <Link to={'/article/'+row.id} style={{color:'black' }}  >

          <div className='tdiv1'>

            <div className='img' style={{ backgroundImage: "url(  `${row.img}` )"}}></div>
            
            <div className='articleshort'>                    
              <div style={{ fontSize: '35px', fontWeight: '900' }}>{row.title}</div>
              <div style={{ fontSize: '15px' }}>{row.about}</div>
              <div className='name'>
                  Tourism / {row.name}
              </div>
            </div>
          </div>
        
      </Link>
      )}
       </div>
       <div style={{border:'2px black solid', height:'400px', marginTop:'25px'}}> Advertisement</div>

       </div>
    
    
  </>
  )
}
