import React,{useContext} from 'react';
import DataContext from '../Context/DataContext';


export default function Home() {
  const data= useContext(DataContext)
  console.log({data});
 
  return (
  <>
  {data.map((row)=>
        console.log(row.name)
  
  )}
  
  </>
  )
}
