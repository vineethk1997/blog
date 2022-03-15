import React,{useContext} from 'react';
import DataContext from '../Context/DataContext';


export default function Tourism() {
  const [data]= useContext(DataContext);
  console.log({data});
  
  return (
    <>
      {data.filter(data => data.category==="Tourism").map((row)=>
        console.log(row.name)
      
      )}
    {/* <div className="card-container">
    <h1 className="heading"></h1>
    <img className="image" src="" alt="image" />
    <p></p>
    <div className="info">      
      <h4>category: </h4>
    </div>
  </div>
  </> */}
  </>
  )
}
