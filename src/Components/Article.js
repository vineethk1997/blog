import React,{useContext} from 'react';
import DataContext from '../Context/DataContext';






const Article = () => {
    const[data, setData] = useContext(DataContext);
    const arr =  window.location.href.split("/")
    const id = arr[arr.length - 1]
    console.log(id)
    const articles = data.filter(item => {
      return item.id === id;
    })
    console.log(articles[0])
  return (
    <div>
        <h1 className='heading' >{articles[0].name}</h1>
        <div className='div_article[0]' ><img src={articles[0].img}/>
        </div>
        <div className='article[0]-about'>{articles[0].about}</div>
    </div>
  )
}

export default Article;