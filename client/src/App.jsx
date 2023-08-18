import { useState } from 'react'
import './App.css'
import Index from '../components/Index'
import New from '../components/New'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Index />}/>
      <Route path='/new' element={<New />} />
    </Routes>
    
   </div>
  )
}

export default App
