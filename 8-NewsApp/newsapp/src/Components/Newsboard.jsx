import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

function Newsboard(){
    const [article,setarticles]=useState([])
    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=cc0f4dfd0458461f9f71b56c798ddb99")
        .then(response=>response.json())
        .then(data=>setarticles(data.articles))
    },[])
    return(
        <div>
            <h1 className="text-center">Latest <span className="badge bg-danger">News</span></h1>
            {article.map((news,index)=>{
                return <Newsitem key={index} title={news.title} description={news.description} 
                src={news.urlToImage} url={news.url}></Newsitem>
            })}
        </div>
    );
}

export default Newsboard;