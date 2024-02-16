import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CompanyProfile from './component/about/CompanyProfile'
import Leadership from './component/about/Leadership'
import WorkForce from './component/services/workforce/WorkForce'
import Security from './component/services/security/Security'

function App() {

  return (
    <>
      <Routes>
        <Route path='/profile' element={<CompanyProfile />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/workforce' element={<WorkForce />} />
        <Route path='/security' element={<Security />} />
      </Routes>
    </>
  )
}

export default App
