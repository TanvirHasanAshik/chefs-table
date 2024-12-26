import { useState } from 'react'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className=" w-full md:w-[1100px] mx-auto">
      <Header></Header>
      <Recipes></Recipes>
    </section>


  )
}

export default App
