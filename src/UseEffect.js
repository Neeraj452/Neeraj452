 import React, {useState, useEffect} from 'react';
 const UseEffect =() => {
       const[count, setCount] = useState(0);
       const[count1, downCount] = useState(50);

       const handleIncrement = () =>{
             setCount(count+1)
       };

       const handleDecrese = () =>{
            downCount(count1-1)
      };

       useEffect(() => {
            console.log("use Effect Called");
       },[count]);
 return(
       <>
       <h1>Count Up: {count} </h1>
       <button type="button" onClick={handleIncrement}>Increment</button>

       <h1>Count down: {count1} </h1>
       <button type="button" onClick={handleDecrese}>Increment</button>
       
       </>
 )

 }
 export default UseEffect;

      
