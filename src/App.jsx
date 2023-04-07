import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import './index.css'
import Home from './routes/Home'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import Account from './routes/Account'
import axios from 'axios'
import CoinPage from './routes/CoinPage'
import Footer from './components/Footer'
import { AuthContextProvider } from './context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <ThemeProvider>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/coin/:coinId' element={<CoinPage/>}>
          <Route path=':coinId'/>
        </Route>
      </Routes>
      <Footer/>
      <ToastContainer />
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App