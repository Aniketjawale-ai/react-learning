import { useState } from "react";

export default function Counter(){
 let [count, setCount] = useState(0);//initiallization 

 
 
 let incCount = () =>{
    // setCount((currCount) =>{
    //     return currCount + 1;
    // });
    // setCount((currCount) =>{
    //     return currCount + 1;
    // });

    setCount(25);
   
    
 };

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount} >Increase count</button>
        </div>
    );
}