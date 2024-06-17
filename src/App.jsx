import { useEffect } from 'react'
import './App.css'
import SideBar from './components/sidebar/sidebar'
import { Router ,BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <SideBar/>
        
      </BrowserRouter>
    </div>
  )
}

export default App
