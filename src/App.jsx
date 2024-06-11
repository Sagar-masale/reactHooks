import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 let [counter,setCounter]=useState(0);
  const addValue = () =>{ 
   if (counter <20) {
    counter=counter + 1
    setCounter(counter);
   }
   else{
    alert("Max reached")
   }
  }
  const removeValue = () =>{
    if (counter >0) {
      counter = counter-1;
      setCounter(counter)
    }
    else{
      alert("Value is 0")
    }
   // console.log("remove",counter);
  }

  return (
    <>
      <h1>Chai Aur React </h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
