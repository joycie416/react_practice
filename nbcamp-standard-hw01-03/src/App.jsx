import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)
  const title = 'Counter App'
  const year = 2024;

  return (
    <>
      <Header title={title}/>
      <Content count={count} setCount={setCount}></Content>
      <Footer year={year}/>
    </>
  )
}

export default App
