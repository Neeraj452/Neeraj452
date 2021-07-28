import React from "react";
import "./JSX1.css";
// String Method
// const name="Neeraj Maurya"
// const El =()=>{
//       return<h1>Hello {name}</h1>
// } ;


// Math Expresion

// const El =()=>{
//       return<h1>Hello {10+30}</h1>
//  } ;

// Functon

// function show(name){
//       return name;
// }
//  const El =()=>{ return<h1>Hello {show("Neeraj Maurya")}</h1>
//   } ;


  // Object Property
  
// const user={
//         firstname:"Neeraj"
//   };
//   const El =()=>{
//          return<h1>Hello {user.firstname}</h1>
//            } ;

// Atribute in JSX
const user={
      firstname:"Neeraj"
};
const El =()=>{
       return<h1 className="bg">Hello {user.firstname}</h1>
         } ;

export default El;