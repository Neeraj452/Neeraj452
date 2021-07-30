import React, {useState}  from 'react';
//  const App = ()=>
// {
//       const nameStateVariable = useState("Neeraj")
//       const handleClick = () =>
//       {
//             nameStateVariable[1]("Geekyshow");
//       }
//       return(
//       <>
//         <h1>{nameStateVariable[0]}</h1>
//         <button type="button" onClick={handleClick}>Change</button>
//       </>);
// }
// export default App;


// Array Destracture

const App = ()=>
{
      const [name, setName] = useState("Neeraj");
      const [roll,setRoll] = useState("101")
      const handleClick = () =>
      {
            setName("Neeraj Maurya");
            setRoll("121");
      }
      return(
      <>
        <h1>{name}</h1>
        <h1>{roll}</h1>
        <button type="button" onClick={handleClick}>Change</button>
      </>);
}
export default App;


