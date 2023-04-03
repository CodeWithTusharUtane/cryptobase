import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import './index.css'

const App = () => {
  return (
    <ThemeProvider>
      <Navbar/>
    </ThemeProvider>
  )
}

export default App