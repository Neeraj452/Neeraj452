import React, { Component } from 'react'
import Guest from './Guest';
import Use from './Use';
//import Guest from './Guest';

// export default class Conditional_Rendering extends Component {
//       render() {
//             const isRagistered = this.props.consumer;
//             if(isRagistered){
//                   return <Use />
//             }
//             return <Guest />
//       }
// }

// export default class Conditional_Rendering extends Component {
//       render() {
//             const isRagistered = this.props.consumer;
          
//            return <>
//             <h1>WelCome User</h1>
//             {isRagistered && <Use />}</>
           
//       }
// }

// export default class Condition extends Component{
//       state = {
//             isLoggedIn:false
//       }
//       clickLogin = () =>
//       {
//             this.setState({isLoggedIn: true});
//       }

//       clickLogout = () =>
//       {
//             this.setState({isLoggedIn: false});
//       }
//       render()
//       {
//             const isLoggedIn = this.state.isLoggedIn;
//             if(isLoggedIn){
//                   return<Use clickData = {this.clickLogout}/>;
//             }
//             return<Guest clickData={this.clickLogin}/>
//       }
// } 


// export default class Condition extends Component{
//       state = {
//             isLoggedIn:false
//       }
//       clickLogin = () =>
//       {
//             this.setState({isLoggedIn: true});
//       }

//       clickLogout = () =>
//       {
//             this.setState({isLoggedIn: false});
//       }
//       render()
//       {
//             const isLoggedIn = this.state.isLoggedIn;
//             return(
//                   <>
//             {isLoggedIn ? (<Use clickData = {this.clickLogout}/>
//             ):
//             (<Guest clickData= {this.clickLogin}/>)
//              }
//               </>
//             )

//             }
// }




export default class Condition extends Component{
      state = {
            isLoggedIn:false
      }
      clickLogin = () =>
      {
            this.setState({isLoggedIn: true});
      }

      clickLogout = () =>
      {
            this.setState({isLoggedIn: false});
      }
      render()
      {
            const isLoggedIn = this.state.isLoggedIn;
            return(
                  <>
                  {
                        (
                              () =>{
                                    if(isLoggedIn){
                                          return<Use clickData = {this.clickLogout}/>
                                    }
                                    else{
                                          return <Guest clickData={this.clickLogin}/>
                                    }
                              }
                        )
                  }
           
                  </>
            )

            }
}
