import useCustomCount from './Custom_Hook'

function App(){
      const data = useCustomCount();
      const data1 = useCustomCount();

      return(
            <>
            <h1>Count Up: {data.count} </h1>
            <button type="button" onClick={data.handleIncrement}>Increment</button>

            <h1>Count1 Up: {data1.count} </h1>
            <button type="button" onClick={data1.handleIncrement}>Increment</button>
            </>
      )
}
export default App;