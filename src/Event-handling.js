import React, { Component } from 'react'
 
//Class Component Example if you are arrow function then yu can easly access the this keyword inside the arrow function

// class Student extends Component{
//       handleClick=() =>
//       {
//             console.log("Hello React Event",this)
//       }
//       render()
//       {
//             return(
//                   <>
//                   <h1>Hello Event</h1>
//                   <button onClick = {this.handleClick}> Click Me</button>
//                   </>
//             )
//       }
// }

// In Class Component we can not use this keyword in normal function
// if you want handle this keyword in normal function then use Cnstructor and bind the function

// class Student extends Component{
//       constructor(props){
//             super(props);
//             this.state={
//                   name: "Neeraj",
//                   roll: this.props.roll
//             };
//              this.handleClick= this.handleClick.bind(this);
//       }
//       handleClick()
//       {
//             console.log("Hello React Event",this)
//       }
//       render()
//       {
//             return(
//                   <>
//                   <h1>Hello Event {this.props.name } your roll Nimber {this.props.roll} </h1>
//                   <button onClick = {this.handleClick}> Click Me</button>
//                   </>
//             )
//       }
// }
// export default Student;



// Example of Function Component

// use Normal Function not need to this keyword becouse its a function not class 

// function Student(){
//       function handleClick()
//       {
//             console.log("Button Clicked");
//       }
//       return(
//             <>
//             <h1>
//                   Hello Hender
//             </h1>
//             <button onClick={handleClick}>Click Me</button>
//             </>
//       )
//       }
//       export default Student;


// // Use of Arrow Function 

//  const Student =()=> {
//       const handleClick = () =>
//       {
//             console.log("Button Clicked");
//       }
//       return(
//             <>
//             <h1>
//                   Hello Hender
//             </h1>
//             <button onClick={handleClick}>Click Me</button>
//             </>
//       )
//       }
//       export default Student;


// default event prevent 


// Use of Arrow Function 

const Student =()=> {
      const handleClick = (e) =>
      {
            e.preventDefault();
            console.log("Button Clicked");
      }
      return(
            <>
            <h1>
                  Hello Hender
            </h1>
            <a href="http:/www.geekyshow.com" onClick={handleClick}>Click Me</a>

            </>
      )
      }
      export default Student;
