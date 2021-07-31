import React, { Component } from 'react'

// export default class Lists extends Component {
//       render() {
//             const arr = [10,20,30,40];
//             const newArr = arr.map((num) =>{
//                   console.log("Num=", num);
//                   return <li>{num*2}</li>
//             })
//             console.log("oldArray = ",arr);
//             console.log("NewArray = ",newArr);
//             return (
//                   <ul>
//                         {newArr}
//                   </ul>
//             )
//       }
// }


// use the map() with 

// export default class Lists extends Component {
//       render() {
//             const arr = [10,20,30,40];
//             return (
//                   <ul>
//                         {arr.map(num => {
//                               return <li>{num}</li>
//                         })}
//                   </ul>
//             )
//       }
// }


// use the map() with props

// export default class Lists extends Component {
//       render() {
//             const arr = this.props.num;
//             return (
//                   <ul>
//                         {arr.map(num => {
//                               return <li>{num}</li>
//                         })}
//                   </ul>
//             )
//       }
// }



// use the map() with state

export default class Lists extends Component {
      state ={users:[
            {id:101,name:"Neeraj",password: "4543ffdf"},
            {id:102,name:"Suraj",password: "fhgjfdhgj"},
            {id:102,name:"Dheeraj",password: "kjfkldjf"},],
            isLoggedIn:false
            }

      render() {
            const newUsers= this.state.users.map(user => {
            console.log(user);
            return (
            <h1>
                  ID: {user.id} Name:{user.name} password: {user.password}
                   </h1>);
      });
      return <>
      {newUsers}
      </>

}
}
