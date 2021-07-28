
import React from "react";
import PropTypes from "prop-types";

// const Student = props =>{
//       return(
//             <>
//             <h1>Hello, {props.name}</h1>
//             <h1>Your Roll:{props.roll}</h1>
//             </>
//       )
// }


class Student extends React.Component{
      render()
      {
            return(
                  <><h1>Hello, {this.props.name}</h1>
                   <h1>Your Roll:{this.props.roll}</h1>
                  </>
            )
      }

}

Student.propTypes={
      name:PropTypes.string.isRequired
}
export default Student;