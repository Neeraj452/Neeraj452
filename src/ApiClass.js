import React, { Component } from 'react'
export default class ApiClass extends Component {
            constructor()
            {
                  super();
                  this.state = {
                        apidata:[],
            }
      }
//             this come to change
      callApi = () =>{
                  console.log('API Called');
            fetch('https://api.nationalize.io/?name=nathaniel').then((data)=>{
                        return data.json();
            }).then((json) =>{
                        console.log(json.country);
                  this.setState({
                              apidata:json.country
                  })
            })
      }
      render() {
                  return (
                        <div>
                         <button onClick={this.callApi}>Fetch Data</button>
                      <h1>API Data List</h1>
                      {this.state.apidata && this.state.apidata.map((item, index) => (
                    <>
                  <span>{index}. </span>
                  <span>{item.country_id}</span>
                  <br />
              </>
          ))}
                </div>
          )
    }

}
