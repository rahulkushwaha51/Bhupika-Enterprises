import React from 'react'
import './Leadership.css'
import img1 from '../../assets/director.jpg'
import img2 from '../../assets/gm.jpg'
import img3 from '../../assets/gm-op.jpg'
const Leadership = () => {
  return (
    <div className='leadership'>
      <h1>Our Leadership</h1>
      <div className='leaders-details'>
      <h2> Director</h2>
      <img src={img1} alt="director" />
      <p> Mr. Bhupendra kumar Mishra (Ex-Army), has vast 11 years of distinguished service with Army Technical (Electrical mechanical Engineer Corps), wherein has served length and breadth of the Country. Safe technically and Professionally served as EME school vadodra & 1 EME Centre Secunderbad. Has in depth knowledge of utilization of resources on Operations.</p>

      <h2> GM Management</h2>
      <img src={img2} alt="gm management" />
       <p>  Mr. Ranjeet Rathore  MA Art/ ITI Copa Trade , ( State Head Manvadhikar Media), has vast experience 10 years of experience in Manpower allocation as per skill, Communicating operator during meeting and solving the management as per the required, Monitoring work & communicating to concerned dept in meeting.</p>

      <h2> GM Operation</h2>
      <img src={img3} alt="gm operation" />
       <p> Mr. Sandeep ChauhanB.com, has vast experience of 16 years in the field of consultancy to manage meetings and man power too. As per the required team work have fulfill the resources and personally ensured.
      </p>
      </div>
    </div>
  )
}

export default Leadership
