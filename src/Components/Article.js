import React,{useContext} from 'react';
import DataContext from '../Context/DataContext';






const Article = () => {
  let [data] = useContext(DataContext);
  
  const arr =  window.location.href.split("/")
  const id = arr[arr.length - 1]

  let articles = data.filter(item => {
    return item.id === id;
  })

  return (
    <div>
        <h1 className='heading' >{articles[0].name}</h1>
        <div className='div_article' ><img src={articles[0].img}/>
        </div>
        <div className='article-about'>{articles[0].about}</div>
    </div>
  )
}

export default Article;