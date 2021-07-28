import React, {Component} from "react";

// const Student =(props) => {
//       return <h1>Hello {props.name} Component</h1>;
// }
// export default Student;


class Student extends Component{
      render()
      {
            return <h1>Hello Class Component Of {this.probs.name}</h1>;
      }
}
export default Student;