import React, { Component } from 'react'

// We can Not Pass Argument directly to fuction, Solution below
// Pass the argument by make another Arrow Function

// class Student extends Component{
//       state = {
//             id:1,
//             name:"Neeraj"
//       }
     
      
//       handleClick = (id,e,j)=>
//       {
//             console.log(id);
//             console.log(e);
//             console.log(j);
//       }

//       handleClickArgu = (e) => {
//             this.handleClick(this.state.id,e,101);

//       }
//       render()
//       {
//             return(
//                   <>
//                   <h1>Hello Event {this.state.name } your roll Nimber {this.state.roll} </h1>
//                   <button onClick = {this.handleClickArgu}> Click Me</button>
//                   </>
//             )
//       }
// }
// export default Student;



// Pass the argument direct anonymas Arrow Function

// class Student extends Component{
//       state = {
//             id:1,
//             name:"Neeraj"
//       }
     
      
//       handleClick = (id,e,j)=>
//       {
//             console.log(id);
//             console.log(j);
//             console.log(e);
            
//       }

      
//       render()
//       {
//             return(
//                   <>
//                   <h1>Hello Event {this.state.name } your roll Nimber {this.state.roll} </h1>
//                   <button onClick = {e => {this.handleClick(this.state.id,e,101); }}> Click Me</button>
//                   </>
//             )
//       }
// }
// export default Student;



// Passing the Argument by bind method

class Student extends Component{
      state = {
            id:1,
            name:"Neeraj"
      }
     
      
      handleClick = (id,e,j)=>
      {
            console.log(id);
            console.log(e);
            console.log(j);   
      }
      render()
      {
            return(
                  <>
                  <h1>Hello Event {this.state.name } your roll Nimber {this.state.roll} </h1>
                  <button onClick ={this.handleClick.bind(this,this.state.id,101)}> Click Me</button>
                  </>
            )
      }
}
export default Student;


