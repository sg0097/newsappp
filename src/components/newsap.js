
import Card from './card'; // Adjust the path as needed
import React, { useState, useEffect } from 'react'; 


const Newsap = () => {  // Capitalize component name
    const [search, setSearch] = useState("india")
    const [newsData,setNewsData] = useState([])

    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apikey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles)

    }
    useEffect(()=>{
        getData()
    },[])

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)

    }
    const userInput = (event) =>{
        setSearch(event.target.value)
    }
  return (
    <div>
        <nav>
            <div>
                <h1>Trendy news</h1>
            </div>
            <ul>
                <a>All news</a>
                <a>Trending</a>
            </ul>
            <div className='searchBar'>
                <input type='text'placeholder='Seach News' value={search} onChange={handleInput}/>
                <button onClick={getData}>search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Stay update with trndy news</p>
        </div>

        <div className ='categorybtn'>
            <button onClick={userInput} value="sports">sports</button>
            <button onClick={userInput} value="politics">politics</button>
            <button onClick={userInput} value="entertainment">entertainment</button>
            <button onClick={userInput} value="health">health</button>
            <button onClick={userInput} value="fitness">fitness</button>
            
        </div>
        <div>
           {newsData? <Card data={newsData}/> : null}
        </div>
    </div>
  );
}

export default Newsap;


