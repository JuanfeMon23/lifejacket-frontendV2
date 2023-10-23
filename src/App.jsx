import { useState } from 'react'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import { Users } from './Users/pages/Users';
import { Clients } from './Clients/pages/Clients';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<h1>Home</h1>}/>
            <Route path='/Users' element={<Users/>}/>
            <Route path='/Clients' element={<Clients/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
