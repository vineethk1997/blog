import React,{useState} from "react";
import DataContext from "./DataContext";


const DataState=(props)=> {
  const[data, setData] = useState([
{
    id:"1",
    category: "Technology",
    name: "Artificial intelligence",
    img: "https://imageio.forbes.com/specials-images/imageserve/5ef3f7eec4f2390006f0c356/GUI--Graphical-User-Interface--concept-/960x0.jpg?fit=bounds&format=jpg&width=960",
    about: "Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.Less than a decade after breaking the Nazi encryption machine Enigma and helping the Allied Forces win World War II, mathematician Alan Turing changed history a second time with a simple question.At its core, AI is the branch of computer science that aims to answer Turing's question in the affirmative. It is the endeavor to replicate or simulate human intelligence in machines."
},{
    id:"2",
    category: "Technology",
    name: "Blockchain",
    img: "C:\Users\vijwo\OneDrive\Desktop\blog\img\tech\block.jpg.jpg",
    about: "Blockchain technology is most simply defined as a decentralized, distributed ledger that records the provenance of a digital asset. By inherent design, the data on a blockchain is unable to be modified, which makes it a legitimate disruptor for industries like payments, cybersecurity and healthcare. Our guide will walk you through what it is, how it's used and its history.Blockchain, sometimes referred to as Distributed Ledger Technology (DLT), makes the history of any digital asset unalterable and transparent through the use of decentralization and cryptographic hashing.  "
},{
    id:"3",
    category: "Technology",
    name: "CyberSecurity",
    img: "https://www.datacenterknowledge.com/sites/datacenterknowledge.com/files/cybersecurity%20security%20infosec%20art%20getty.jpg",
    about: "Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks and technologies.Security system complexity, created by disparate technologies and a lack of in-house expertise, can amplify these costs. But organizations with a comprehensive cybersecurity strategy, governed by best practices and automated using advanced analytics, artificial intelligence (AI) and machine learning, can fight cyberthreats more effectively and reduce the lifecycle and impact of breaches when they occur."
},{
    id:"4",
    category: "Technology",
    name: "Data Science",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.simplilearn.com%2Fice9%2Ffree_resources_article_thumb%2FData-Science-vs.-Big-Data-vs.jpg&imgrefurl=https%3A%2F%2Fwww.simplilearn.com%2Fdata-science-vs-big-data-vs-data-analytics-article&tbnid=1-h23MKAEkNw9M&vet=12ahUKEwiytZrXoMX2AhVKR2wGHei6DaoQMygFegUIARDfAQ..i&docid=HoljWg-1z5W88M&w=848&h=477&q=Data%20science&ved=2ahUKEwiytZrXoMX2AhVKR2wGHei6DaoQMygFegUIARDfAQ",
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
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.simplilearn.com%2Fice9%2Ffree_resources_article_thumb%2FData-Science-vs.-Big-Data-vs.jpg&imgrefurl=https%3A%2F%2Fwww.simplilearn.com%2Fdata-science-vs-big-data-vs-data-analytics-article&tbnid=1-h23MKAEkNw9M&vet=12ahUKEwiytZrXoMX2AhVKR2wGHei6DaoQMygFegUIARDfAQ..i&docid=HoljWg-1z5W88M&w=848&h=477&q=Data%20science&ved=2ahUKEwiytZrXoMX2AhVKR2wGHei6DaoQMygFegUIARDfAQ",
    about: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city. Noisy, vibrant and truly multicultural, London is a megalopolis of people, ideas and frenetic energy."
},{
    id:"7",
    category: "Tourism",
    name: "Paris",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.toiimg.com%2Fthumb%2F53336957.cms%3Fresizemode%3D75%26width%3D1200%26height%3D900&imgrefurl=https%3A%2F%2Ftimesofindia.indiatimes.com%2Ftravel%2Fthings-to-do%2F21-things-to-do-in-paris%2Fas53336804.cms&tbnid=ryJGxiKHwpcI9M&vet=12ahUKEwjDp_SzocX2AhWPUWwGHTjpB9YQMygCegUIARDZAQ..i&docid=ByxE2p93LivzqM&w=1200&h=898&q=paris&ved=2ahUKEwjDp_SzocX2AhWPUWwGHTjpB9YQMygCegUIARDZAQ",
    about: "Also known as the Latin Quarter, the 5th arrondissement is home to the Sorbonne university and student-filled cafes. It's also known for its bookshops, including the famed Shakespeare & Company. Family-friendly attractions include the Jardin des Plantes botanical gardens and the National Museum of Natural History. The stately Panthéon building holds the remains of notables like Voltaire and Marie Curie.A world-class business school, making an impact through an exclusive community of students, alumni, academics and global partners."
},{
    id:"8",
    category: "Tourism",
    name: "Delhi",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F62%2F156662-050-5D93F2F9%2FIndia-War-Memorial-arch-New-Delhi.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fplace%2FDelhi%2FCity-layout&tbnid=XWPQqqYBol6IlM&vet=12ahUKEwjp0bzhocX2AhUghNgFHbBpBjgQMygCegUIARDbAQ..i&docid=BaioZiFxv3MyzM&w=1200&h=1600&q=delhi&ved=2ahUKEwjp0bzhocX2AhUghNgFHbBpBjgQMygCegUIARDbAQ",
    about: "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls. "
},{
    id:"9",
    category: "Tourism",
    name: "Australia",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.planetware.com%2Fphotos-large%2FAUS%2Faustralia-beautiful-places-sydney-harbour.jpg&imgrefurl=https%3A%2F%2Fwww.planetware.com%2Fpictures%2Faustralia-aus.htm&tbnid=hYsHKxyNXnjBVM&vet=12ahUKEwjN3MP2ocX2AhXQgGMGHaY_CR4QMygGegUIARDhAQ..i&docid=IRvTKHWZwbBHGM&w=730&h=454&q=australia&ved=2ahUKEwjN3MP2ocX2AhXQgGMGHaY_CR4QMygGegUIARDhAQ",
    about: "Australia, officially the Commonwealth of Australia, is a sovereign transcontinental country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.Australia is the sixth-largest country by land area. Australia is bordered to the west by the Indian Ocean, and to the east by the South Pacific Ocean. "
},{
    id:"10",
    category: "Tourism",
    name: "California",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.visitcalifornia.com%2Fsites%2Fvisitcalifornia.com%2Ffiles%2Fstyles%2Fwelcome_image%2Fpublic%2Fvc_homepage_sd_balboapark_1280x640_5.jpg&imgrefurl=https%3A%2F%2Fwww.visitcalifornia.com%2Fin&tbnid=BS35CpvcIJRGbM&vet=12ahUKEwimxoa0osX2AhVAkNgFHd3YANAQMygEegUIARDgAQ..i&docid=y66U3SN5OdVE3M&w=1280&h=640&q=california&ved=2ahUKEwimxoa0osX2AhVAkNgFHd3YANAQMygEegUIARDgAQ",
    about: "California, a western U.S. state, stretches from the Mexican border along the Pacific for nearly 900 miles. Its terrain includes cliff-lined beaches, redwood forest, the Sierra Nevada Mountains, Central Valley farmland and the Mojave Desert. The city of Los Angeles is the seat of the Hollywood entertainment industry. Hilly San Francisco is known for the Golden Gate Bridge, Alcatraz Island and cable cars."
},{
    id:"11",
    category: "Food",
    name: "Masala Dosa",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhebbarskitchen.com%2Fwp-content%2Fuploads%2F2020%2F07%2Fmasala-dosa-recipe-crispy-masale-dose-how-to-make-masala-dosa-1-scaled.jpeg&imgrefurl=https%3A%2F%2Fhebbarskitchen.com%2Fkn%2Fmasala-dosa-recipe-crispy-masale-dose%2F&tbnid=ep6vb3cABzqkyM&vet=12ahUKEwi185fJosX2AhUaitgFHRvtD5AQMygDegUIARCFAg..i&docid=jB07lCJv4lB2tM&w=2560&h=1706&q=masala%20dosa&ved=2ahUKEwi185fJosX2AhUaitgFHRvtD5AQMygDegUIARCFAg",
    about: "Masala dosa is a variation of the popular South Indian dosa, which has its origins in Tuluva Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar."
},{
    id:"12",
    category: "Food",
    name: "Pizza",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.toiimg.com%2Fthumb%2F53110049.cms%3Fwidth%3D1200%26height%3D900&imgrefurl=https%3A%2F%2Frecipes.timesofindia.com%2Frecipes%2Fcheese-pizza%2Frs53110049.cms&tbnid=IEfM_7QrpfT8ZM&vet=12ahUKEwj41ZX7osX2AhXYXGwGHQ4dA0oQMygBegUIARDsAQ..i&docid=WYOf39ozq1-2MM&w=1200&h=900&q=pizza&ved=2ahUKEwj41ZX7osX2AhXYXGwGHQ4dA0oQMygBegUIARDsAQ",
    about: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta."
},{
    id:"13",
    category: "Food",
    name: "Risoto",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F40%2FItalian_Risotto.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRisotto&tbnid=wnJ8IT5Nuqw7sM&vet=12ahUKEwjp1uKho8X2AhXMj9gFHWdSB7UQMygBegUIARCGAg..i&docid=3o9nFcubyUq6SM&w=450&h=338&q=risotto&ved=2ahUKEwjp1uKho8X2AhXMj9gFHWdSB7UQMygBegUIARCGAg",
    about: "Risotto is a northern Italian rice dish cooked with broth until it reaches a creamy consistency. The broth can be derived from meat, fish, or vegetables. Many types of risotto contain butter, onion, white wine, and Parmigiano-Reggiano. It is one of the most common ways of cooking rice in Italy."
},{
    id:"14",
    category: "Food",
    name: "Paneer",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.indianhealthyrecipes.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fpaneer-lababdar-recipe-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.indianhealthyrecipes.com%2Fpaneer-lababdar-recipe%2F&tbnid=42ISeNY9M3wVWM&vet=12ahUKEwizrbiMucf2AhWkpukKHV_RCXwQMygBegUIARDtAQ..i&docid=FZrImyOcOVzGwM&w=500&h=500&q=paneer%20lababdar&ved=2ahUKEwizrbiMucf2AhWkpukKHV_RCXwQMygBegUIARDtAQ",
    about: "Paneer, also known as ponir or Indian cottage cheese, is a fresh acid-set cheese common in the Indian subcontinent made from cow or buffalo milk. It is a non-aged, non-melting soft cheese made by curdling milk with a fruit- or vegetable-derived acid, such as lemon juice.Super rich in protein, having paneer for breakfast makes you feel full for longer. It gets digested slowly and increases the amount of feeling full hormones like GLP-1, PYY and CCK. Apart from protein, paneer is also rich in fat, iron, calcium and magnesium, which makes it an even healthier choice."
},{
    id:"15",
    category: "Food",
    name: "Gelato",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.eatthis.com%2Fwp-content%2Fuploads%2Fsites%2F4%2F2019%2F01%2Fhealthy-chicken-parmesan.jpg%3Fquality%3D82%26strip%3Dall&imgrefurl=https%3A%2F%2Fwww.eatthis.com%2Fhealthy-italian-recipes%2F&tbnid=nJSQ8KP4Q8vtVM&vet=12ahUKEwi8lcW1o8X2AhU1yKACHS24DQ8QMygDegUIARDiAQ..i&docid=fmrL0QSL6HxYTM&w=1200&h=879&q=italian%20dishes&ved=2ahUKEwi8lcW1o8X2AhU1yKACHS24DQ8QMygDegUIARDiAQ",
    about: "Gelato is a frozen dessert of Italian origin. Artisanal gelato in Italy generally contains 6-10% butterfat, which is lower than other styles of frozen dessert.Indulge guilt free with our 96% fat free & 100% vegetarian range of gelato (Italian ice cream), sorbet, yogurt & gelato cakes."
},{
    id:"16",
    category: "Fitness",
    name: "Stanford",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Finstafitness.in%2Fwp-content%2Fuploads%2F2019%2F06%2FFitness-is-30-workout-70-Diet.jpg&imgrefurl=https%3A%2F%2Finstafitness.in%2Ffitness-is-70-diet-30-workout%2F&tbnid=blNh9V-d9YmksM&vet=12ahUKEwi0mbT9o8X2AhWayKACHaVAD5IQMygWegUIARCFAg..i&docid=O3SM3ZGAJp0BtM&w=768&h=384&q=fitness%20images&ved=2ahUKEwi0mbT9o8X2AhWayKACHaVAD5IQMygWegUIARCFAg",
    about: "When Zahrt moved from London to the San Francisco Bay Area, she experienced a culture shock. In terms of her regular exercise routines in England, she had biked to work and had done some yoga and housework and had thought that was plenty. But in California, she noticed fitness studios on practically every corner and a focus on vigorous activities.Based on this experience, she developed the idea that no matter how active people actually are, they can hold the mindset that their physical activity level is adequate and healthy, or inadequate and unhealthy, and that these mindsets may have real consequences"
},{
    id:"17",
    category: "Fitness",
    name: "Khabib Numragodev",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fnationaltoday.com%2Fwp-content%2Fuploads%2F2021%2F04%2FFitness-Day-.jpg&imgrefurl=https%3A%2F%2Fnationaltoday.com%2Fnational-fitness-day%2F&tbnid=YWSXDviKeQl26M&vet=12ahUKEwi0mbT9o8X2AhWayKACHaVAD5IQMygMegUIARDwAQ..i&docid=xARv-sz9kbT3tM&w=800&h=800&q=fitness%20images&ved=2ahUKEwi0mbT9o8X2AhWayKACHaVAD5IQMygMegUIARDwAQ",
    about: "Upper body workouts consist of exercises that cater to the physical requirements of the arms, core, chest, back, and shoulders.Khabib Nurmaogomedov has displayed exceptional upper body strength whenever he has stepped inside the Octagon. The domination that he brings, along with his grappling, arises from impressive strength and skills. Let's break down the UFC Lightweight Champion's favorite upper body workouts"


},{
    id:"18",
    category: "Fitness",
    name: "Conor Mcgregor",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F08%2F07%2F14%2F02%2Fman-2604149__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Ffitness%2F&tbnid=B0ukUvLoyTuZyM&vet=12ahUKEwi0mbT9o8X2AhWayKACHaVAD5IQMygHegUIARDlAQ..i&docid=_7PP9dM1gc1jvM&w=853&h=480&q=fitness%20images&ved=2ahUKEwi0mbT9o8X2AhWayKACHaVAD5IQMygHegUIARDlAQ",
    about: "People are so caught in a routine, doing the same things over and over. I want to be an expert in different fighting styles, new training methods, new ways of thinking. Your muscles, are extremely adaptable and very quickly become used to the stimulus – that’s weights to you and I. Can’t lift any heavier? Not seeing big enough physical improvements"
},{
    id:"19",
    category: "Fitness",
    name: "Luka Donic",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FKLZwUWe4JwyyXY7pV7CpaU.jpg&imgrefurl=https%3A%2F%2Fwww.tomsguide.com%2Fbest-picks%2Fbest-workout-apps&tbnid=-mDDzmqAfS0vAM&vet=12ahUKEwi0mbT9o8X2AhWayKACHaVAD5IQMygBegUIARDZAQ..i&docid=eFeaClxlWuHl2M&w=2121&h=1193&q=fitness%20images&ved=2ahUKEwi0mbT9o8X2AhWayKACHaVAD5IQMygBegUIARDZAQ",
    about: "Keep in mind, former number one overall pick Kwame Brown was ripped. Former Maverick and number two overall pick Michael Kidd-Gilchrist looks like he could compete in any Olympic sport he wanted. Neither have Luka’s skills.Westbrook is hardly out of shape. But it still takes him some time to start playing his best basketball. Maybe Luka is the same.Regardless, it just takes Luka a little while to get going. We all wish that he’d show up to start the season in amazing shape and demolish the league from start to finish."
},{
    id:"20",
    category: "Fitness",
    name: "CDC",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fst2.depositphotos.com%2F4366957%2F6625%2Fi%2F600%2Fdepositphotos_66253287-stock-photo-muscular-bodybuilder-guy-close-up.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fstock-photos%2Ffitness.html&tbnid=qjBoL-T3Pc4aJM&vet=12ahUKEwi0mbT9o8X2AhWayKACHaVAD5IQMygCegUIARDbAQ..i&docid=DT06nRbgbbhN-M&w=600&h=400&q=fitness%20images&ved=2ahUKEwi0mbT9o8X2AhWayKACHaVAD5IQMygCegUIARDbAQ",
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