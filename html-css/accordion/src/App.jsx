import { useState } from 'react'
import Questions from './layouts/Questions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Questions />
    </>
  )
}

export default App
