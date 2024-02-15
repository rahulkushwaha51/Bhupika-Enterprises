import React from 'react'
import './CompanyProfile.css'
import img from '../../assets/Company.png'
const CompanyProfile = () => {
  return (
    <div className='company-profile'>
      <img className='img' src={img} alt=" BHUPIKA ENTERPRISES" />
        <h1>Company Profile</h1>
      <div className='company-details'>
        <div className='text'>
          <div className='subtext'>
            <p>
              BHUPIKA ENTERPRISES PVT. LTD. , Established in Dewas, (Madhya Pradesh) India in the year 2021, we “Bhupika Enterprises Pvt. Ltd.” Are engaged in Providing various kind of Civil & Electrical construction Service that includes Electrical line works, Plumbing, Roads, Pilling work, Pipe Line Work(MS/DI/HDPE/Micro/House Connection), Interiors and Exteriors services, Housekeeping, Manpower supply for wind energy companies & Specialized in wind farm development, Land, civil, electrical & Construction Work.
            </p>
            <p>
              BHUPIKA ENTERPRISES PVT. LTD. , Established in Dewas, (Madhya Pradesh) India in the year 2021, we “Bhupika Enterprises Pvt. Ltd.” Are engaged in Providing various kind of Civil & Electrical construction Service that includes Electrical line works, Plumbing, Roads, Pilling work, Pipe Line Work(MS/DI/HDPE/Micro/House Connection), Interiors and Exteriors services, Housekeeping, Manpower supply for wind energy companies & Specialized in wind farm development, Land, civil, electrical & Construction Work.
            </p>
          </div>
          <div className='purpose'>
            <h2>purpose</h2>
            <p>To be honest in all our activities, dealings, and to consciously introspect our work and action on day to day basis. Every person in our organization must consciously</p>
          </div>
        </div>
        <p>  Our team of experts and professional engineers are gaining experience past many years in the field of civil & electrical engineering. Further our team is managed and guided by our expert mentors who have achieved excellent exposure in civil and electrical services by providing complete client satisfaction. We use latest and high performance machinery & equipment in our services. We provide these services in various parts of the country and make a permanent relationship with our esteemed clients.</p>
      </div>
    </div>
  )
}

export default CompanyProfile
