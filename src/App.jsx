import { useEffect } from 'react'
import './App.css'
import SideBar from './components/sidebar/sidebar'
import { Router ,BrowserRouter} from 'react-router-dom'
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <SideBar/>
        <Navbar/>
      </BrowserRouter>
    </div>
  )
}

export default App
