import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextInput from './components/TextInput'
import ApiGet from './components/ApiGet'
import CardApi from './components/CardApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <TextInput/> */}
    {/* <ApiGet/> */}
    <CardApi/>
    </>
  )
}

export default App
