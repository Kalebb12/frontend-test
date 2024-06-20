import { useEffect } from 'react'
import './App.css'
import SideBar from './components/sidebar/sidebar'
import { Routes,Route ,BrowserRouter} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Campaign from './pages/campaign/camapign'
import OverView from './pages/overview/overView'
import Edit from './pages/Edit/Edit'
import NewCampaign from './pages/new-campaign'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <SideBar/>
        <Navbar/>
        <Routes>
          <Route path='/React-Task/' element={<OverView/>}/>
          <Route path='/Campaign' element={<Campaign/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/newCampaign" element={<NewCampaign/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
