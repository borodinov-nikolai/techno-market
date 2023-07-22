import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SmartphonesPage from '../Pages/SmartphonesPage'
import SmartponesPocoPage from '../Pages/SmartponesPocoPage'
import SmartponesSamsungPage from '../Pages/SmartponesSamsungPage'
import SmartphonesXiaomiPage from '../Pages/SmartphonesXiaomiPage'
import SmartphonesApplePage from '../Pages/SmartphonesApplePage'
import SmartphonesHonorPage from '../Pages/SmartphonesHonorPage'
import TabPage from '../Pages/TabPage'



const DeviceRouter = () => {
  return (
    <div>
     
            <Routes>
                <Route path='/smartphones' element={<SmartphonesPage/>}/>
                <Route path='/poco' element={<SmartponesPocoPage/>}/>
                <Route path='/samsung' element={<SmartponesSamsungPage/>}/>
                <Route path='/xiaomi' element={<SmartphonesXiaomiPage/>}/>
                <Route path='/honor' element={<SmartphonesHonorPage/>}/>
                <Route path='/apple' element={<SmartphonesApplePage/>}/>
                <Route path='/tabs' element={<TabPage/>}/>

            
                
            </Routes>
        
    </div>
  )
}

export default DeviceRouter