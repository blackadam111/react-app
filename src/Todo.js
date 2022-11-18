import React, {useState} from "react";

function Todo(){

    const[toDo, setToDo]=useState("");
    const[toDOs, setTodos]=useState([]);
    console.log(toDOs);

    const addTodo=()=>{
        if(toDo!==""){
          const obj = {
                id:Math.floor(Math.random()*1000) ,
                value:toDo,
                active:false,
            }
        
    setTodos([...toDOs,obj]);
        }
    
}
    return(
        <div className="todoapp">
            <div className="input">
                <input type="text" value={toDo} onChange={(event)=>setToDo(event.target.value)}/>
                <button onClick={addTodo}>add</button>
            </div>
            <div className="displayobj">
                {
                    toDOs.map((obj1, index)=>{
                       return <li>{obj1.value}</li>
                    })
                }
            </div>
        </div>
    )
}

export default Todo;

