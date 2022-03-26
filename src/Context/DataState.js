import React,{useState} from "react";
import DataContext from "./DataContext";


const DataState=(props)=> {
  const[data, setData] = useState([
{
    id:"1",
    category: "Technology",
    name: "Artificial intelligence",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    about: "Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.Less than a decade after breaking the Nazi encryption machine Enigma and helping the Allied Forces win World War II, mathematician Alan Turing changed history a second time with a simple question.At its core, AI is the branch of computer science that aims to answer Turing's question in the affirmative. It is the endeavor to replicate or simulate human intelligence in machines."
},{
    id:"2",
    category: "Technology",
    name: "Blockchain",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    about: "Blockchain technology is most simply defined as a decentralized, distributed ledger that records the provenance of a digital asset. By inherent design, the data on a blockchain is unable to be modified, which makes it a legitimate disruptor for industries like payments, cybersecurity and healthcare. Our guide will walk you through what it is, how it's used and its history.Blockchain, sometimes referred to as Distributed Ledger Technology (DLT), makes the history of any digital asset unalterable and transparent through the use of decentralization and cryptographic hashing.  "
},{
    id:"3",
    category: "Technology",
    name: "CyberSecurity",
    img: "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    about: "Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks and technologies.Security system complexity, created by disparate technologies and a lack of in-house expertise, can amplify these costs. But organizations with a comprehensive cybersecurity strategy, governed by best practices and automated using advanced analytics, artificial intelligence (AI) and machine learning."
},{
    id:"4",
    category: "Technology",
    name: "Data Science",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    about: "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains.Data scientists examine which questions need answering and where to find the related data.Data science refers to the process of extracting clean information to formulate actionable insights"
},{
    id:"5",
    category: "Technology",
    name: "Cryptography",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    about: "Cryptography is the study of secure communications techniques that allow only the sender and intended recipient of a message to view its contents. The term is derived from the Greek word kryptos, which means hidden.Cryptography, or cryptology is the practice and study of techniques for secure communication in the presence of adversarial behavior."
},{
    id:"6",
    category: "Tourism",
    name: "London",
    img: "https://media.istockphoto.com/photos/big-ben-in-sunny-day-london-picture-id526258817?b=1&k=20&m=526258817&s=170667a&w=0&h=pHAcb5jymEFklxYtG6-mErEkS_EOx2KIxOh4UWJA3aA=",
    about: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city. Noisy, vibrant and truly multicultural, London is a megalopolis of people, ideas and frenetic energy."
},{
    id:"7",
    category: "Tourism",
    name: "Paris",
    img: "https://media.istockphoto.com/photos/arc-de-triomphe-from-the-sky-paris-picture-id1324189687?b=1&k=20&m=1324189687&s=170667a&w=0&h=FfUeOeb0NB-sbrNCiu4zCmhsnqCK0nx40D-fY1UFMKM=",
    about: "Also known as the Latin Quarter, the 5th arrondissement is home to the Sorbonne university and student-filled cafes. It's also known for its bookshops, including the famed Shakespeare & Company. Family-friendly attractions include the Jardin des Plantes botanical gardens and the National Museum of Natural History. The stately Panthéon building holds the remains of notables like Voltaire and Marie Curie.A world-class business school, making an impact through an exclusive community of students, alumni, academics and global partners."
},{
    id:"8",
    category: "Tourism",
    name: "Delhi",
    img: "https://media.istockphoto.com/photos/the-india-gate-in-delhi-picture-id898467608?b=1&k=20&m=898467608&s=170667a&w=0&h=HlThQtBd6DV7ceWb25DBticSPDyKoCUnTfDy1vgQH0A=",
    about: "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls. "
},{
    id:"9",
    category: "Tourism",
    name: "Australia",
    img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXVzdHJhbGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    about: "Australia, officially the Commonwealth of Australia, is a sovereign transcontinental country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.Australia is the sixth-largest country by land area. Australia is bordered to the west by the Indian Ocean, and to the east by the South Pacific Ocean. "
},{
    id:"10",
    category: "Tourism",
    name: "California",
    img: "https://media.istockphoto.com/photos/bay-bridge-and-san-francisco-skyline-at-sunset-picture-id476881195?b=1&k=20&m=476881195&s=170667a&w=0&h=mEHJq7rrrlPYy4JmegDVGIBrQ8QW21IFmV0EdSQowPI=",
    about: "California, a western U.S. state, stretches from the Mexican border along the Pacific for nearly 900 miles. Its terrain includes cliff-lined beaches, redwood forest, the Sierra Nevada Mountains, Central Valley farmland and the Mojave Desert. The city of Los Angeles is the seat of the Hollywood entertainment industry. Hilly San Francisco is known for the Golden Gate Bridge, Alcatraz Island and cable cars."
},{
    id:"11",
    category: "Food",
    name: "Masala Dosa",
    img: "https://media.istockphoto.com/photos/plain-dosa-dish-picture-id1318571167?b=1&k=20&m=1318571167&s=170667a&w=0&h=y6-UzyZaDysAXmkUeA9TJyxgkGRxccygadwNS_26WZM=",
    about: "Masala dosa is a variation of the popular South Indian dosa, which has its origins in Tuluva Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar."
},{
    id:"12",
    category: "Food",
    name: "Pizza",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    about: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta."
},{
    id:"13",
    category: "Food",
    name: "Risoto",
    img: "https://media.istockphoto.com/photos/cheese-risotto-traditional-italian-recipe-picture-id1319617759?b=1&k=20&m=1319617759&s=170667a&w=0&h=1Sao2UdQ7LqrYp5Uuup4ESYgvZxzs529H17uhnlemDA=",
    about: "Risotto is a northern Italian rice dish cooked with broth until it reaches a creamy consistency. The broth can be derived from meat, fish, or vegetables. Many types of risotto contain butter, onion, white wine, and Parmigiano-Reggiano. It is one of the most common ways of cooking rice in Italy."
},{
    id:"14",
    category: "Food",
    name: "Paneer",
    img: "https://media.istockphoto.com/photos/green-peas-or-matar-paneer-curry-picture-id1325272041?b=1&k=20&m=1325272041&s=170667a&w=0&h=0bXXbN1Udw9siz-pPEDzYSZcY18_3G8D0dz1uosGkgY=",
    about: "Paneer, also known as ponir or Indian cottage cheese, is a fresh acid-set cheese common in the Indian subcontinent made from cow or buffalo milk. It is a non-aged, non-melting soft cheese made by curdling milk with a fruit- or vegetable-derived acid, such as lemon juice.Super rich in protein, having paneer for breakfast makes you feel full for longer. It gets digested slowly and increases the amount of feeling full hormones like GLP-1, PYY and CCK. Apart from protein, paneer is also rich in fat, iron, calcium and magnesium, which makes it an even healthier choice."
},{
    id:"15",
    category: "Food",
    name: "Gelato",
    img: "https://media.istockphoto.com/photos/chocolate-and-vanilla-ice-cream-still-life-picture-id946097922?b=1&k=20&m=946097922&s=170667a&w=0&h=2_zCbC1xPbHD0K80678SmF6ONtPxP6h-lRTsLOfU_pE=",
    about: "Gelato is a frozen dessert of Italian origin. Artisanal gelato in Italy generally contains 6-10% butterfat, which is lower than other styles of frozen dessert.Indulge guilt free with our 96% fat free & 100% vegetarian range of gelato (Italian ice cream), sorbet, yogurt & gelato cakes."
},{
    id:"16",
    category: "Fitness",
    name: "Stanford",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    about: "When Zahrt moved from London to the San Francisco Bay Area, she experienced a culture shock. In terms of her regular exercise routines in England, she had biked to work and had done some yoga and housework and had thought that was plenty. But in California, she noticed fitness studios on practically every corner and a focus on vigorous activities.Based on this experience, she developed the idea that no matter how active people actually are, they can hold the mindset that their physical activity level is adequate and healthy, or inadequate and unhealthy, and that these mindsets may have real consequences"
},{
    id:"17",
    category: "Fitness",
    name: "Khabib Numragodev",
    img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    about: "Upper body workouts consist of exercises that cater to the physical requirements of the arms, core, chest, back, and shoulders.Khabib Nurmaogomedov has displayed exceptional upper body strength whenever he has stepped inside the Octagon. The domination that he brings, along with his grappling, arises from impressive strength and skills. Let's break down the UFC Lightweight Champion's favorite upper body workouts"


},{
    id:"18",
    category: "Fitness",
    name: "Conor Mcgregor",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    about: "People are so caught in a routine, doing the same things over and over. I want to be an expert in different fighting styles, new training methods, new ways of thinking. Your muscles, are extremely adaptable and very quickly become used to the stimulus – that’s weights to you and I. Can’t lift any heavier? Not seeing big enough physical improvements"
},{
    id:"19",
    category: "Fitness",
    name: "Luka Donic",
    img: "https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    about: "Keep in mind, former number one overall pick Kwame Brown was ripped. Former Maverick and number two overall pick Michael Kidd-Gilchrist looks like he could compete in any Olympic sport he wanted. Neither have Luka’s skills.Westbrook is hardly out of shape. But it still takes him some time to start playing his best basketball. Maybe Luka is the same.Regardless, it just takes Luka a little while to get going. We all wish that he’d show up to start the season in amazing shape and demolish the league from start to finish."
},{
    id:"20",
    category: "Fitness",
    name: "CDC",
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    about: "Exercising regularly, every day if possible, is the single most important thing you can do for your health. In the short term, exercise helps to control appetite, boost mood, and improve sleep. In the long term, it reduces the risk of heart disease, stroke, diabetes, dementia, depression, and many cancers. At least 60 minutes of physical activity a day, most of which should be devoted to aerobic exercise. Children should do vigorous exercise and strength training, such as push-ups or gymnastics, on at least three days every week."
},

  ])
  return (
    <DataContext.Provider value={[data,setData]}>
        {props.children}
    </DataContext.Provider>
  )
}

export default DataState;