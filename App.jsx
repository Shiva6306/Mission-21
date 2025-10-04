import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home.jsx'
import { Route, Routes } from 'react-router-dom'
import Themes1 from './pages/theme1.jsx'
import Themes2 from './pages/theme2.jsx'
import Themes3 from './pages/theme3.jsx'
import Themes4 from './pages/theme4.jsx'
import Categories from './pages/categories.jsx'
import UI from './pages/UserInput.jsx'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/themes/1' element={<Themes1/>}/>
          <Route path='/themes/2' element={<Themes2/>}/>
          <Route path='/themes/3' element={<Themes3/>}/>
          <Route path='/themes/4' element={<Themes4/>}/>
          <Route path='/userinput' element={<UI/>}/>
          
        </Routes>
      </div>
    </>
  )
}

export default App
