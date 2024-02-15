import React from 'react'
import './Footer.css'
import img from '../../assets/logo.svg'
const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <img src={img} alt="image" />
        <div className='business'>
          <h1>Company Business</h1>
          <ul>
            <li>Construction</li>
            <li>Electrical Product</li>
            <li>Property Management</li>
          </ul>
        </div>
        <div className='quick-links'>
          <h1>
            Quick Links
          </h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>
      <hr />
      <p className='copyright'>copyright@BHUPIKA-ENTERPISES PVT LTD.</p>
    </footer>
  )
}

export default Footer
