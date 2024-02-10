import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App"
// import Layout from './Layout.jsx'
// import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Contact from './components/Contact.jsx'
// import Portfolio from './components/Portfolio.jsx'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Project from './components/Project.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='#' element={<Home />} />
//       <Route path='about' element={<About/>} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='portfolio' element={<Portfolio />} />
//       <Route path='project' element={<Project />} />
//     </Route>
//   )
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
