import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

  return (
    <div className='container mx-auto px-8'>
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      </div>
  )
}

export default App
