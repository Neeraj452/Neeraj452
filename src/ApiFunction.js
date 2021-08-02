import React, {useState} from 'react';

const ApiFunction = () => {
    const [apidata, setApiData] = useState([]);

    const fetchData = () => {
        console.log('API Called.');
        fetch('https://api.nationalize.io/?name=nathaniel')
        .then((data) => {
              return data.json()
       }).then((json) => {
            console.log(json.country);
            setApiData(apidata => json.country);
        })
    }
      return (
            <>
                <h1>API Functional Component</h1>
                <button onClick={fetchData}>Fetch Data</button>
                <br /><br />
    
                {apidata && apidata.map((item, index) => (
                    <>
                        <span>{index}. </span>
                        <span>{item.probability}</span>
                        <br />
                    </>
                ))}
            </>
        );
}
export default ApiFunction;