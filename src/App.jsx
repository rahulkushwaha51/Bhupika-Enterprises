import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CompanyProfile from './component/about/CompanyProfile'
import Leadership from './component/about/Leadership'

function App() {

  return (
    <>
      <Routes>
        <Route path='/profile' element={<CompanyProfile />} />
        <Route path='/leadership' element={<Leadership />} />
      </Routes>
    </>
  )
}

export default App
