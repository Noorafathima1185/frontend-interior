import { faFacebook, faInstagram, faLinkedinIn, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import headerlogo from '../assets/Interior-Insight-logo.png'



function Footer() {
  return (
    <div className="row p-3 bg-warning">

            <div className="col-md-4 p-5">
            <div className='d-flex'>
              <img
                  alt=""
                  src={headerlogo}
                  height="60"
                  className='me-5'
                />
                <h5>Interior Insight</h5>
            </div>
                <p style={{ textAlign: 'justify ',color:'ActiveCaption' }} className='mt-4'>InteriorInsight connects you with top interior design professionals. Explore projects, find the right engineer, and transform your space effortlessly. Admins can easily manage profiles and projects. Your comprehensive solution for all interior design needs.</p>
            </div>

            <div className="col-md-2 d-md-flex justify-content-center p-5">
                <div>
                    <h5>Pages</h5>
                    <p className='mt-4'><Link to={'/'} style={{color:'black',textDecoration:'none'}}>Home Page</Link></p>
                    <p><Link to={'/project'} style={{color:'black',textDecoration:'none'}}>Project Page</Link></p>
                    <p><Link to={'/dashboard'} style={{color:'black',textDecoration:'none'}}>DashBoard</Link></p>
                </div>
            </div>

            <div className="col-md-2 p-5">
                <div style={{color:'ActiveCaption'}}>
                    <h5>Designs</h5>
                    <p className='mt-4'>Houses and Apartments</p>
                    <p>Restaurants and Cafes</p>
                    <p>Offices and Workspaces</p>
                </div>
            </div>

            <div className="col-md-3 p-5">
                <h5>Contact Us</h5>
                <div className='d-flex mt-4'>
                    <input type="text" placeholder='Email id' className='form-control' />
                    <button className='btn btn-success ms-2'>Subscribe</button>
                </div>
                <div className="d-flex justify-content-around mt-3">
                <FontAwesomeIcon icon={faInstagram} size='2xl' />
                <FontAwesomeIcon icon={faFacebook} size="2xl" />
                <FontAwesomeIcon icon={faTwitter} size="2xl" />
                <FontAwesomeIcon icon={faLinkedinIn} size="2xl" />
                </div>
            </div>

            <div className="col-md-1"></div>

        </div>
  )
}

export default Footer