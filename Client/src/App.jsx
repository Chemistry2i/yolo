import { useState } from "react"

function App() {

  const [count, setCount] = useState(0);

  const decrement = () =>{
    setCount(count - 1);
  }

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={decrement}>-</button>
      <button>0</button>
      <button >+</button>
    </>
  )
}

export default App
