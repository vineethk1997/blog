import React,{useContext} from 'react';
import "../ComponentCss/Fitness.css";
import DataContext from '../Context/DataContext';

export default function Fitness() {
  const [data]= useContext(DataContext);
  console.log({data});
 
  return (
    <>
    

      {data.filter(data => data.category==="Fitness").map((row)=>
        console.log(row.name)
      
      )}
       
     
    
   </>
  )
}
