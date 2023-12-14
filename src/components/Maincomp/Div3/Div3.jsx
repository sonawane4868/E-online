import React from 'react'
import './Div3.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
   superLargeDesktop: {
     // the naming can be any, depends on you.
     breakpoint: { max: 4000, min: 3000 },
     items: 4
   },
   desktop: {
     breakpoint: { max: 3000, min: 1024 },
     items: 4
   },
   tablet: {
     breakpoint: { max: 1024, min: 464 },
     items: 2
   },
   mobile: {
     breakpoint: { max: 464, min: 0 },
     items: 1
   }
 };

const Div3 = () => {
  return (
    <div className='div3 mt-5 pt-5 mb-5 pb-5'>
            <h2 className='fw-bold text-dark heading ' style={{'font-size':"40px" , "font-weight":"800" }}>Our Online Classes</h2>
      <div className='item-head d-flex flex-row my-5'>
        <span className='me-4 fw-bold'>ALL</span>
        <span className='mx-4 fw-bold'>BUSSINESS</span>
        <span className='mx-4 fw-bold'>DESIGN</span>
        <span className='mx-4 fw-bold'>DEVELOPMENT</span>
        <span className='mx-4 fw-bold'>MANAGEMENT</span>
        <span className='mx-4 fw-bold'>TECHNOLOGY</span>
        <span className='mx-4 fw-bold'>PHOTO</span>
      </div>
      <div className='grid my-5'>

      <div className='product-item' id='grid-1'>
        <div className='second-parent'>
         <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbGFwdG9wfGVufDB8fDB8fHww" alt="" className='img-grid' />
         <div className='d-flex  secondd py-3'>
            <div className='price ms-3 mt-2'> <span>$80</span></div>
         <div className='rating ms-4 mt-1'>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9734;</span>
          </div>
         </div>
         </div>
         <div className='px-3 py-2 mt-2'>
            <h4 className='fw-bold text-start'>Master Web Design</h4>
            <p className='text-start'>Lecturer <span className='dark-green'>admin</span> in <span className='dark-green'>Creative Design</span></p>
            <hr className='mt-4' style={{"color":"#555"}}/>
         </div>
         <div className='d-flex flex-row px-3 mb-4 bt'>
            <div className='me-3 d-flex align-items-center'><img src="./profile.png" alt="" className='img-stat ' /> 2006</div>
            <div className='mx-3 d-flex align-items-center'><img src="./time.png" alt="" className='img-stat ' /> 12h 08m</div>
            <div className='mx-3 d-flex align-items-center'><img src="./save.png" alt="" className='img-stat ' /> Lecturers</div>
         </div>
        </div>


        <div className='product-item' id='grid-2'>
        <div className='second-parent'>
         <img src="https://cdn.sanity.io/images/tlr8oxjg/production/bdb77d61d1ef7dc459bf17ae010658476c00d420-1456x816.png" alt="" className='img-grid' />
         <div className='d-flex  secondd py-3 bg-transparent'>
            <div className='price ms-3 mt-2'> <span>$80</span></div>
         <div className='rating ms-4 mt-1'>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9734;</span>
          </div>
         </div>
         </div>
         <div className='px-3 py-2 mt-2'>
            <h4 className='fw-bold text-start'>Cyber Security</h4>
            <p className='text-start'>Lecturer <span className='dark-green'>admin</span> in <span className='dark-green'>Creative Design</span></p>
            <hr className='mt-4' style={{"color":"#555"}}/>
         </div>
         <div className='d-flex flex-row px-3 mb-4 bt'>
            <div className='me-3 d-flex align-items-center'><img src="./profile.png" alt="" className='img-stat ' /> 2006</div>
            <div className='mx-3 d-flex align-items-center'><img src="./time.png" alt="" className='img-stat ' /> 12h 08m</div>
            <div className='mx-3 d-flex align-items-center'><img src="./save.png" alt="" className='img-stat ' /> Lecturers</div>
         </div>
        </div>


        <div className='product-item' id='grid-3'>
        <div className='second-parent'>
         <img src="https://s3.envato.com/files/216688439/K-103-Ake-3047WF.jpg" alt="" className='img-grid' />
         <div className='d-flex  secondd py-3'>
            <div className='price ms-3 mt-2'> <span>$80</span></div>
         <div className='rating ms-4 mt-1'>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9734;</span>
          </div>
         </div>
         </div>
         <div className='px-3 py-2 mt-2'>
            <h4 className='fw-bold text-start'>App Development</h4>
            <p className='text-start'>Lecturer <span className='dark-green'>admin</span> in <span className='dark-green'>Creative Design</span></p>
            <hr className='mt-4' style={{"color":"#555"}}/>
         </div>
         <div className='d-flex flex-row px-3 mb-4 bt'>
            <div className='me-3 d-flex align-items-center'><img src="./profile.png" alt="" className='img-stat ' /> 2006</div>
            <div className='mx-3 d-flex align-items-center'><img src="./time.png" alt="" className='img-stat ' /> 12h 08m</div>
            <div className='mx-3 d-flex align-items-center'><img src="./save.png" alt="" className='img-stat ' /> Lecturers</div>
         </div>
        </div>



        <div className='product-item' id='grid-4'>
        <div className='second-parent'>
         <img src="https://cdn.sanity.io/images/tlr8oxjg/production/2d8450596e26adafc8e47e88a65bce42104b732a-1456x816.png?w=3840&q=80&fit=clip&auto=format" alt="" className='img-grid' />
         <div className='d-flex  secondd py-3'>
            <div className='price ms-3 mt-2'> <span>$80</span></div>
         <div className='rating ms-4 mt-1'>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9734;</span>
          </div>
         </div>
         </div>
         <div className='px-3 py-2 mt-2'>
            <h4 className='fw-bold text-start'>Data Analytics</h4>
            <p className='text-start'>Lecturer <span className='dark-green'>admin</span> in <span className='dark-green'>Creative Design</span></p>
            <hr className='mt-4' style={{"color":"#555"}}/>
         </div>
         <div className='d-flex flex-row px-3 mb-4 bt'>
            <div className='me-3 d-flex align-items-center'><img src="./profile.png" alt="" className='img-stat ' /> 2006</div>
            <div className='mx-3 d-flex align-items-center'><img src="./time.png" alt="" className='img-stat ' /> 12h 08m</div>
            <div className='mx-3 d-flex align-items-center'><img src="./save.png" alt="" className='img-stat ' /> Lecturers</div>
         </div>
        </div>



        <div className='product-item' id='grid-5'>
        <div className='second-parent'>
         <img src="https://cdn.sanity.io/images/tlr8oxjg/production/ada93729daf922ad0318c8c0295e5cb477921808-1456x816.png?w=3840&q=80&fit=clip&auto=format" alt="" className='img-grid' />
         <div className='d-flex  secondd py-3'>
            <div className='price ms-3 mt-2'> <span>$80</span></div>
         <div className='rating ms-4 mt-1'>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9734;</span>
          </div>
         </div>
         </div>
         <div className='px-3 py-2 mt-2'>
            <h4 className='fw-bold text-start'>Machine Learning</h4>
            <p className='text-start'>Lecturer <span className='dark-green'>admin</span> in <span className='dark-green'>Creative Design</span></p>
            <hr className='mt-4' style={{"color":"#555"}}/>
         </div>
         <div className='d-flex flex-row px-3 mb-4 bt'>
            <div className='me-3 d-flex align-items-center'><img src="./profile.png" alt="" className='img-stat ' /> 2006</div>
            <div className='mx-3 d-flex align-items-center'><img src="./time.png" alt="" className='img-stat ' /> 12h 08m</div>
            <div className='mx-3 d-flex align-items-center'><img src="./save.png" alt="" className='img-stat ' /> Lecturers</div>
         </div>
        </div>

        <div className='product-item' id='grid-6'>
        <div className='second-parent'>
         <img src="https://manavrachna.edu.in/wp-content/uploads/2022/08/big-data-center-analyzes-data-science-background-presentation-big-data-center-analyzes-data-science-background-159196598.jpg" alt="" className='img-grid' />
         <div className='d-flex  secondd py-3'>
            <div className='price ms-3 mt-2'> <span>$80</span></div>
         <div className='rating ms-4 mt-1'>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9734;</span>
          </div>
         </div>
         </div>
         <div className='px-3 py-2 mt-2'>
            <h4 className='fw-bold text-start'>Data Science</h4>
            <p className='text-start'>Lecturer <span className='dark-green'>admin</span> in <span className='dark-green'>Creative Design</span></p>
            <hr className='mt-4' style={{"color":"#555"}}/>
         </div>
         <div className='d-flex flex-row px-3 mb-4 bt'>
            <div className='me-3 d-flex align-items-center'><img src="./profile.png" alt="" className='img-stat ' /> 2006</div>
            <div className='mx-3 d-flex align-items-center'><img src="./time.png" alt="" className='img-stat ' /> 12h 08m</div>
            <div className='mx-3 d-flex align-items-center'><img src="./save.png" alt="" className='img-stat ' /> Lecturers</div>
         </div>
        </div>
        
        
      </div>


      <Carousel
      responsive={responsive}
      swipeable={true}
      infinite={true}
      keyBoardControl={true}
      autoPlay={true}
      autoPlaySpeed={2500}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-40-px"
      className=' mt-0  h-100 pt-0 pb-3 carousel-custom'
      >
         <div className='item-cou' id='grid-1'>
        <div className='second-parent'>
         <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbGFwdG9wfGVufDB8fDB8fHww" alt="" className='img-grid' />
         <div className='d-flex  secondd py-3'>
            <div className='price ms-3 mt-2'> <span>$80</span></div>
         <div className='rating ms-4 mt-1'>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9734;</span>
          </div>
         </div>
         </div>
         <div className='px-3 py-2 mt-2'>
            <h4 className='fw-bold text-start'>Master Web Design</h4>
            <p className='text-start'>Lecturer <span className='dark-green'>admin</span> in <span className='dark-green'>Creative Design</span></p>
            <hr className='mt-4' style={{"color":"#555"}}/>
         </div>
         <div className='d-flex flex-row px-3 mb-4 bt'>
            <div className='me-3 d-flex align-items-center'><img src="./profile.png" alt="" className='img-stat ' /> 2006</div>
            <div className='mx-3 d-flex align-items-center'><img src="./time.png" alt="" className='img-stat ' /> 12h 08m</div>
            <div className='mx-3 d-flex align-items-center'><img src="./save.png" alt="" className='img-stat ' /> Lecturers</div>
         </div>
        </div>


        <div className='item-cou' id='grid-2'>
        <div className='second-parent'>
         <img src="https://cdn.sanity.io/images/tlr8oxjg/production/bdb77d61d1ef7dc459bf17ae010658476c00d420-1456x816.png" alt="" className='img-grid' />
         <div className='d-flex  secondd py-3 bg-transparent'>
            <div className='price ms-3 mt-2'> <span>$80</span></div>
         <div className='rating ms-4 mt-1'>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9734;</span>
          </div>
         </div>
         </div>
         <div className='px-3 py-2 mt-2'>
            <h4 className='fw-bold text-start'>Cyber Security</h4>
            <p className='text-start'>Lecturer <span className='dark-green'>admin</span> in <span className='dark-green'>Creative Design</span></p>
            <hr className='mt-4' style={{"color":"#555"}}/>
         </div>
         <div className='d-flex flex-row px-3 mb-4 bt'>
            <div className='me-3 d-flex align-items-center'><img src="./profile.png" alt="" className='img-stat ' /> 2006</div>
            <div className='mx-3 d-flex align-items-center'><img src="./time.png" alt="" className='img-stat ' /> 12h 08m</div>
            <div className='mx-3 d-flex align-items-center'><img src="./save.png" alt="" className='img-stat ' /> Lecturers</div>
         </div>
        </div>


        <div className='item-cou' id='grid-3'>
        <div className='second-parent'>
         <img src="https://s3.envato.com/files/216688439/K-103-Ake-3047WF.jpg" alt="" className='img-grid' />
         <div className='d-flex  secondd py-3'>
            <div className='price ms-3 mt-2'> <span>$80</span></div>
         <div className='rating ms-4 mt-1'>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9734;</span>
          </div>
         </div>
         </div>
         <div className='px-3 py-2 mt-2'>
            <h4 className='fw-bold text-start'>App Development</h4>
            <p className='text-start'>Lecturer <span className='dark-green'>admin</span> in <span className='dark-green'>Creative Design</span></p>
            <hr className='mt-4' style={{"color":"#555"}}/>
         </div>
         <div className='d-flex flex-row px-3 mb-4 bt'>
            <div className='me-3 d-flex align-items-center'><img src="./profile.png" alt="" className='img-stat ' /> 2006</div>
            <div className='mx-3 d-flex align-items-center'><img src="./time.png" alt="" className='img-stat ' /> 12h 08m</div>
            <div className='mx-3 d-flex align-items-center'><img src="./save.png" alt="" className='img-stat ' /> Lecturers</div>
         </div>
        </div>



        <div className='item-cou' id='grid-4'>
        <div className='second-parent'>
         <img src="https://cdn.sanity.io/images/tlr8oxjg/production/2d8450596e26adafc8e47e88a65bce42104b732a-1456x816.png?w=3840&q=80&fit=clip&auto=format" alt="" className='img-grid' />
         <div className='d-flex  secondd py-3'>
            <div className='price ms-3 mt-2'> <span>$80</span></div>
         <div className='rating ms-4 mt-1'>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9734;</span>
          </div>
         </div>
         </div>
         <div className='px-3 py-2 mt-2'>
            <h4 className='fw-bold text-start'>Data Analytics</h4>
            <p className='text-start'>Lecturer <span className='dark-green'>admin</span> in <span className='dark-green'>Creative Design</span></p>
            <hr className='mt-4' style={{"color":"#555"}}/>
         </div>
         <div className='d-flex flex-row px-3 mb-4 bt'>
            <div className='me-3 d-flex align-items-center'><img src="./profile.png" alt="" className='img-stat ' /> 2006</div>
            <div className='mx-3 d-flex align-items-center'><img src="./time.png" alt="" className='img-stat ' /> 12h 08m</div>
            <div className='mx-3 d-flex align-items-center'><img src="./save.png" alt="" className='img-stat ' /> Lecturers</div>
         </div>
        </div>



        <div className='item-cou' id='grid-5'>
        <div className='second-parent'>
         <img src="https://cdn.sanity.io/images/tlr8oxjg/production/ada93729daf922ad0318c8c0295e5cb477921808-1456x816.png?w=3840&q=80&fit=clip&auto=format" alt="" className='img-grid' />
         <div className='d-flex  secondd py-3'>
            <div className='price ms-3 mt-2'> <span>$80</span></div>
         <div className='rating ms-4 mt-1'>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9734;</span>
          </div>
         </div>
         </div>
         <div className='px-3 py-2 mt-2'>
            <h4 className='fw-bold text-start'>Machine Learning</h4>
            <p className='text-start'>Lecturer <span className='dark-green'>admin</span> in <span className='dark-green'>Creative Design</span></p>
            <hr className='mt-4' style={{"color":"#555"}}/>
         </div>
         <div className='d-flex flex-row px-3 mb-4 bt'>
            <div className='me-3 d-flex align-items-center'><img src="./profile.png" alt="" className='img-stat ' /> 2006</div>
            <div className='mx-3 d-flex align-items-center'><img src="./time.png" alt="" className='img-stat ' /> 12h 08m</div>
            <div className='mx-3 d-flex align-items-center'><img src="./save.png" alt="" className='img-stat ' /> Lecturers</div>
         </div>
        </div>

        <div className='item-cou' id='grid-6'>
        <div className='second-parent'>
         <img src="https://manavrachna.edu.in/wp-content/uploads/2022/08/big-data-center-analyzes-data-science-background-presentation-big-data-center-analyzes-data-science-background-159196598.jpg" alt="" className='img-grid' />
         <div className='d-flex  secondd py-3'>
            <div className='price ms-3 mt-2'> <span>$80</span></div>
         <div className='rating ms-4 mt-1'>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9734;</span>
          </div>
         </div>
         </div>
         <div className='px-3 py-2 mt-2'>
            <h4 className='fw-bold text-start'>Data Science</h4>
            <p className='text-start'>Lecturer <span className='dark-green'>admin</span> in <span className='dark-green'>Creative Design</span></p>
            <hr className='mt-4' style={{"color":"#555"}}/>
         </div>
         <div className='d-flex flex-row px-3 mb-4 bt'>
            <div className='me-3 d-flex align-items-center'><img src="./profile.png" alt="" className='img-stat ' /> 2006</div>
            <div className='mx-3 d-flex align-items-center'><img src="./time.png" alt="" className='img-stat ' /> 12h 08m</div>
            <div className='mx-3 d-flex align-items-center'><img src="./save.png" alt="" className='img-stat ' /> Lecturers</div>
         </div>
        </div>
      </Carousel>
      
    </div>
  )
}

export default Div3
