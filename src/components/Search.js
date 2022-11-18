import React, { useState } from "react";
import '../components/Search.css'
function Search(props) {
    let[search, setSearch] = useState()
    let[result, setResult] = useState([])
    console.log(search)
    let searchClick=()=>{
        let newValue=props.menu.filter((searchItem)=>{
            console.log(searchItem.title)
            return searchItem.title.toLowerCase()===search.toLowerCase()
        }).map((searchItem)=>{
            return<div>
                <img src={searchItem.image} alt=""/>
                <h5>{searchItem.title}</h5>
            </div> 
        })
        setResult(newValue)
    }
    return(
        <div>
            <input type="text" name="name" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button onClick={searchClick}>Search</button>
            <div className="items">{result}</div>
        </div>
    )
}

export default Search;