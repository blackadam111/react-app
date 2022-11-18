import React, {useState} from "react";

function Counter(){

  const[value, setValue] = useState(0);
  const[color, setColor] = useState("white");
  return(

    <div className="counter">
      <div className="counterItem" style={{background: color}}>
        <button onClick={()=>{setValue((value)=>{
          return value+1
        })}}>increment</button>
        <label>{value}</label>
        <button onClick={()=>{setValue((value)=>{return value-1})}}>decrement</button>
        <button onClick={()=>setColor("green")}>green</button>
        <button onClick={()=>setColor("blue")}>blue</button>
      </div>
    </div>
  )
}

export default Counter;