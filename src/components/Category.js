import React, {useState} from "react";
import '../components/category.css'
function Category(props) {
    
    let category = props.categories
    let menu = props.menu
    let[filteredDish, setFiltered] = useState([])
    let showList=(items)=>{
        console.log(items)
        let list= menu.filter((items1)=>{
            return items1.category===items
        }).map((items1)=>{
            console.log(items1)
            return (
                
             <div className="imgBox">
                 <img src={items1.image} alt=""/>
                 <div>{items1.title}</div>
             </div>  
                
                    
                    
            )
        })

        setFiltered(list)
    }
    let result = category.map((items)=>{
        return <li onClick={()=>showList(items)}>{items}</li>
    })
    return(
        <div className="listShow">
            <ul>{result}</ul>
            <div className="imgContainer">{filteredDish}</div>
        </div>
        
    )
}
export default Category;