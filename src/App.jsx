import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import { InputTwoTone } from '@mui/icons-material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1 className='todo-title'>Todo App</h1>
        <Input />
      </div>
    </>
  )
}

export default App
