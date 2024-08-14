import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const title = 'My Website'
  const year = 2024

  return (
    <div>
      <Header title={title}></Header>
      <Content></Content>
      <Footer year={year}></Footer>
    </div>
  );
}

export default App
