import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-green-400 h-fit w-full text-2xl '>App component</div>
      <div className='bg-yellow-400 text-2xl mt-1'> DApp building </div>
    </>
  )
}

export default App
