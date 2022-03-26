import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../Context/DataContext';




const Home = () => {
  const data= useContext(DataContext)
  
  console.log(data[0])
  const heroSectionData = data[0].splice(0,5)
  //console.log(heroSectionData);

  const topArticles = [...heroSectionData]
  // console.log(topArticles)

  return (
  <>
        <div className='hero-section'>
          
            <div className='left-box'  style={{ backgroundImage: "url(" + `${heroSectionData[0].img}` + ")"}}>
              <Link to={`/article/${heroSectionData[1].id}`}><h2 className="heading1">{heroSectionData[0].name}</h2></Link>
            </div>
  
          <div className='right-box'>
            
              <div className='right-box_content1' style={{ backgroundImage: "url(" + `${heroSectionData[1].img}` + ")"}}>
                <Link to={`/article/${heroSectionData[1].id}`}><h3 className='heading2'>{heroSectionData[1].name}</h3></Link>
              </div>

            
              <div className='right-box_content2' style={{ backgroundImage: "url(" + `${heroSectionData[2].img}` + ")"}}>
                <Link to={`/article/${heroSectionData[2].id}`}><h3 className='heading2'>{heroSectionData[2].name}</h3></Link>
              </div>
          </div>
        </div>
        <section>
          <div className='top-article-section'>
            
            {topArticles.map((article) => {
                return (
                  <div className='articleContainer'>
                    <div className='article' style={{ backgroundImage: `url(${article.img})`}}></div>
                    <Link to={'/article/'+article.id} style={{color:'black' }}>{article.name}</Link>
                  </div>
                  )
              }
              )}
          </div>
          </section>
  </>
  )
}

export default Home;