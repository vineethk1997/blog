import React,{useContext} from 'react';
import DataContext from '../Context/DataContext';


const Technology=()=> {
  const [data]= useContext(DataContext);
  console.log({data});
  return (
    <div className="card-container">
      <h1 className="heading"></h1>
      <img className="image" src="" alt="image" />
      <p></p>
      <div className="info">      
        <h4>category: </h4>
      </div>
    </div>
  )
}
export default Technology;