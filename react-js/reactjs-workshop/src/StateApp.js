import Welcome from './Component/Welcome'
import React, {useState} from 'react'

function App() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
  return (
    <>
    < Welcome />
        <button onClick={decrement}> - </button>
        <span>{count}</span>
        <button onClick={increment}> +</button>
    </>
  )
}

export default App