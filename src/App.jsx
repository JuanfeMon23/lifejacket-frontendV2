import { useState } from 'react'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import './App.css'
import { Users } from './Users/pages/Users';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<h1>Home</h1>}/>
            <Route path='/Users' element={<Users/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
