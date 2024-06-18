import { useEffect } from 'react'
import './App.css'
import SideBar from './components/sidebar/sidebar'
import { Routes,Route ,BrowserRouter} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Campaign from './pages/campaign/camapign'
import OverView from './pages/overview/overView'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <SideBar/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<OverView/>}/>
          <Route path='/Campaign' element={<Campaign/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
