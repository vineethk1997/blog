import React,{useContext} from 'react';
import DataContext from '../Context/DataContext';
import { useParams } from 'react-router-dom';
import "../ComponentCss/Article.css";

const Article = () => {
    const[data, setData] = useContext(DataContext)
    const {id}=useParams();
  return (
    <div>
        <h1 className='heading' >{data[id-1].name}</h1>
        <div className='div_article' style={{ backgroundImage: "url(" + `${data[id-1].img}` + ")"}}>
        </div>
        <div className='article-about'>{data[id-1].about}</div>
    </div>
  )
}

export default Article