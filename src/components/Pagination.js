import React, {useState} from "react";
import '../components/Pagination.css'
function Pagination(props) {
    
    let numberOfPages = []

    for (let i = 1; i <= Math.ceil(props.menu.length / props.items); i++) {
        numberOfPages.push(i);
    }
    const nextHandler=(event)=>{
        props.setCurrPage(event.target.id)
    }
    let page = numberOfPages.map((item)=>{
        return <li className="pageButton" id={item} onClick={nextHandler}>{item}</li>
    })

    
    return (
        <ul className="pagination">{page}</ul>
    )
}

export default Pagination;