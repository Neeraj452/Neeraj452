import React from 'react';
import Student from "./Composing_Component";
const App=()=>{
      return (
            <div>
                  <Student name="neeraj" />
                  <Student name="suraj"/>
                  <Student name="Dheeraj"/>
            </div>
      )
}
export default App;