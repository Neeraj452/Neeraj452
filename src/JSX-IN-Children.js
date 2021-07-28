import React from "react";

// const Student = props =>{
//       return <h1>Hello Rahul {props.children}</h1>;
// };

class Student extends React.Component{
      render()
      {
            return <h1>Hello Rahul {this.props.children}</h1>;
      }
}
export default Student;