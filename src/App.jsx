import React from 'react'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bollywood from './Components/Bollywood';
import Technology from './Components/Technology';
import Hollywood from './Components/Hollywood';
import Fitness from './Components/Fitness';
import Food from './Components/Food';


const App = () => {
  return (
   <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/bollywood' element={<Bollywood />}/>
        <Route path='/technology' element={<Technology />}/>
        <Route path='/hollywood' element={<Hollywood />}/>
        <Route path='/Fitness' element={<Fitness />}/>
        <Route path='/food' element={<Food />}/>
      </Routes>
   </Router>
  )
}

export default App