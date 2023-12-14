import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
    <div className='Footer py-5'>
        <div className="container">
            <div className='newsletter p-5 container'>
    <div className="d-flex">
        <div className="w-75-m">     
         <h2 className='fw-bold text-white heading mt-4' style={{'font-size':"40px" , "font-weight":"800"}}>Subscribe Our Newsletters</h2>
         <p className='text-white fs-5 mt-4 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, sit fuga eligendi itaque ab perspiciatis quisquam velit laborum, voluptatum .</p>
         <div className='d-flex flex-row mb-4 '>
            <input type="text" placeholder='Enter your Email address' className='w-50 new-inp'  />
            <button className='newletter-btn'>SUBSCRIBE</button>
         </div>
        </div>
        <div className="w-25-m newsletter-pos text-center">
            <img src="https://www.centrointegralcree.com/wp-content/uploads/2021/10/suscribete-img.png" alt="" className='img-fluid mx-auto' />
        </div>
    </div>
            </div>
            <div className="footer-flex">
                <div className="footer-item st">
                    <img src="./footer-logo.png" alt="" className='img-logo mb-2 mt-0' />
                    <p className='my-2 item'>Privacy Policy</p>
                    <p className='copyright fs-6' >Copyright@Milton 2023,<br />All right Reserverd</p>

                </div>
                <div className="footer-item">
                    <ul>
                        <li className='title mt-2'>Home</li>
                        <li className='item my-2'>Home</li>
                        <li className='item my-2'>About Us</li>
                        <li className='item my-2'>Our process</li>
                        <li className='item my-2'>Services</li>
                    </ul>
                </div>
                <div className="footer-item">
                <ul>
                        <li className='title mt-2'>Latest Courses</li>
                        <li className='item my-2'>Genral Science</li>
                        <li className='item my-2'>Web Development</li>
                        <li className='item my-2'>Civil Engineering</li>
                        <li className='item my-2'>Bussiness Studies</li>
                    </ul>
                </div>
                <div className="footer-item mt-2">
                <ul>
                        <li className='title'>Community</li>
                        <li className='item my-2'>Go premium</li>
                        <li className='item my-2'>Team Plans</li>
                        <li className='item my-2'>Refer a Friend</li>
                        <li className='item my-2'>Gift Cards</li>
                    </ul>
                </div>
                <div className="footer-item mt-2">
                <ul>
                        <li className='title'>Stay Connected</li>
                        <li className='item my-2'><i class="fa fa-twitter me-2 fs-5" aria-hidden="true"></i>Twitter</li>
                        <li className='item my-2'><i class="fa fa-instagram me-2 fs-5" aria-hidden="true"></i>
Instagram</li>
                        <li className='item my-2'><i class="fa fa-youtube me-2 fs-5" aria-hidden="true"></i>Youtube</li>
                    </ul>
                </div>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Footer
