import { useState } from "react"

export default function Ludobord(){

    let [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yello: 0}); 
    let [arr, SetArr] = useState(["no moves"]);


    let upadateBlue =()=>{
        
       
        // setMoves((prevMoves) =>{
        //     return { ...prevMoves, blue: prevMoves.blue + 1};
        // });

       
        SetArr((prevArr)=> {
            return [...prevArr, "blue moves"];
        });
        console.log(arr);
    };

    let upadateYellow =()=>{
        
        console.log(`moves.yellow = ${moves.yello}`);
        setMoves((prevMoves) =>{
            return { ...prevMoves, yello: prevMoves.yello + 1};
        });
    };


    let upadateRed =()=>{
        
        console.log(`moves.red = ${moves.red}`);
        setMoves((prevMoves) =>{
            return { ...prevMoves, red: prevMoves.red + 1};
        });
    };

    let upadateGreen =()=>{
        
        console.log(`moves.green = ${moves.green}`);
        setMoves((prevMoves) =>{
            return { ...prevMoves, green: prevMoves.green + 1};
        });
    };
    return(
        <div>
           
            <p>Game begins!</p>
            <p>{arr}</p>
           <div className="board">
            <p>Blue moves = {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={upadateBlue}>+1</button>

            <p>Yello moves = {moves.yello}</p>
            <button style={{backgroundColor:"yellow"}}onClick={upadateYellow}>+1</button>


            <p>Green moves = {moves.green}</p>
            <button style={{backgroundColor:"green"}}onClick={upadateGreen}>+1</button>


            <p>Red move ={moves.red}</p>
            <button style={{backgroundColor:"red"}}onClick={upadateRed}>+1</button>


           
           </div>
        </div>
    )
}