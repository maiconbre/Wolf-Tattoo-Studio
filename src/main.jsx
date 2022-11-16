import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './componentes/home'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Tatuadores } from './componentes/Home/Tatuadores'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<Home/>} />
        <Route path='/tatuadores' element ={<Tatuadores/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
