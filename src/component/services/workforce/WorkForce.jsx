import React from 'react';
import semiskilledImage from '../../../assets/semi.jpg';
import skilledImage from '../../../assets/skilled.jpg';
import highlySkilledImage from '../../../assets/high.jpg';
import unskilledImage from '../../../assets/unskilled.jpg';
import './WorkForce.css'
const WorkForce = () => {
    return (
        <div className='work'>
            <h1>WorkForce Management</h1>
            <div className='skill'>
                <h2>Semiskilled Workers</h2>
                <img src={semiskilledImage} alt="Semiskilled Workers" />
                <p>Our extensive database features a diverse pool of semiskilled workers ready to tackle various tasks across different industries. From assembly line workers to machine operators, we ensure that each candidate possesses the necessary skills and qualifications to excel in their roles.</p>
            </div>
            <div className='skill'>
                <h2>Skilled Workers</h2>
                <img src={skilledImage} alt="Skilled Workers" />
                <p>We understand the importance of skilled labor in driving innovation and productivity. That's why we meticulously vet and select skilled workers who exhibit proficiency in their respective fields, whether it's welding, electrical work, carpentry, or beyond.</p>
            </div>
            <div className='skill'>
                <h2>Highly Skilled Workers</h2>
                <img src={highlySkilledImage} alt="Highly Skilled Workers" />
                <p>For projects demanding advanced expertise and technical proficiency, our database features highly skilled professionals adept at tackling complex challenges. From engineers to IT specialists, we connect businesses with top-tier talent capable of delivering superior results and driving organizational success.</p>
            </div>
            <div className='skill'>
                <h2>Unskilled Workers</h2>
                <img src={unskilledImage} alt="Unskilled Workers" />
                <p>Recognizing the importance of entry-level positions in various industries, we also provide manpower supply services for unskilled workers. Whether you need assistance with general labor, cleaning, or other manual tasks, we have a pool of dependable individuals ready to contribute to your operations.</p>
            </div>
        </div>
    );
};

export default WorkForce;
