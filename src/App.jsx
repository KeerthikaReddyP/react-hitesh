
import { useState } from 'react';

function App() {
  const [counter,setCounter]=useState(12);

  const handleAdd=()=>{
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
  }

  return (
    <>
    {console.log("Rendered")}
      <h1>Counter: {counter}</h1>
      <h2>body {counter}</h2>
      <button onClick={handleAdd}>Add</button>
      <button>Remove</button>
      <p>footer:  {counter}</p>
    </>
  )
}

export default App
